const net = require("net");
const { IP, PORT, NAME } = require("./constants")
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", function() {
    console.log("Succesfully connected to game server")
    conn.write(`Name: ${NAME}`);
  })

  conn.on("close", function() {
    console.log("It's got a sharp tongue, this server!");
  })
 
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect };