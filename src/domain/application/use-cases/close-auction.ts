import { left, right } from '@/core/either'
import { ICarsRepository } from '../repositories/cars-repository'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import {
  ICloseAuctionUseCaseRequest,
  ICloseAuctionUseCaseResponse,
} from './interfaces/ICloseAuctionUseCase'
import { BidAlreadyFinishedError } from './errors/bid-already-finished-error'
import { RankingsBidsAndGetBidWinner } from './utils/ranking-bids-and-get-bid-winner'

export class CloseAuctionUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({
    carId,
  }: ICloseAuctionUseCaseRequest): Promise<ICloseAuctionUseCaseResponse> {
    const car = await this.carsRepository.findById(carId)

    if (!car) {
      return left(new ResourceNotFoundError())
    }

    if (car.isBidFinished) {
      return left(new BidAlreadyFinishedError())
    }

    car.isBidFinished = true

    await this.carsRepository.save(car)

    const bidWinner =
      RankingsBidsAndGetBidWinner.rankingsBidsAndGetBidWinner(car)

    const response = {
      car,
      userId: bidWinner.userId.toString(),
      bidValue: bidWinner.bid,
    }

    return right(response)
  }
}
