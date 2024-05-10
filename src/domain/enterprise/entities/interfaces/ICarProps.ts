import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface Bids {
  userId: UniqueEntityID
  bid: number
}

export interface ICarProps {
  name: string
  licensePlate: string
  year: number
  brand: string
  category: string
  specifications: string
  initialBid: number
  isBidFinished: boolean
  bids?: Bids[] | null
  createdAt: Date
  updatedAt?: Date | null
}
