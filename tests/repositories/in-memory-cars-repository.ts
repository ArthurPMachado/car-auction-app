import { ICarsRepository } from '@/domain/application/repositories/cars-repository'
import { Car } from '@/domain/enterprise/entities/car'

export class InMemoryCarsRepository implements ICarsRepository {
  public items: Car[] = []

  async create(car: Car) {
    this.items.push(car)
  }

  async findByLicensePlate(licensePlate: string) {
    const car = this.items.find((item) => item.licensePlate === licensePlate)

    if (!car) {
      return null
    }

    return car
  }

  async save(car: Car) {
    const carIndex = this.items.findIndex(
      (item) => item.licensePlate === car.licensePlate,
    )

    this.items[carIndex] = car
  }
}
