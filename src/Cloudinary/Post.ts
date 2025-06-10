import axios, { AxiosResponse } from 'axios';
import { CloudinaryFailedType, CloudinarySuccessed } from '@/Interfaces';

export async function cloudinaryMultiplePost(
  formImages: FileList
): Promise<AxiosResponse<CloudinarySuccessed | CloudinaryFailedType>[] | void> {
  if (!formImages || formImages?.length <= 0) {
    return;
  }

  const promiseArray: Promise<
    AxiosResponse<CloudinarySuccessed | CloudinaryFailedType>
  >[] = [];

  for (let i = 0; i < formImages.length; i++) {
    const formData = new FormData();

    formData.append('file', formImages[i]);
    formData.append('upload_preset', 'journal');

    const singlePromise: Promise<
      AxiosResponse<CloudinarySuccessed | CloudinaryFailedType>
    > = axios.post<CloudinarySuccessed | CloudinaryFailedType>(
      'https://api.cloudinary.com/v1_1/dkr08foul/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );

    promiseArray.push(singlePromise);
  }

  try {
    const imgCloudinaryResponse = await Promise.all(promiseArray);
    return imgCloudinaryResponse;
  } catch (error) {
    throw error as AxiosResponse<CloudinaryFailedType>;
  }
}
