import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Container from '@components/ui/container'

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Container>
      <div className="py-16 lg:py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-heading mb-4">404</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-heading mb-4">
              {t('404-heading')}
            </h2>
            <p className="text-body mb-8">
              {t('404-content')}
            </p>
          </div>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            {t('button-go-home')}
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NotFoundPage