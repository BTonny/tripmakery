import { Injectable, NotFoundException } from "@nestjs/common";
import { IHousingCrawled } from "../../../shared/models/housing-crawled/housing-crawled.model";
import { HousingCrawledRepository } from "../../../shared/repositories/housing-crawled/housing-crawled.repository";

@Injectable()
export class ApiComponent {
  constructor(private housingCrawledRepository: HousingCrawledRepository) {}

  public async getHousingCrawledDetails(housingId: string): Promise<IHousingCrawled> {
    let housing: IHousingCrawled | PromiseLike<IHousingCrawled>;
    try {
      housing = await this.housingCrawledRepository.findOneById(housingId);
    } catch (error) {
      //for cases where housing id provided is invalid
      throw new NotFoundException("Could not find housing.");
    }
    if (!housing) {
      throw new NotFoundException("Could not find housing.");
    }
    return housing;
  }

  public async saveHousingCrawledDetails(housing: IHousingCrawled): Promise<IHousingCrawled> {
    return await this.housingCrawledRepository.create(housing);
  }
}
