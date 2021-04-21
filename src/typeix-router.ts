import {createServer} from "http";
import {Injector, IResolvedRoute, Router} from "@typeix/router";
// resty supports http, https, http2
let router: Router = Injector.createAndResolve(Router, []).get(Router);
/**
 * Add routes
 */
router.get("/", (injector: Injector, route: IResolvedRoute) => {
    return {hello: "world"};
});
let server = router.pipe(createServer());
server.listen(3000);
