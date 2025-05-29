import { createAsyncThunk } from '@reduxjs/toolkit';
import { cloudinaryPost } from '@/Cloudinary';

export const uploadImageThunk = createAsyncThunk(
  'journal/upload-single-image-thunk',
  (File: File) => cloudinaryPost(File)
);
