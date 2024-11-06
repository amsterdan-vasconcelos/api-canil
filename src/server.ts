import "dotenv/config";
import mustacheExpress from "mustache-express";
import express from "express";
import helmet from "helmet";
import path from "path";
import mainRouter from "./routes";

const app = express();

app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.engine("mustache", mustacheExpress());

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRouter);

app.use((_req, res) => {
  res.json({ error: { message: "Página não encontrada." } });
});

const port = process.env.PORT;

app.listen(port, () =>
  console.log(`Aplicação rodando no endereço http://localhost:${port}`)
);
