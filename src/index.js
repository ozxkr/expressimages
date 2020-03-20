// las dependencias por buenas practivas se definen como conts y no como var
//
const express = require("express");
const app = express();

app.use(express.static('src/public'));









//importamos  el modulo dandole el path del modulo que deseamos importar
const log = require("./modules/my-log");
//importacion parcial
const { hola, chau } = require("./modules/parcial");

//var querystring = require(querystring);
const { countries } = require("countries-list");

app.get("/", function(request, response) {
  //response.sendFile('src/tabla.html');
  response.status(200).sendFile("tabla.html", { root: "src/public" });
});

app.get("/info", function(request, response) {
  //response.sendFile('src/tabla.html');
  log.info("gola");
  response.status(200).send("hola info");
});

app.get("/not", function(request, response) {
  //response.sendFile('src/tabla.html');
  log.info("gola");
  response.status(200).send("hola info");
});
app.get("/prueba", function(request, response) {
  //response.sendFile('src/tabla.html');
  //response.status(404).send("NOT FOUND");
  response.status(200).sendFile("prueba4.html", { root: "src/public" });
});


app.get("/prueba2", function(request, response) {
  //response.sendFile('src/tabla.html');
  //response.status(404).send("NOT FOUND");
  response.status(200).sendFile("pruebafinal.html", { root: "src/public" });
});

app.get("/carpeta", function(request, response) {
  //response.sendFile('src/tabla.html');
  //response.status(404).send("NOT FOUND");
  response.status(200).sendFile("carpeta.html", { root: "src/public/html" });
});



app.get("*", function(request, response) {
  //response.sendFile('src/tabla.html');
  //response.status(404).send("NOT FOUND");
  response.status(404).sendFile("notfound.html", { root: "src/public" });
});

// var server = http.createServer(function(request, response) {
//   var parsed = url.parse(request.url);
//   console.log("parsed:", parsed);
//   var query = querystring.parse(parsed.query);
//   var pathname = parsed.pathname;
//   if (pathname === "/") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>HELLO</p></body></html>");
//     response.end();
//   } else if (pathname === "/exit") {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write("<html><body><p>Bye</p></body></html>");
//     response.end();
//   } else if (pathname === "/info") {
//     var result = log.info(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end();
//   } else if (pathname === "/error") {
//     var result = log.error(pathname);
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(result);
//     response.end();
//   } else if (pathname === "/country") {
//     response.writeHead(200, { "Content-Type": "application/json" });
//     response.write(JSON.stringify(countries[query.code]));
//     response.end();
//   } else {
//     response.writeHead(404, { "Content-Type": "text/html" });
//     response.write("<html><body><p>NOT  FOUND</p></body></html>");
//     response.end();
//   }
// });
//en que puerto se pone a escuchar
//usamos las importaciones parciales como funciones
hola();
chau();
app.listen(4000, function() {
  console.log("runnig en 4000");
});

//server.listen(4000);
