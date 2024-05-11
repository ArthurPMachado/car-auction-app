import { Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Bids } from '@/domain/enterprise/entities/interfaces/ICarProps'

export interface IRegisterBidUseCaseRequest {
  licensePlate: string
  userId: string
  bid: number
}

export type IRegisterBidUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    licensePlate: string
    bid: Bids
  }
>
