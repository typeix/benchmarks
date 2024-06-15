"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const http_1 = require("http");
const router_1 = require("@typeix/router");
const cluster_1 = require("./cluster");
function bootstrap() {
    let router = router_1.Injector.Sync.createAndResolve(router_1.Router, []).get(router_1.Router);
    router.get("/", (injector, route) => {
        return { hello: "world" };
    });
    let server = router.pipe((0, http_1.createServer)());
    server.listen(3000);
}
exports.bootstrap = bootstrap;
(0, cluster_1.clusterNode)(bootstrap);
//# sourceMappingURL=typeix-router.js.map