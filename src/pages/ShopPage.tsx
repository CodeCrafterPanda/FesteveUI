import React from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import Container from '@components/ui/container'
import Layout from '@components/layout/layout'
import SearchTopBar from '@components/search/search-top-bar'
import ActiveLink from '@components/ui/active-link'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import { useProductsQuery } from '@framework/product/get-all-products'
import ProductsGrid from '@components/product/products-grid'
import SearchResultLoader from '@components/ui/loaders/search-result-loader'
import { getDirection } from '@utils/get-direction'

const ShopPage: React.FC = () => {
  const { t } = useTranslation('common')
  const [searchParams] = useSearchParams()
  const { locale } = useTranslation()
  const dir = getDirection(locale)
  
  const { data, isLoading, error } = useProductsQuery({
    limit: 30,
    ...Object.fromEntries(searchParams),
  })

  return (
    <>
      <div className="flex items-center justify-center px-4 py-16 text-center bg-gray-100 border-b border-gray-300">
        <div className="max-w-md">
          <BreadcrumbItems separator="/">
            <ActiveLink
              href="/"
              activeClassName="font-semibold text-heading"
            >
              <a>{t('breadcrumb-home')}</a>
            </ActiveLink>
            <span className="capitalize">{t('breadcrumb-search')}</span>
          </BreadcrumbItems>
        </div>
      </div>
      
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div className="flex-shrink-0 pe-24 hidden lg:block w-96">
            <SearchTopBar />
          </div>
          
          <div className="w-full lg:-ms-9">
            <div className="w-full">
              {isLoading ? (
                <SearchResultLoader />
              ) : (
                <ProductsGrid products={data?.data} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ShopPage