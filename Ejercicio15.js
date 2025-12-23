// Esto es para asignaerle valores a la constante automaticamente desde el array.

let serverConfig = ["192.168.45.668", 8080, "Development"];

const [ip, port, env] = serverConfig;

const SERVER = {
  ip,
  port,
  env,
};

console.log(SERVER);
