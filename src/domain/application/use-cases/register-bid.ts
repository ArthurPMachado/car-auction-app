import { left, right } from '@/core/either'
import { ICarsRepository } from '../repositories/cars-repository'
import {
  IRegisterBidUseCaseRequest,
  IRegisterBidUseCaseResponse,
} from './interfaces/IRegisterBidUseCase'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class RegisterBidUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({
    licensePlate,
    userId,
    bid,
  }: IRegisterBidUseCaseRequest): Promise<IRegisterBidUseCaseResponse> {
    const car = await this.carsRepository.findByLicensePlate(licensePlate)

    if (!car) {
      return left(new ResourceNotFoundError())
    }

    car.bids.push({
      userId: new UniqueEntityID(userId),
      bid,
    })

    await this.carsRepository.save(car)

    const bidResponse = {
      userId: new UniqueEntityID(userId),
      bid,
    }

    return right({
      licensePlate,
      bid: bidResponse,
    })
  }
}
