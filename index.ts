import { httpServer } from "./src/http_server/index";

import { websocket} from "./src/websocket-server/websocket-server";

const HTTP_PORT = 8181;
const WS_PORT:number=3000;


console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

websocket(WS_PORT)




