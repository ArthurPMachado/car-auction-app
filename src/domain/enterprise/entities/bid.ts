import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { IBidProps } from './interfaces/IBidProps'

export class Bid extends Entity<IBidProps> {
  static create(props: IBidProps, id?: UniqueEntityID) {
    const bid = new Bid(props, id)

    return bid
  }

  get carId() {
    return this.props.carId
  }

  get bids() {
    return this.props.bids
  }
}
