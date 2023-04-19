import React from 'react'
import Cart from '../components/Cart'
import { useCart } from '../store/Store'
import Checkout from '../components/Checkout'

export default function WithSidebar({ children, removeFromCart }) {
  const { cart } = useCart()
  const [showCheckout, setShowCheckout] = React.useState(false)
  const dialogRef = React.useRef(null)

  function handleCheckout() {
    setShowCheckout(!showCheckout)
  }

  React.useEffect(() => {
    if (showCheckout) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [showCheckout])

  return (
    <div className="grid grid-cols-sidebar w-full h-fit gap-4">
      <div>{children}</div>
      <aside className="sticky top-4 h-fit flex flex-col gap-4 bg-slate-50 rounded-lg text-slate-900 p-4 shadow-lg">
        <h2>Cart</h2>
        <Cart items={cart} removeFromCart={removeFromCart} />
        <button className="border" onClick={handleCheckout}>
          Checkout ➡️
        </button>
      </aside>
      <dialog ref={dialogRef} className="bg-transparent max-w-[90vw] w-1/2">
        {showCheckout && <Checkout items={cart} />}
      </dialog>
    </div>
  )
}
