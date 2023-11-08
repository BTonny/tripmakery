import {Module, NestModule} from '@nestjs/common';
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {BookingModule} from "./modules/booking/booking.module";
import {LoggingMiddleware} from "./shared/middleware/logging.middleware";
import {DatabaseModule} from "./shared/modules/database.module";

@Module({
    controllers: [
    ],
    imports: [
        BookingModule,
        DatabaseModule
    ],
    providers: [
    ]
})
export class ApplicationModule implements NestModule {

    constructor() {
    }

    configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(LoggingMiddleware)
            .forRoutes('*');
    }

}