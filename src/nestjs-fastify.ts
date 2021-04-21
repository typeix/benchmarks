import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";

@Controller("/")
class HelloWorldController {
    @Get()
    helloWorld(): any {
        return {hello: "world"};
    }
}

@Module({
   controllers: [HelloWorldController]
})
export class AppModule {}


async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );
    await app.listen(3000);
}
bootstrap();