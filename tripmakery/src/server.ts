import "reflect-metadata";
import * as express from 'express';
import {Express} from "express";
import {Server} from "http";
import {NestFactory} from '@nestjs/core';
import {INestApplication} from "@nestjs/common";
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {ApplicationModule} from './app/app.module';
import {Environment} from "./app/shared/config/config";

function swaggerSetup(app: INestApplication): void {
    const options = new DocumentBuilder()
        .setTitle('tripmakery')
        .setDescription('tipmakery services API structure and documentation')
        .setVersion('0.0')
        .addTag('tripmakery')
        .build();

        const document = SwaggerModule.createDocument(app, options);

        SwaggerModule.setup('documentation', app, document);
}

async function bootstrap(): Promise<void> {
    const port: string = process.env.port || process.env.PORT || Environment.webserver.port;
    const instance: Express = express();
    const server: Server = require('http').createServer(instance);
    instance.use(express.json({limit: '50mb'}));
    instance.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));
    instance.disable("x-powered-by");

    const app: INestApplication = await NestFactory.create(ApplicationModule, instance);
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

    swaggerSetup(app);
    await app.init();

    server.setTimeout(180000);
    server.listen(port, () => console.log(`Application is listening on port ${port}`));
}

bootstrap();

