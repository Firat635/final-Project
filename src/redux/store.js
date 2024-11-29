import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './feature/product/ProductSlice'
import  productDetail  from './feature/productDetail/ProductDetailSlice'

export const store = configureStore({
  reducer: {
    product: productSlice,
    productDetail: productDetail,
  },
})