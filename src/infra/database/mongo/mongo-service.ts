/* eslint-disable no-use-before-define */
import { env } from '@/core/env'
import { Db, MongoClient } from 'mongodb'

export class MongoService {
  private static instance: MongoService

  private client: MongoClient

  public databaseInstance: Db

  constructor() {
    const {
      MONGO_INITDB_ROOT_USERNAME: DATABASE_USERNAME,
      MONGO_INITDB_ROOT_PASSWORD: DATABASE_PASSWORD,
      MONGO_INITDB_DATABASE: DATABASE_DB,
      DATABASE_HOST,
      DATABASE_PORT,
    } = env

    const URI = `mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}`

    this.client = new MongoClient(URI)

    this.databaseInstance = this.client.db(DATABASE_DB)

    this.connect()
  }

  static getInstance() {
    if (!MongoService.instance) {
      MongoService.instance = new MongoService()
    }

    return MongoService.instance
  }

  async connect() {
    try {
      await this.client.connect()
    } catch (error) {
      console.log('Connection to mongo failed:: ', error)
      throw new Error()
    }
  }
}
