import React from 'react'
import ClearCart from './atoms/ClearCart'

export default function Cart({ items, removeFromCart }) {
  function handleClick(e) {
    removeFromCart(e)
  }

  const groupedItems = items
    ? items.reduce((acc, item) => {
        if (acc[item.id]) {
          acc[item.id].quantity++
        } else {
          acc[item.id] = {
            ...item,
            quantity: 1,
          }
        }
        return acc
      }, {})
    : {}

  if (!items || items.length === 0)
    return (
      <div className="flex flex-col gap-4 px-2 py-1 w-full border bg-slate-50 rounded-lg text-slate-900">
        <p className="text-gray-400">Cart empty</p>
      </div>
    )

  return (
    <div className="flex flex-col gap-4 px-2 py-1 w-full border bg-slate-50 rounded-lg text-slate-900">
      <div className="flex justify-between items-center">
        <h3>Items</h3>
        <ClearCart />
      </div>
      {items &&
        Object.values(groupedItems).map((item, index) => {
          return (
            <div key={item.UUID} className="flex items-center gap-2">
              <span
                onClick={() => handleClick(item)}
                className="h-4 aspect-square leading-none flex place-content-center place-items-center rounded-full cursor-pointer select-none hover:bg-red-300"
              >
                ÷
              </span>
              <div className="flex justify-between w-full">
                <span>
                  {item.title}{' '}
                  <span className="text-gray-400 text-sm">
                    {item.quantity > 1 ? '× ' + item.quantity : ''}
                  </span>
                </span>{' '}
                <span>${item.price * item.quantity}</span>
              </div>
            </div>
          )
        })}
      <div className="flex justify-between w-full">
        <span>Total:</span>
        <span className="font-extrabold underline">
          $
          {items &&
            Object.values(groupedItems).reduce((acc, item) => {
              return acc + item.price * item.quantity
            }, 0)}
        </span>
      </div>
    </div>
  )
}
