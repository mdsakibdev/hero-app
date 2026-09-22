export interface IAppType {
  image: string
  title: string
  companyName: string
  id: number
  description: string
  size: number
  reviews: string
  ratingAvg: number
  downloads: string
  ratings: IAppType[]
}

export interface IAppType {
  name: string
  count: number
}