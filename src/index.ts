/**
 * Module dependencies.
 */
import server from "./core/server";
import { AddressInfo } from "net";

/**
 * Start Express server.
 */
const port = process.env.PORT || 8080;
const serverInstance = server.listen(port, () => {
  // const serverPort = serverInstance.address().port;
  console.log(
    "Server running on port " + (serverInstance.address() as AddressInfo).port
  );
});
