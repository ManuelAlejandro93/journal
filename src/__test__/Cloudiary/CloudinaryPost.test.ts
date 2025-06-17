import { cloudinaryMultiplePost } from '@/Cloudinary';
import { CloudinarySuccessed } from '@/Interfaces';
import { AxiosResponse } from 'axios';
import { v2 as sdkCloudinary } from 'cloudinary';
// import { CloudinarySuccessed } from '@/Interfaces';
// import { AxiosResponse } from 'axios';

sdkCloudinary.config({
  cloud_name: 'dkr08foul',
  api_key: '342552854382581',
  api_secret: '5aZzlYAoePa9UbkqvsER_QqQF3U',
  secure: true
});
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
    //creo la imagen.
    const mockFile1 = await createFileFromUrl(imgUrl, 'test-image-1');
    //creo el arreglo de imágenes.
    const mockFileList = createMockFileList([mockFile1]);

    //subo el arreglo de imágenes de cloudinary.
    const response = await cloudinaryMultiplePost(mockFileList);
    response;

    //casteo la respuesta para que permita trabajar.
    const realResult = response as any as AxiosResponse<CloudinarySuccessed>[];

    //? Empiezo los tests
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
    //?Finalizo los tests.

    //?Borrar el archivo de cloudinary.
    // Dividir por '/'
    const imageUrLparts = realResult[0].data.secure_url.split('/');
    //  obtener la última parte
    const imageLastUrlPart = imageUrLparts[imageUrLparts.length - 1];
    // Quitar la extensión del archivo
    const imageUrlId = imageLastUrlPart.split('.')[0];

    //hago la elimicación en cloudinary con los URLS
    sdkCloudinary.api.delete_resources([imageUrlId]);
  }, 10000);

  test('Sube correctamente 3 archivos / uploads correctly 3 archives', async () => {
    //creo las imágenes.
    const mockFile1 = await createFileFromUrl(imgUrl, 'test-image-1');
    const mockFile2 = await createFileFromUrl(imgUrl, 'test-image-2');
    const mockFile3 = await createFileFromUrl(imgUrl, 'test-image-3');

    //creo el arreglo de imágenes.
    const mockFileList = createMockFileList([mockFile1, mockFile2, mockFile3]);

    //subo las imágenes a cloudinary.
    const response = await cloudinaryMultiplePost(mockFileList);
    response;

    //casteo la response para que me deje trabajar.
    const realResult = response as any as AxiosResponse<CloudinarySuccessed>[];
    //?Hago los tests.

    expect(realResult).toHaveLength(3);

    expect(realResult[0].status).toBe(200);
    expect(realResult[1].status).toBe(200);
    expect(realResult[2].status).toBe(200);

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

    //?Finalizo los tests

    //!Borrar el archivo de cloudinary.
    //?Image1
    // Dividir por '/'
    const image1UrLparts = realResult[0].data.secure_url.split('/');
    //  obtener la última parte
    const image1LastUrlPart = image1UrLparts[image1UrLparts.length - 1];
    // Quitar la extensión del archivo
    const image1UrlId = image1LastUrlPart.split('.')[0];
    //?Image2
    // Dividir por '/'
    const image2UrLparts = realResult[1].data.secure_url.split('/');
    //  obtener la última parte
    const image2LastUrlPart = image2UrLparts[image1UrLparts.length - 1];
    // Quitar la extensión del archivo
    const image2UrlId = image2LastUrlPart.split('.')[0];
    //?Image2
    // Dividir por '/'
    const image3UrLparts = realResult[2].data.secure_url.split('/');
    //  obtener la última parte
    const image3LastUrlPart = image3UrLparts[image1UrLparts.length - 1];
    // Quitar la extensión del archivo
    const image3UrlId = image3LastUrlPart.split('.')[0];

    //hago la elimicación en cloudinary con los URLS
    sdkCloudinary.api.delete_resources([image1UrlId, image2UrlId, image3UrlId]);
  }, 10000);
});
