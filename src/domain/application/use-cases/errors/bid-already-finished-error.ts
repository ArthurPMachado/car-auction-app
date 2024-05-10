import { UseCaseError } from '@/core/errors/use-case-error'

export class BidAlreadyFinishedError extends Error implements UseCaseError {
  constructor() {
    super('Bid already finished')
  }
}
