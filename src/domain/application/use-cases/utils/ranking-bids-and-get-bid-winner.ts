import { Car } from '@/domain/enterprise/entities/car'
import { Bids } from '@/domain/enterprise/entities/interfaces/ICarProps'

export class RankingsBidsAndGetBidWinner {
  static rankingsBidsAndGetBidWinner(car: Car): Bids {
    const rankingBidsByHighestValue = car.bids.sort(
      (bidA, bidB) => bidA.bid - bidB.bid,
    )

    const bidWinner = rankingBidsByHighestValue[0]

    return bidWinner
  }
}
