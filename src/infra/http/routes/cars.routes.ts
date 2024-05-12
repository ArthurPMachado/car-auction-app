import { Router } from 'express'
import { registerCarController } from '../controllers/register-car-controller'
import { registerBidController } from '../controllers/register-bid-controller'
import { getCarAuctionController } from '../controllers/get-car-auction-controller'

export const carRoutes = Router()

carRoutes.post('/', registerCarController)
carRoutes.post('/bid/:licensePlate', registerBidController)
carRoutes.get('/car-auction/:licensePlate', getCarAuctionController)
carRoutes.patch('/close-auction/:licensePlate', getCarAuctionController)
