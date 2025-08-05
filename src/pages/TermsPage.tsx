import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import { termsAndServices } from '@settings/terms-setting'

const TermsPage: React.FC = () => {
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
            <span className="capitalize">{t('breadcrumb-terms')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-16 lg:py-20 px-0 max-w-4xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-4">
              {termsAndServices.title}
            </h1>
            <p className="text-body text-sm">
              {t('text-last-update')}: {termsAndServices.date}
            </p>
          </div>
          
          <div className="prose prose-sm md:prose lg:prose-lg max-w-none">
            {termsAndServices.content.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-heading mb-4">
                  {section.title}
                </h2>
                <div className="text-body leading-7 space-y-4">
                  {section.description.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default TermsPage