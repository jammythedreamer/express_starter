import * as express from "express";

class App {
  public application: express.Application;

  constructor() {
    this.application = express.default();
  }
}

const app = new App().application;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello, world!")
})

app.get("/health", (req: express.Request, res: express.Response) => {
  res.send("OK")
})

app.listen(4000, () => console.log("start"));