import type { Express } from "express";
import express from "express";
import configExpressApp from "./config/express";

const app: Express = express();

// setup express config

configExpressApp(app);

export default app;
