import {useParams} from 'react-router-dom'
import ProductItemDetails from '../ProductItemDetails'

const ProductItemDetailsWrapper = props => {
  const params = useParams()
  return <ProductItemDetails {...props} params={params} />
}



export default ProductItemDetailsWrapper