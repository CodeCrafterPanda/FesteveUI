import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import CheckoutCard from '@components/checkout/checkout-card'
import CheckoutDetails from '@components/checkout/checkout-details'
import { useCart } from '@contexts/cart/cart.context'

const CheckoutPage: React.FC = () => {
  const { t } = useTranslation('common')
  const { isEmpty } = useCart()

  if (isEmpty) {
    return (
      <Container>
        <div className="py-16 lg:py-20 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading mb-3 lg:mb-5">
            {t('text-cart-empty')}
          </h2>
          <ActiveLink href="/search">
            <a className="text-accent underline font-semibold">
              {t('text-continue-shopping')}
            </a>
          </ActiveLink>
        </div>
      </Container>
    )
  }

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
            <span className="capitalize">{t('breadcrumb-checkout')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
          <div className="md:w-full lg:w-3/5 flex h-full flex-col -mt-1.5">
            <CheckoutDetails />
          </div>
          
          <div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
            <CheckoutCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default CheckoutPage