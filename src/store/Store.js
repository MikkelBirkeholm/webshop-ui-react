import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useFavorites = create(
    persist((set) => ({
        favorites: [],
        addToFavorites: (product) => set((state) => ({ favorites: [...state.favorites, product] })),
        removeFromFavorites: (product) => set((state) => ({ favorites: state.favorites.filter((item) => item.id !== product.id) })),
        clearFavorites: () => set({ favorites: [] }),
    }),
        {
            name: 'favorites',
            storage: createJSONStorage(() => localStorage)
        }))

export const useCart = create(
    persist((set) => ({
        cart: [],
        addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
        removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((i) => i.UUID !== product.UUID) })),
        clearCart: () => set({ cart: [] })
    }), {
        name: 'cart',
        storage: createJSONStorage(() => localStorage)
    }))