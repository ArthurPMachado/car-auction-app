import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { ICarProps } from './interfaces/ICarProps'
import { Optional } from '@/core/types/optional'

export class Car extends Entity<ICarProps> {
  static create(
    props: Optional<ICarProps, 'createdAt' | 'isBidFinished' | 'bids'>,
    id?: UniqueEntityID,
  ) {
    const car = new Car(
      {
        ...props,
        isBidFinished: props.isBidFinished ?? false,
        createdAt: props.createdAt ?? new Date(),
        bids: props.bids ?? [],
      },
      id,
    )

    return car
  }

  get name() {
    return this.props.name
  }

  get licensePlate() {
    return this.props.licensePlate
  }

  get year() {
    return this.props.year
  }

  get brand() {
    return this.props.brand
  }

  get category() {
    return this.props.category
  }

  get specifications() {
    return this.props.specifications
  }

  get initialBid() {
    return this.props.initialBid
  }

  get isBidFinished() {
    return this.props.isBidFinished
  }

  set isBidFinished(isBidFinished: boolean) {
    this.props.isBidFinished = isBidFinished
    this.touch()
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
