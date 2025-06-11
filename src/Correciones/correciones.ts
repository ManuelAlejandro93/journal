export const useNoteForm = () => {
  const dispatch = useDispatch();
  const imageInputElementRef = useRef<HTMLInputElement>(null);

  const { journalReducer: journalState, authReducer: authState } = useSelector(
    (state: RootState) => state
  );

  /** SUBIR IMÁGENES */
  const submitImages = async (): Promise<void> => {
    const formImages = imageInputElementRef.current?.files;
    if (!formImages || formImages.length === 0) return;
    const promiseArray = [];
    for (let i = 0; i < formImages.length; i++) {
      promiseArray.push(dispatch(uploadImageThunk(formImages[i]))); // ¡cada thunk es una promesa!
    }
    await Promise.all(promiseArray);
  };

  /** GUARDAR NOTA EN FIREBASE, SOLO DESPUÉS DE LAS IMÁGENES */
  const fullUpdateSingleNote = async (e: SubmitEvent) => {
    e.preventDefault();

    // 1. Espera las imágenes (solo si hay)
    await submitImages();

    // 2. Cuando todas las imágenes estén subidas, y el store se haya actualizado:
    //    ¡OJO! Espera a que la mutación de imgUrls haya llegado (opcionalmente puedes hacer un pequeño delay si el estado no se actualiza instantáneamente)

    // 3. Toma el estado más fresco de la nota activa y haz el update
    const state = store.getState(); // O usa useSelector en el hook si la nota activa se actualiza correctamente tras la subida
    const latestActiveNote = state.journalReducer.activeNote;

    await dispatch(
      updateSingleNoteByIDThunk({
        note: { ...latestActiveNote },
        uuid: authState.data?.uuid as string
      })
    );

    // 4. (Opcional) Limpia el input de imágenes si quieres
    if (imageInputElementRef.current) imageInputElementRef.current.value = '';
  };

  /** ... el resto de tu hook ... */
  return {
    fullUpdateSingleNote,
    imageInputElementRef
    // otros retornos...
  };
};
