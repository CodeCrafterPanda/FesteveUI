import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { UIProvider } from '@contexts/ui/ui.context'
import { CartProvider } from '@contexts/cart/cart.context'
import { SearchProvider } from '@contexts/search/search.context'
import Layout from '@components/layout/layout'
import HomePage from '@pages/HomePage'
import ShopPage from '@pages/ShopPage'
import ProductPage from '@pages/ProductPage'
import CartPage from '@pages/CartPage'
import CheckoutPage from '@pages/CheckoutPage'
import ContactPage from '@pages/ContactPage'
import AboutPage from '@pages/AboutPage'
import PrivacyPage from '@pages/PrivacyPage'
import TermsPage from '@pages/TermsPage'
import FAQPage from '@pages/FAQPage'
import NotFoundPage from '@pages/NotFoundPage'

function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="bottom-left"
    >
      <UIProvider>
        <CartProvider>
          <SearchProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<ShopPage />} />
                <Route path="/products/:slug" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </SearchProvider>
        </CartProvider>
      </UIProvider>
    </ToastProvider>
  )
}

export default App