import { createAsyncThunk } from '@reduxjs/toolkit';
import { cloudinaryMultiplePost } from '@/Cloudinary';

export const uploadImageThunk = createAsyncThunk(
  'journal/upload-single-image-thunk',
  (formImages: FileList) => cloudinaryMultiplePost(formImages)
);
