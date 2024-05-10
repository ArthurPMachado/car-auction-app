import { UniqueEntityID } from '@/core/entities/unique-entity-id'

interface Bids {
  userId: UniqueEntityID
  bid: number
}

export interface IBidProps {
  carId: UniqueEntityID
  bids: Bids[]
}
