export interface Product {
  id: string | number
  name: string
  slug: string
  description?: string
  image: Attachment
  gallery?: Attachment[]
  price: number
  sale_price?: number
  quantity: number
  unit: string
  status: string
  category: Category
  variations?: ProductVariation[]
  variation_options?: VariationOption[]
  [key: string]: unknown
}

export interface ProductVariation {
  id: string | number
  title: string
  price: number
  sale_price?: number
  quantity: number
  is_disable: boolean
  options: VariationOption[]
}

export interface VariationOption {
  name: string
  value: string
}

export interface Category {
  id: string | number
  name: string
  slug: string
  details?: string
  image?: Attachment
  icon?: string
  children?: Category[]
  products?: Product[]
  productCount?: number
}

export interface Attachment {
  id: string | number
  thumbnail: string
  original: string
}

export interface Order {
  id: string | number
  tracking_number: string
  customer_id: number
  customer_contact: string
  customer: Customer
  status: OrderStatus
  amount: number
  children: Order[]
  sales_tax: number
  total: number
  paid_total: number
  payment_id?: string
  payment_gateway: string
  coupon?: Coupon
  discount?: number
  delivery_fee: number
  delivery_time: string
  products: Product[]
  created_at: string
  updated_at: string
  billing_address?: Address
  shipping_address?: Address
}

export interface Customer {
  id: string | number
  name: string
  email: string
  email_verified_at?: string
  created_at: string
  updated_at: string
  is_active?: boolean
  shop_id?: string | number
}

export interface Address {
  id?: string | number
  title: string
  default?: boolean
  address: {
    country: string
    city: string
    state: string
    zip: string
    street_address: string
  }
  type: string
  customer?: Customer
}

export interface OrderStatus {
  id: string | number
  name: string
  color: string
  serial: number
  created_at: string
  updated_at: string
}

export interface Coupon {
  id: string | number
  code: string
  description?: string
  orders: Order[]
  type: string
  image: string
  amount: number
  active_from: string
  expire_at: string
  created_at: string
  updated_at: string
}

export interface PaginatorInfo<T> {
  current_page: number
  data: T[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: any[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: Attachment
  twitterHandle?: string
  twitterCardType?: string
  metaTags?: string
  canonicalUrl?: string
}

export interface Settings {
  id: string | number
  options: {
    siteTitle: string
    siteSubtitle: string
    currency: string
    logo: Attachment
    seo: SEO
    contactDetails: ContactDetails
    [key: string]: unknown
  }
}

export interface ContactDetails {
  socials: {
    icon: string
    url: string
  }[]
  contact: string
  location: {
    lat: number
    lng: number
    city: string
    state: string
    country: string
    zip: string
    formattedAddress: string
  }
  website: string
}