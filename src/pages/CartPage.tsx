import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import CartCheckoutCard from '@components/cart/cart-checkout-card'
import { useCart } from '@contexts/cart/cart.context'
import CartItem from '@components/cart/cart-item'
import EmptyCart from '@components/cart/empty-cart'

const CartPage: React.FC = () => {
  const { t } = useTranslation('common')
  const { items, total, isEmpty } = useCart()

  return (
    <>
      <div className="pt-6 lg:pt-7">
        <Container>
          <BreadcrumbItems separator="/">
            <ActiveLink
              href="/"
              activeClassName="font-semibold text-heading"
            >
              <a>{t('breadcrumb-home')}</a>
            </ActiveLink>
            <span className="capitalize">{t('breadcrumb-cart')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-16 lg:py-20">
          {!isEmpty ? (
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 lg:pe-10 xl:pe-14 2xl:pe-20">
                <div className="space-y-4">
                  {items.map((item) => (
                    <CartItem key={`${item.id}.${JSON.stringify(item.attributes)}`} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 mt-10 lg:mt-0">
                <CartCheckoutCard />
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
        </div>
      </Container>
    </>
  )
}

export default CartPage