//todo: método para checkear que el usuario existe.
import {} from 'firebase/auth';

export const regularLogin = async () => {
  try {
    const regularLoginResult = /* await metodo que checkea si el usuario existe(); */
    return {
      ok: true,
      name: regularLoginResult.user.displayName,
      uuid: regularLoginResult.user.uid,
      photo: regularLoginResult.user.photoURL,
      email: regularLoginResult.user.email
    };
  } catch (error) {
    throw error;
  }
};
