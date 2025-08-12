import cors from "cors";
import type { Application } from "express";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../config/swagger";
import { errorHandler } from "../middleware/errorHandler";
import { requestLogger } from "../middleware/pino";
import routes from "../routes";

const configExpressApp = (app: Application) => {
	app.use(requestLogger);
	app.use(express.json());
	app.use(cors());
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
	app.use(errorHandler);
	app.use(routes);

	return app;
};

export default configExpressApp;
