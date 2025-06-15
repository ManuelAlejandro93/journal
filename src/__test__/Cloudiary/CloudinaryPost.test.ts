import { cloudinaryMultiplePost } from '@/Cloudinary';
import { CloudinarySuccessed } from '@/Interfaces';
import { AxiosResponse } from 'axios';
// import { CloudinarySuccessed } from '@/Interfaces';
// import { AxiosResponse } from 'axios';

// Función para crear File desde URL
const createFileFromUrl = async (
  url: string,
  filename: string
): Promise<File> => {
  //Descargo la imágen
  const response = await fetch(url);
  //obtengo el contenido binario
  const blob = await response.blob();
  //ntroduzco los datos de la imágen en binario, con su nombre y su tipo (ejemplo: image/jpg), es decir, el formato.
  return new File([blob], `${filename}.jpg`, { type: blob.type });
};

const createMockFileList = (files: File[]): FileList => {
  //creo un objeto que simula un FileList
  const fileList = {
    //con las propiedades de un FileList
    //con el contenido esparcido
    ...files,
    //con la propiedad length
    length: files.length,
    //con la propiedad de ser iterable
    item: (index: number) => files[index] || null,
    [Symbol.iterator]: function* () {
      for (let i = 0; i < files.length; i++) {
        yield files[i];
      }
    }
  };

  return fileList as FileList;
};

const imgUrl =
  'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D';

describe('Test on "cloudinaryMultiplePost async function"', () => {
  test('on input [] it must return undefined', async () => {
    const mockInput: [] = [];
    const result = await cloudinaryMultiplePost(
      mockInput as unknown as FileList
    );
    expect(result).toBe(undefined);
  });
  test('on input null it must return undefined', async () => {
    const mockInput: null = null;
    const result = await cloudinaryMultiplePost(
      mockInput as unknown as FileList
    );
    expect(result).toBe(undefined);
  });
  test('on input undefined it must return undefined', async () => {
    const mockInput: undefined = undefined;
    const result = await cloudinaryMultiplePost(
      mockInput as unknown as FileList
    );
    expect(result).toBe(undefined);
  });
  test('Sube correctamente 1 solo archivo / uploads correctly 1 single archive', async () => {
    const imgUrl =
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D';

    const mockFile1 = await createFileFromUrl(imgUrl, 'test-image-1');
    const mockFileList = createMockFileList([mockFile1]);

    const response = await cloudinaryMultiplePost(mockFileList);
    response;

    const realResult = response as any as AxiosResponse<CloudinarySuccessed>[];
    expect(realResult).toHaveLength(1);
    expect(realResult[0].data).toHaveProperty('secure_url');
    expect(realResult[0].data.secure_url).toStrictEqual(expect.any(String));

    expect(realResult[0].data.secure_url).toMatch(
      /^https:\/\/res\.cloudinary\.com/
    );

    expect(realResult[0].status).toBe(200);

    expect(
      (
        response as any as AxiosResponse<CloudinarySuccessed>[]
      )[0].data.secure_url.match(/cloudinary/g)
    ).toBeTruthy();
  });

  test('Sube correctamente 3 archivos / uploads correctly 3 archives', async () => {
    const mockFile1 = await createFileFromUrl(imgUrl, 'test-image-1');
    const mockFile2 = await createFileFromUrl(imgUrl, 'test-image-2');
    const mockFile3 = await createFileFromUrl(imgUrl, 'test-image-3');

    const mockFileList = createMockFileList([mockFile1, mockFile2, mockFile3]);

    const response = await cloudinaryMultiplePost(mockFileList);
    response;

    const realResult = response as any as AxiosResponse<CloudinarySuccessed>[];
    expect(realResult).toHaveLength(3);

    expect(realResult[0].data).toHaveProperty('secure_url');
    expect(realResult[1].data).toHaveProperty('secure_url');
    expect(realResult[2].data).toHaveProperty('secure_url');

    expect(realResult[0].data.secure_url).toStrictEqual(expect.any(String));
    expect(realResult[1].data.secure_url).toStrictEqual(expect.any(String));
    expect(realResult[2].data.secure_url).toStrictEqual(expect.any(String));

    expect(realResult[0].data.secure_url).toMatch(
      /^https:\/\/res\.cloudinary\.com/
    );
    expect(realResult[1].data.secure_url).toMatch(
      /^https:\/\/res\.cloudinary\.com/
    );
    expect(realResult[2].data.secure_url).toMatch(
      /^https:\/\/res\.cloudinary\.com/
    );

    expect(realResult[0].status).toBe(200);
    expect(realResult[1].status).toBe(200);
    expect(realResult[2].status).toBe(200);
  });
});
