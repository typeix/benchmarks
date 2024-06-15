import {createServer} from "http";
import {Injector, IResolvedRoute, Router} from "@typeix/router";
import {clusterNode} from "./cluster";

export function bootstrap() {
  let router: Router = Injector.Sync.createAndResolve(Router, []).get(Router);
  router.get("/", (injector: Injector, route: IResolvedRoute) => {
    return {hello: "world"};
  });
  let server = router.pipe(createServer());
  server.listen(3000);
}

clusterNode(bootstrap);
