import Productitem from '@/components/Productitem'
import { data } from '@/utils/data'

export default function Home() {
  
  const {products} = data

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {
        products.map((product) => (
          <Productitem key={product.id} product={product}/>
        ))
      }
    </div>
  )
}
