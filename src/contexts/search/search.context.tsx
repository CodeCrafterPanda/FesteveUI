import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface State {
  searchTerm: string
  category: string
  minPrice: number
  maxPrice: number
  sortBy: string
  orderBy: 'asc' | 'desc'
}

type Action =
  | { type: 'SET_SEARCH_TERM'; searchTerm: string }
  | { type: 'SET_CATEGORY'; category: string }
  | { type: 'SET_PRICE_RANGE'; minPrice: number; maxPrice: number }
  | { type: 'SET_SORT'; sortBy: string; orderBy: 'asc' | 'desc' }
  | { type: 'RESET_SEARCH' }

const initialState: State = {
  searchTerm: '',
  category: '',
  minPrice: 0,
  maxPrice: 1000,
  sortBy: 'created_at',
  orderBy: 'desc',
}

function searchReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.searchTerm }
    case 'SET_CATEGORY':
      return { ...state, category: action.category }
    case 'SET_PRICE_RANGE':
      return { ...state, minPrice: action.minPrice, maxPrice: action.maxPrice }
    case 'SET_SORT':
      return { ...state, sortBy: action.sortBy, orderBy: action.orderBy }
    case 'RESET_SEARCH':
      return initialState
    default:
      return state
  }
}

interface SearchContextType extends State {
  setSearchTerm: (searchTerm: string) => void
  setCategory: (category: string) => void
  setPriceRange: (minPrice: number, maxPrice: number) => void
  setSort: (sortBy: string, orderBy: 'asc' | 'desc') => void
  resetSearch: () => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState)

  const setSearchTerm = (searchTerm: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', searchTerm })
  }

  const setCategory = (category: string) => {
    dispatch({ type: 'SET_CATEGORY', category })
  }

  const setPriceRange = (minPrice: number, maxPrice: number) => {
    dispatch({ type: 'SET_PRICE_RANGE', minPrice, maxPrice })
  }

  const setSort = (sortBy: string, orderBy: 'asc' | 'desc') => {
    dispatch({ type: 'SET_SORT', sortBy, orderBy })
  }

  const resetSearch = () => {
    dispatch({ type: 'RESET_SEARCH' })
  }

  const value = {
    ...state,
    setSearchTerm,
    setCategory,
    setPriceRange,
    setSort,
    resetSearch,
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}