import { left, right } from '@/core/either'
import { ICarsRepository } from '../repositories/cars-repository'
import {
  IGetCarUseCaseRequest,
  IGetCarUseCaseResponse,
} from './interfaces/IGetCarUseCase'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'

export class RegisterBidUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({
    carId,
  }: IGetCarUseCaseRequest): Promise<IGetCarUseCaseResponse> {
    const car = await this.carsRepository.findById(carId)

    if (!car) {
      return left(new ResourceNotFoundError())
    }

    return right({ car })
  }
}
