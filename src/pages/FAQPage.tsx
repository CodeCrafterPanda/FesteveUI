import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import Accordion from '@components/ui/accordion'
import { faq } from '@settings/faq-setting'

const FAQPage: React.FC = () => {
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
            <span className="capitalize">{t('breadcrumb-faq')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-16 lg:py-20 px-0 max-w-4xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-4">
              {faq.title}
            </h1>
            <p className="text-body text-sm md:text-base leading-7 md:leading-8">
              {faq.description}
            </p>
          </div>
          
          <div className="space-y-4">
            {faq.faqItems.map((item, index) => (
              <Accordion
                key={index}
                item={item}
                translatorNS="faq"
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default FAQPage