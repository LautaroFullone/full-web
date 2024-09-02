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

export interface Unit {
   id: string,
   name: string,
   id_brand: string
   id_category: string
   description: string,
   createdDate: string,
   show: boolean,
   isNew: boolean,
   usedBrandName?: string
   images: UnitImage[]
   brand?: Brand,
   category: string 
}

export interface UnitImage {
   id: string,
   fileName: string,
   id_unit: string,
   unit?: Unit
}
  