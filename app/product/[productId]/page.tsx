import { product } from '../../../utils/product'
import Container from '../../components/Container'
import ProductDetails from './ProductDetails'

interface IParams {
  productId?: string
}

const Product = ({ params }: { params: IParams }) => {
  console.log('Params', params)
  
  return (
    <div className='p-8'>
      <Container><ProductDetails product={product}/></Container>
    </div>
  )
}

export default Product
