export interface PointOfInterestContent {
  title?: string
  subtitle?: string
  description?: any
  audio?: any
}

export interface PointOfInterest {
  _id: string
  coordinates: {
    lat: number
    lng: number
  }
  number: number
  sattelite?: boolean
  category?: {
    name: string
    icon?: string
    color?: {
      hex: string
    }
  }
  image?: any
  contentEn: PointOfInterestContent
  contentNl: PointOfInterestContent
}
