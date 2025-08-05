import React from 'react'
import { useTranslation } from 'react-i18next'
import Container from '@components/ui/container'
import { BreadcrumbItems } from '@components/common/breadcrumb'
import ActiveLink from '@components/ui/active-link'
import ContactForm from '@components/common/form/contact-form'
import ContactInfoBlock from '@containers/contact-info'

const ContactPage: React.FC = () => {
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
            <span className="capitalize">{t('breadcrumb-contact')}</span>
          </BreadcrumbItems>
        </Container>
      </div>
      
      <Container>
        <div className="py-14 lg:py-20 px-0 max-w-5xl mx-auto">
          <div className="flex flex-wrap bg-brand-light w-full relative overflow-hidden">
            <div className="w-full md:w-1/2 xl:w-2/5 md:pe-8 xl:pe-12 2xl:pe-16 lg:py-12 py-8 xl:py-16 px-4 md:px-8 lg:px-8 xl:px-12 2xl:px-16 flex flex-col justify-center order-2 md:order-1">
              <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mb-3">
                  {t('contact-heading')}
                </h4>
                <p className="text-body text-sm md:text-base leading-7 md:leading-8">
                  {t('contact-description')}
                </p>
              </div>
              <ContactForm />
            </div>
            
            <div className="w-full md:w-1/2 xl:w-3/5 order-1 md:order-2">
              <ContactInfoBlock />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ContactPage