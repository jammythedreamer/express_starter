import * as express from "express";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  res.send("hello, world!");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(4000, () => console.log("start"));