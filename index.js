const app = require("./server/express");


app.listen(app.get("port"), () => {
  console.log("Pagina prendido");
});
