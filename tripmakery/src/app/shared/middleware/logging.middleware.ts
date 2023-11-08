import {MiddlewareFunction, Injectable} from "@nestjs/common";
import {NestMiddleware} from "@nestjs/common/interfaces/middlewares";
import {Request} from "express";

@Injectable()
export class LoggingMiddleware implements NestMiddleware {

    constructor() {
    }

    resolve(name: string): MiddlewareFunction {
        return (req: Request, res, next) => {
            console.log(LoggingMiddleware.name, req.method + ": " + req.baseUrl + " [" + (req.headers['x-forwarded-for'] || req.connection.remoteAddress) + "]");
            next();
        };
    }

}