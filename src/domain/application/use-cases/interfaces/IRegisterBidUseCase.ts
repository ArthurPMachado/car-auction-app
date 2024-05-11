import { Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Bids } from '@/domain/enterprise/entities/interfaces/ICarProps'

export interface IRegisterBidUseCaseRequest {
  licensePlate: string
  bid: Bids
}

export type IRegisterBidUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    licensePlate: string
    bid: Bids
  }
>
