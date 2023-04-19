// import { useCart } from '../store/Store'

export default function Checkout({ items }) {
  // calculate total
  const total = items.reduce((acc, item) => {
    return acc + item.price
  }, 0)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className="flex flex-col gap-4 p-4 w-full border bg-slate-50 rounded-lg text-slate-900">
      <h2>Checkout</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total}</span>
        </div>
        <div className="flex justify-between text-gray-400 text-sm">
          <span>Tax</span>
          <span>${total * 0.25}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$15</span>
        </div>
        <div className="flex justify-between font-extrabold">
          <span>Total</span>
          <span>${total + 15}</span>
        </div>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" required />
        <label htmlFor="zip">Zip</label>
        <input type="text" name="zip" id="zip" required />
        <button className="border">Place Order</button>
      </form>
    </div>
  )
}
