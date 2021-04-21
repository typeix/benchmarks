import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";

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
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();