const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.2.204",
    port: 50541
  });

  conn.on("connect", function() {
    console.log("Succesfully connected to game server")
    conn.write("Name: AKN");
  })

  conn.on("close", function() {
    console.log("It's got a sharp tongue, this server!");
  })

  // conn.listen(50541)
 
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};
module.exports = { connect };