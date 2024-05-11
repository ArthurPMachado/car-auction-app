import { Either } from '@/core/either'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { Car } from '@/domain/enterprise/entities/car'

export interface IGetCarUseCaseRequest {
  licensePlate: string
}

export type IGetCarUseCaseResponse = Either<
  ResourceNotFoundError,
  {
    car: Car
  }
>
