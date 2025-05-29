import axios, { AxiosResponse } from 'axios';
import { CloudinaryFailedType, CloudinarySuccessed } from '@/Interfaces';

async function cloudinaryPost(
  file: File
): Promise<CloudinarySuccessed | CloudinaryFailedType> {
  const formData = new FormData();

  formData.append('file', file);
  formData.append('upload_preset', 'journal');

  try {
    const response: AxiosResponse<CloudinarySuccessed> =
      await axios.post<CloudinarySuccessed>(
        'https://api.cloudinary.com/v1_1/dkr08foul/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

    return response.data;
  } catch (error) {
    throw error;
  }
}
