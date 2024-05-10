import { Car } from '@/domain/enterprise/entities/car'

export interface ICarsRepository {
  create(car: Car): Promise<void>
  findByLicensePlate(licensePlate: string): Promise<Car | null>
  findById(carId: string): Promise<Car | null>
  save(car: Car): Promise<void>
}
