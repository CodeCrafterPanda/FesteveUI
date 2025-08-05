import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface State {
  displaySidebar: boolean
  displayFilter: boolean
  displayModal: boolean
  displayCart: boolean
  displaySearch: boolean
  modalView: string
  modalData: any
  drawerView: string | null
  toastText: string
}

type Action =
  | { type: 'OPEN_SIDEBAR' }
  | { type: 'CLOSE_SIDEBAR' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'OPEN_SEARCH' }
  | { type: 'CLOSE_SEARCH' }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' }
  | { type: 'OPEN_FILTER' }
  | { type: 'CLOSE_FILTER' }
  | { type: 'SET_MODAL_VIEW'; view: string }
  | { type: 'SET_MODAL_DATA'; data: any }
  | { type: 'SET_DRAWER_VIEW'; view: string | null }
  | { type: 'SET_TOAST_TEXT'; text: string }

const initialState: State = {
  displaySidebar: false,
  displayFilter: false,
  displayModal: false,
  displayCart: false,
  displaySearch: false,
  modalView: 'LOGIN_VIEW',
  modalData: null,
  drawerView: null,
  toastText: '',
}

function uiReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      return { ...state, displaySidebar: true }
    case 'CLOSE_SIDEBAR':
      return { ...state, displaySidebar: false }
    case 'OPEN_CART':
      return { ...state, displayCart: true }
    case 'CLOSE_CART':
      return { ...state, displayCart: false }
    case 'OPEN_SEARCH':
      return { ...state, displaySearch: true }
    case 'CLOSE_SEARCH':
      return { ...state, displaySearch: false }
    case 'OPEN_MODAL':
      return { ...state, displayModal: true }
    case 'CLOSE_MODAL':
      return { ...state, displayModal: false }
    case 'OPEN_FILTER':
      return { ...state, displayFilter: true }
    case 'CLOSE_FILTER':
      return { ...state, displayFilter: false }
    case 'SET_MODAL_VIEW':
      return { ...state, modalView: action.view }
    case 'SET_MODAL_DATA':
      return { ...state, modalData: action.data }
    case 'SET_DRAWER_VIEW':
      return { ...state, drawerView: action.view }
    case 'SET_TOAST_TEXT':
      return { ...state, toastText: action.text }
    default:
      return state
  }
}

interface UIContextType extends State {
  openSidebar: () => void
  closeSidebar: () => void
  toggleSidebar: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  openSearch: () => void
  closeSearch: () => void
  openModal: () => void
  closeModal: () => void
  openFilter: () => void
  closeFilter: () => void
  setModalView: (view: string) => void
  setModalData: (data: any) => void
  setDrawerView: (view: string | null) => void
  setToastText: (text: string) => void
}

const UIContext = createContext<UIContextType | undefined>(undefined)

export const useUI = () => {
  const context = useContext(UIContext)
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}

interface UIProviderProps {
  children: ReactNode
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: 'CLOSE_SIDEBAR' })
      : dispatch({ type: 'OPEN_SIDEBAR' })

  const openCart = () => dispatch({ type: 'OPEN_CART' })
  const closeCart = () => dispatch({ type: 'CLOSE_CART' })
  const toggleCart = () =>
    state.displayCart
      ? dispatch({ type: 'CLOSE_CART' })
      : dispatch({ type: 'OPEN_CART' })

  const openSearch = () => dispatch({ type: 'OPEN_SEARCH' })
  const closeSearch = () => dispatch({ type: 'CLOSE_SEARCH' })

  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  const openFilter = () => dispatch({ type: 'OPEN_FILTER' })
  const closeFilter = () => dispatch({ type: 'CLOSE_FILTER' })

  const setModalView = (view: string) => dispatch({ type: 'SET_MODAL_VIEW', view })
  const setModalData = (data: any) => dispatch({ type: 'SET_MODAL_DATA', data })
  const setDrawerView = (view: string | null) => dispatch({ type: 'SET_DRAWER_VIEW', view })
  const setToastText = (text: string) => dispatch({ type: 'SET_TOAST_TEXT', text })

  const value = {
    ...state,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    openCart,
    closeCart,
    toggleCart,
    openSearch,
    closeSearch,
    openModal,
    closeModal,
    openFilter,
    closeFilter,
    setModalView,
    setModalData,
    setDrawerView,
    setToastText,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}