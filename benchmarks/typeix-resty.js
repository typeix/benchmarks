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
const resty_1 = require("@typeix/resty");
const http_1 = require("http");
let HomeController = class HomeController {
    actionGet() {
        return { hello: "world" };
    }
};
__decorate([
    (0, resty_1.GET)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "actionGet", null);
HomeController = __decorate([
    (0, resty_1.Controller)({
        path: "/"
    })
], HomeController);
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    (0, resty_1.RootModule)({
        imports: [],
        shared_providers: [
            {
                provide: resty_1.Logger,
                useFactory: () => new resty_1.Logger({
                    options: {
                        level: "info"
                    }
                })
            },
            resty_1.Router
        ],
        providers: [],
        controllers: [HomeController]
    })
], ApplicationModule);
async function bootstrap() {
    const server = (0, http_1.createServer)();
    await (0, resty_1.pipeServer)(server, ApplicationModule);
    server.listen(3000);
}
exports.default = bootstrap();
//# sourceMappingURL=typeix-resty.js.map