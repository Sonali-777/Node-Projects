import http from "http";
import {myfunc} from "./router/router.js";

const server = http.createServer();
const port = 3005;
server.on('request', myfunc);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${3005}`);
});