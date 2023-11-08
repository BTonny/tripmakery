import { Injectable } from "@nestjs/common";
import * as mongoose from "mongoose";
import { Environment } from "../../config/config";

@Injectable()
export class MongooseService {
  constructor() {
    try {
      const url: string = this.buildMongoUrl();
      (<any>mongoose).Promise = global.Promise;
      mongoose.set("debug", false);

      mongoose.connect(
        url,
        {
          promiseLibrary: global.Promise,
          reconnectTries: Number.MAX_VALUE,
          reconnectInterval: 1000,
        },
        (err) => {
          if (err) {
            throw err;
          }
        }
      );
    } catch (err) {
      throw err;
    }
  }

  private buildMongoUrl(): string {
    if (Environment.database.url) {
      return Environment.database.url;
    }

    if (Environment.database.user && Environment.database.password) {
      return `mongodb://${encodeURIComponent(
        Environment.database.user
      )}:${encodeURIComponent(Environment.database.password)}@${
        Environment.database.host
      }:${Environment.database.port}/${
        Environment.database.db
      }?authSource=admin`;
    }

    return `mongodb://${Environment.database.host}:${Environment.database.port}/${Environment.database.db}`;
  }
}
