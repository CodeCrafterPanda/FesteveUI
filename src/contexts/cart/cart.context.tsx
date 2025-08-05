import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'
import { useToasts } from 'react-toast-notifications'

export interface Item {
  id: string | number
  name: string
  slug: string
  image: {
    thumbnail: string
    [key: string]: unknown
  }
  price: number
  sale_price?: number
  quantity: number
  stock: number
  [key: string]: unknown
}

interface State {
  items: Item[]
  isEmpty: boolean
  totalItems: number
  totalUniqueItems: number
  total: number
  meta?: {
    [key: string]: any
  }
}

type Action =
  | { type: 'ADD_ITEM'; item: Item }
  | { type: 'REMOVE_ITEM'; id: Item['id'] }
  | { type: 'UPDATE_ITEM'; id: Item['id']; item: Partial<Item> }
  | { type: 'CLEAR_CART' }
  | { type: 'REHYDRATE'; items: Item[] }

const initialState: State = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  total: 0,
}

function cartReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      )

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + action.item.quantity,
        }
        return calculateTotals(updatedItems)
      }

      return calculateTotals([...state.items, action.item])
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter((item) => item.id !== action.id)
      return calculateTotals(updatedItems)
    }

    case 'UPDATE_ITEM': {
      const updatedItems = state.items.map((item) =>
        item.id === action.id ? { ...item, ...action.item } : item
      )
      return calculateTotals(updatedItems)
    }

    case 'CLEAR_CART':
      return initialState

    case 'REHYDRATE':
      return calculateTotals(action.items)

    default:
      return state
  }
}

function calculateTotals(items: Item[]): State {
  const totalUniqueItems = items.length
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const total = items.reduce((total, item) => {
    const price = item.sale_price || item.price
    return total + price * item.quantity
  }, 0)

  return {
    items,
    totalUniqueItems,
    totalItems,
    total,
    isEmpty: totalItems === 0,
  }
}

interface CartContextType extends State {
  addItem: (item: Item, quantity?: number) => void
  removeItem: (id: Item['id']) => void
  updateItem: (id: Item['id'], item: Partial<Item>) => void
  clearCart: () => void
  getItem: (id: Item['id']) => Item | undefined
  inCart: (id: Item['id']) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const { addToast } = useToasts()

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart)
        dispatch({ type: 'REHYDRATE', items })
      } catch (error) {
        console.error('Error parsing saved cart:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  const addItem = (item: Item, quantity = 1) => {
    const itemToAdd = { ...item, quantity }
    dispatch({ type: 'ADD_ITEM', item: itemToAdd })
    addToast(`${item.name} added to cart`, {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  const removeItem = (id: Item['id']) => {
    dispatch({ type: 'REMOVE_ITEM', id })
    addToast('Item removed from cart', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  const updateItem = (id: Item['id'], item: Partial<Item>) => {
    dispatch({ type: 'UPDATE_ITEM', id, item })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    addToast('Cart cleared', {
      appearance: 'success',
      autoDismiss: true,
    })
  }

  const getItem = (id: Item['id']) => {
    return state.items.find((item) => item.id === id)
  }

  const inCart = (id: Item['id']) => {
    return state.items.some((item) => item.id === id)
  }

  const value = {
    ...state,
    addItem,
    removeItem,
    updateItem,
    clearCart,
    getItem,
    inCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}