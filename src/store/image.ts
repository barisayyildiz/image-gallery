import { createSlice } from '@reduxjs/toolkit'

type ImageLink = {
  source: string,
  link: string,
}

type ImageState = {
  images: ImageLink[],
  loading: boolean,
  error: string,
}

const initialState: ImageState = {
  images: [],
  loading: false,
  error: ''
}

export const imageSlice = createSlice({
  name: 'image',
  initialState: initialState as ImageState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

export const { setImages, setError, setLoading } = imageSlice.actions
export const selectImage = (state: { image: ImageState }) => state.image;

export default imageSlice.reducer
