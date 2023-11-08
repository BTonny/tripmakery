import { ObjectId } from "bson";
import { Document, model, Model, Schema } from "mongoose";

/**
 * HousingCrawled Interface and Model
 *
 * Feel free to edit both of it depending on your needs.
 */
export interface IHousingCrawled extends Document {
  _id: ObjectId;
  name: string;
  rating: number;
  address: string;
  facilities: Array<string>;
  rules: Array<any>;
}

export const HousingCrawledSchema: Schema = new Schema(
  {
    name: { type: String },
    rating: { type: Number },
    address: { type: String },
    facilities: { type: [String] },
    rules: { type: Schema.Types.Mixed },
  },
  { collection: "crawled", timestamps: true, autoIndex: true }
);

const HousingCrawledModel: Model<IHousingCrawled> = model<IHousingCrawled>(
  "HousingCrawled",
  HousingCrawledSchema
);
export default HousingCrawledModel;
