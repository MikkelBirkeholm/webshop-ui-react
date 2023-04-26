import './index.css'
import ProductLoop from './components/ProductLoop'
import WithSidebar from './layouts/WithSidebar'
import React from 'react'
import { useCart } from './store/Store'

export default function App() {
  const { addToCart, removeFromCart } = useCart()

  const items = [
    {
      id: 1,
      UUID: React.useId(),
      title: 'Pringles',
      description:
        'This render looks like a stack of Pringles. Pretty cool, huh?',
      price: 20,
      image: '/p1.jpg',
    },
    {
      id: 2,
      UUID: React.useId(),
      title: 'Something Else',
      description:
        "I don't know man. Yeah. No idea. I mean, it's a render. It's a render of something.",
      price: 13,
      image: '/p2.jpg',
    },
    {
      id: 3,
      UUID: React.useId(),
      title: 'Fruit Roll-Up',
      description:
        'This render looks like a Fruit Roll-Up but see through. Like glass. Crunchy.',
      price: 15,
      image: '/p3.jpg',
    },
    {
      id: 4,
      UUID: React.useId(),
      title: 'B**thole',
      description: 'Tastes better than it looks. Trust me.',
      price: 8,
      image: '/p4.jpg',
    },
    {
      id: 5,
      UUID: React.useId(),
      title: 'Dots',
      description: 'Popping candy. You know what it is. You know what it does.',
      price: 6,
      image: '/p5.jpg',
    },
    {
      id: 6,
      UUID: React.useId(),
      title: 'Stix',
      description:
        'Stick it in your mouth and chew. It will dissolve. It will taste like nothing.',
      price: 10,
      image: '/p6.jpg',
    },
    {
      id: 7,
      UUID: React.useId(),
      title: 'Lakridssnørrebånd',
      description: 'No hands. Fight me.',
      price: 7.5,
      image: '/p7.jpg',
    },
    {
      id: 8,
      UUID: React.useId(),
      title: 'Mints',
      description: 'Fresh breath of air. Thank you, mint. You are the best.',
      price: 2,
      image: '/p8.jpg',
    },
    {
      id: 9,
      UUID: React.useId(),
      title: 'Pink Fudge',
      description:
        'Perfect chewyness. Perfect taste. Perfect texture. Perfect everything.',
      price: 19,
      image: '/p9.jpg',
    },
  ]

  return (
    <main className="relative">
      <h1 className="py-4 font-extrabold drop-shadow-lg">Space Candy</h1>
      <WithSidebar removeFromCart={removeFromCart}>
        <ProductLoop items={items} addToCart={addToCart} />
      </WithSidebar>
    </main>
  )
}
