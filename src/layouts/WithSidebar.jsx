import React from 'react'
import Cart from '../components/Cart'
import { useCart } from '../store/Store'
import Checkout from '../components/Checkout'

export default function WithSidebar({ children, removeFromCart }) {
  const { cart } = useCart()
  const [showCheckout, setShowCheckout] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const dialogRef = React.useRef(null)

  function handleCheckout() {
    setShowCheckout(!showCheckout)
    setOpen(false)
  }

  React.useEffect(() => {
    if (showCheckout) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [showCheckout])

  function handleOpen() {
    setOpen(!open)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-sidebar w-full h-fit gap-4 relative">
      <div>{children}</div>
      <aside className="flex sm:hidden fixed right-4 top-4 flex-col gap-4 bg-slate-50 rounded-lg text-slate-900 p-4 shadow-lg">
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 256 256"
            onClick={handleOpen}
            className="cursor-pointer"
          >
            <path
              fill="currentColor"
              d="m239.89 198.12l-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4a16 16 0 0 0 3.89-12.48ZM96 104a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm32-72a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32Zm48 72a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            onClick={handleOpen}
            className="cursor-pointer"
          >
            <path
              fill="currentColor"
              d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
            ></path>
          </svg>
        )}
        {open && (
          <>
            <h2 className="w-[300px] max-w-[90vw]">Cart</h2>
            <Cart items={cart} removeFromCart={removeFromCart} />
            <button className="border" onClick={handleCheckout}>
              Checkout ➡️
            </button>
          </>
        )}
      </aside>
      <aside className="absolute sm:sticky right-0 top-4 h-fit hidden sm:flex flex-col gap-4 bg-slate-50 rounded-lg text-slate-900 p-4 shadow-lg min-w-[2ch] w-full max-w-[90vw]">
        <h2>Cart</h2>
        <Cart items={cart} removeFromCart={removeFromCart} />
        <button className="border" onClick={handleCheckout}>
          Checkout ➡️
        </button>
      </aside>
      <dialog
        ref={dialogRef}
        className="max-w-[90vw] w-[400px] sm:w-1/2 border bg-slate-50 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          className="cursor-pointer mb-4"
          onClick={handleCheckout}
        >
          <path
            fill="text-slate-900"
            d="m12 13.4l2.9 2.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7L13.4 12l2.9-2.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 10.6L9.1 7.7q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.9 2.9l-2.9 2.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.9-2.9Zm0 8.6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
          ></path>
        </svg>
        {showCheckout && <Checkout items={cart} />}
      </dialog>
    </div>
  )
}
