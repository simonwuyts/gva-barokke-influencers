export interface PointOfInterestContent {
  title?: string
  description?: any[]
  audio?: string
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
  image?: string
  contentEn: PointOfInterestContent
  contentNl: PointOfInterestContent
}

interface SettingsContent {
  introduction: any[]
  colofon: any[]
}

export interface Settings {
  settingsNl: SettingsContent
  settingsEn: SettingsContent
}
