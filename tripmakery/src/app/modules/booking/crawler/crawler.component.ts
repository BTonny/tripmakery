import { Injectable } from "@nestjs/common";
import { BookingCrawlerService } from "../../../shared/services/crawler/booking-crawler.service";

@Injectable()
export class CrawlerComponent {
  constructor(private bookingCrawlerService: BookingCrawlerService) {}

  public async crawlBookingPage(url: string): Promise<any> {
    return this.bookingCrawlerService.crawlBookingPage(url);
  }
}
