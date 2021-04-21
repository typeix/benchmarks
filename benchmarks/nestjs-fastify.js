"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
let HelloWorldController = class HelloWorldController {
    helloWorld() {
        return { hello: "world" };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], HelloWorldController.prototype, "helloWorld", null);
HelloWorldController = __decorate([
    common_1.Controller("/")
], HelloWorldController);
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        controllers: [HelloWorldController]
    })
], AppModule);
exports.AppModule = AppModule;
async function bootstrap() {
    const app = await core_1.NestFactory.create(AppModule, new platform_fastify_1.FastifyAdapter());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=nestjs-fastify.js.map