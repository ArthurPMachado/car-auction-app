export interface ICarProps {
  name: string
  license_plate: string
  year: number
  brand: string
  category: string
  specifications: string
  initialBid: number
  isBidFinished: boolean
  createdAt: Date
  updatedAt: Date | null
}
