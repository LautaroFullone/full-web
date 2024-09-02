export type SectionType =
   | 'banner'
   | 'top'
   | 'footer'
   | 'sidebar'
   | 'brands'
   | 'about'
   | 'contact'
   | 'navbar'
   | 'gallery'
   | 'faq'

export interface Brand {
   id: string
   name: string
   description: string
   show: boolean
   image: BrandImage
}

export interface BrandImage {
   // id: string
   fileName: string
   // idBrand: string
   // show: boolean
   // brand: Brand
}
  