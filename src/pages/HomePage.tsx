import React from 'react'
import { useTranslation } from 'react-i18next'
import HeroBanner from '@containers/hero-banner'
import BannerCard from '@containers/banner-card'
import ProductsBlock from '@containers/products-block'
import CategoryBlock from '@containers/category-block'
import { siteSettings } from '@settings/site-settings'

const HomePage: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <HeroBanner 
        data={siteSettings.heroBanner}
        className="min-h-screen md:min-h-[600px] lg:min-h-screen"
      />
      
      <BannerCard 
        data={siteSettings.promotionBanner}
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5"
      />
      
      <CategoryBlock 
        sectionHeading="text-shop-by-category"
        className="mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0"
      />
      
      <ProductsBlock 
        sectionHeading="text-featured-products"
        categorySlug="/search"
        className="mb-9 md:mb-10 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0"
        variant="combined"
      />
      
      <BannerCard 
        data={siteSettings.bannerCard}
        className="mb-12 lg:mb-14 xl:mb-16 pb-0.5"
      />
      
      <ProductsBlock 
        sectionHeading="text-new-arrivals"
        categorySlug="/search"
        className="mb-9 md:mb-10 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0"
        variant="slider"
      />
    </>
  )
}

export default HomePage