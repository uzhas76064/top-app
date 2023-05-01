export interface ProductModel {
    _id: string
    categories: string[]
    tags: string[]
    title: string
    image: string
    description: string
    link: string
    price: number
    credit: number
    oldPrice: number
    characteristics: ProductCharacteristic[]
    advantages?: string
    initialRating: number
    createdAt: string
    updatedAt: string
    __v: number
    html: string
    companyId: string
    clicks: number
    reviews: Review[]
    reviewCount: number
    reviewAvg?: number
}

export interface ProductCharacteristic {
    name: string
    value: string
}

export interface Review {
    _id: string
    name: string
    title: string
    description: string
    rating: number
    productId: string
    createdAt: string
    updatedAt: string
    __v: number
}
