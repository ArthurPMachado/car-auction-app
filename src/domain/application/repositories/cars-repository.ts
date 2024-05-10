import { Car } from '@/domain/enterprise/entities/car'

export interface ICarsRepository {
  create(car: Car): Promise<void>
  findByLicensePlate(licensePlate: string): Promise<Car | null>
}
