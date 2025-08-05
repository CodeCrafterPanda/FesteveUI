import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import { useProductQuery } from '@framework/product/get-product'
import ProductSingleDetails from '@components/product/product-single-details'
import RelatedProducts from '@containers/related-products'
import Divider from '@components/ui/divider'
import ProductLoader from '@components/ui/loaders/product-loader'

const ProductPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation('common')
  
  const { data: product, isLoading, error } = useProductQuery(slug!)

  if (isLoading) return <ProductLoader />
  if (error) return <div>Error loading product</div>

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
            <ActiveLink
              href="/search"
              activeClassName="font-semibold text-heading"
            >
              <a className="capitalize">{t('breadcrumb-products')}</a>
            </ActiveLink>
            <span className="capitalize">{product?.name}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
          {product && <ProductSingleDetails product={product} />}
        </div>
        
        <RelatedProducts 
          sectionHeading="text-related-products"
          categorySlug={product?.category?.slug}
          className="mb-9 lg:mb-10 xl:mb-14"
        />
        
        <Divider className="mb-9 lg:mb-10 xl:mb-14" />
      </Container>
    </>
  )
}

export default ProductPage