// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    setInterval(() => {connection.write("Move: up")}, 50)
  } else if (key === "a") {
    setInterval(() => {connection.write("Move: left")}, 50)
  } else if (key === "d") {
    setInterval(() => {connection.write("Move: right")}, 50)
  } else if (key === "s") {
    setInterval(() => {connection.write("Move: down")}, 50);
  }
}

module.exports = setupInput