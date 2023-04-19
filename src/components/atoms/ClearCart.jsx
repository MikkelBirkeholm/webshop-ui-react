import { useCart } from '../../store/Store'

export default function ClearCart() {
  const { clearCart } = useCart()

  const confirmClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className="cursor-pointer group"
      onClick={confirmClearCart}
    >
      <path
        fill="currentColor"
        className="group-hover:fill-red-600"
        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"
      ></path>
    </svg>
  )
}
