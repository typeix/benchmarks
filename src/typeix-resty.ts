import {pipeServer, Controller, GET, RootModule, Logger, Router} from "@typeix/resty";
import {createServer} from "http";
// resty supports http, https, http2

// define controller
@Controller({
  path: "/"
})
class HomeController {

  @GET()
  actionGet() {
    return {hello: "world"};
  }
}

// DEFINE MODULE
@RootModule({
  imports: [], // here you can import other modules
  shared_providers: [
    {
      provide: Logger,
      useFactory: () => new Logger({
        options: {
          level: "info"
        }
      })
    },
    Router
  ],
  providers: [],
  controllers: [HomeController]
})
class ApplicationModule {
}

// START SERVER
async function bootstrap() {
  const server = createServer();
  await pipeServer(server, ApplicationModule);
  server.listen(3000);
}

export default bootstrap();
