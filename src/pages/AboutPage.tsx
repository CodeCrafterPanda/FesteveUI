import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import { aboutSetting } from '@settings/about-setting'

const AboutPage: React.FC = () => {
  const { t } = useTranslation('common')

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
            <span className="capitalize">{t('breadcrumb-about')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-16 lg:py-20 px-0 max-w-5xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-4">
              {aboutSetting.title}
            </h1>
            <p className="text-body text-sm md:text-base leading-7 md:leading-8 max-w-3xl mx-auto">
              {aboutSetting.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {aboutSetting.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-sm leading-6">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPage