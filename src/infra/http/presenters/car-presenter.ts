import { Car } from '@/domain/enterprise/entities/car'

export class CarPresenter {
  static toHTTP(car: Car) {
    return {
      name: car.name,
      licensePlate: car.licensePlate,
      brand: car.brand,
      category: car.category,
      year: car.year,
      specifications: car.specifications,
      initialBid: car.initialBid,
      bids: car.bids,
    }
  }
}
