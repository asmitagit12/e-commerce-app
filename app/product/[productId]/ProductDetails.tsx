'use client'

import { Rating } from '@mui/material'
import { useCallback, useState } from 'react'
import SetColor from '../../components/products/SetColor'

interface ProductDetailsProps {
  product: any
}

export type CartProductType = {
  id: string
  name: string
  description: string
  category: string
  brand: string
  selectedImg: SelectedImgType
  quantity: number
  price: number
}

export type SelectedImgType = {
  color: string
  colorCode: string
  image: string
}

const Horizontal = () => {
  return <hr className='w-[30%] my-2' />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price
  })

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length

  const handleColorSelect = useCallback((value: SelectedImgType) => {
    
  }, [cartProduct.selectedImg])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <div>images</div>
      <div className='flex flex-col gap-1 text-gray-500 text-sm'>
        <h2 className='text-3xl font-medium text-gray-700'>{product.name}</h2>
        <div className='flex items-center gap-2'>
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className='text-justify'>{product.description}</div>
        <Horizontal />
        <div>
          <span className='font-semibold'>CATEGORY:</span> {product.category}
        </div>
        <div>
          <span className='font-semibold'>BRAND:</span> {product.brand}
        </div>
        <div className={product.inStock ? 'text-green-400' : 'text-red-400'}>
          {product.inStock ? 'In Stock' : 'Out of stock'}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <div>Quantity</div>
        <Horizontal />
        <div>Add To cart</div>
      </div>
    </div>
  )
}

export default ProductDetails