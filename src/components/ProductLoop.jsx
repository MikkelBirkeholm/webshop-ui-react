import ProductCard from './ProductCard'
import { useId } from 'react'

export default function ProductLoop({ items, addToCart }) {
  const id = useId()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-start place-items-center">
      {items.map((item, index) => {
        return (
          <ProductCard key={index + id} item={item} addToCart={addToCart} />
        )
      })}
    </div>
  )
}
