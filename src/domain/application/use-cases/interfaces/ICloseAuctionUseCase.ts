import { Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Car } from '@/domain/enterprise/entities/car'
import { BidAlreadyFinishedError } from '../errors/bid-already-finished-error'

export interface ICloseAuctionUseCaseRequest {
  licensePlate: string
}

export type ICloseAuctionUseCaseResponse = Either<
  ResourceNotFoundError | BidAlreadyFinishedError,
  {
    car: Car
    userEmail: string
    bidValue: number
  }
>
