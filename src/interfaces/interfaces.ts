export interface Influencer {
  id: number
  name: string
  email: string
  age: number
  subscribers: number
  at_channel: string
  platform: string
  id_user: number
  id_category: number
  category: string
}

export interface User {
  id: number
  name: string
  email: string
  authorized: boolean
}

export interface Categories {
  id: number,
  category: string
}