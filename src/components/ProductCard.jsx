import React from 'react'
import { useFavorites } from '../store/Store'

export default function ProductCard({ item, addToCart }) {
  const [isFavorited, setIsFavorited] = React.useState(false)
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites()

  React.useEffect(() => {
    setIsFavorited(favorites.some((favorite) => favorite.id === item.id))
  }, [favorites, item.id])

  function handleClick() {
    const itemToAdd = { ...item, UUID: item.UUID + Math.random() }
    addToCart(itemToAdd)
  }

  function handleFavorite() {
    if (isFavorited) {
      removeFromFavorites(item)
    } else {
      addToFavorites(item)
    }
  }

  return (
    <div className="flex flex-col text-center w-full h-full sm:w-full bg-gray-900 rounded-lg text-slate-200 shadow-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={`/src/assets/${item.image}`}
          alt={item.title}
        />
        <div
          onClick={handleFavorite}
          className="absolute top-2 left-2 bg-white p-1 rounded-full cursor-pointer select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill={
                isFavorited ? 'rgb(252 165 165 / 1)' : 'rgb(252 165 165 / 0.2)'
              }
              stroke="currentColor"
              d="m10.65 19.8l-1.725-1.575q-2.65-2.425-4.788-4.813T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.538t2.5-.562q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.575.525-1.35.525t-1.35-.525Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 h-full justify-between">
        <h2>{item.title}</h2>

        <p>{item.description}</p>
        <div className="flex flex-col place-content-center items-center gap-2">
          <p className=" text-gray-400">${item.price}</p>
          <button onClick={handleClick}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
