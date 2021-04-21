"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const router_1 = require("@typeix/router");
let router = router_1.Injector.createAndResolve(router_1.Router, []).get(router_1.Router);
router.get("/", (injector, route) => {
    return { hello: "world" };
});
let server = router.pipe(http_1.createServer());
server.listen(3000);
//# sourceMappingURL=typeix-router.js.map