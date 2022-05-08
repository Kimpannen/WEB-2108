import express from 'express'
import configuration from "./configurations/configuration.js";
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js";
import AliveRoutes from "./routes/AliveRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";

// Initiate ExpressAPP
const app = express()
ApplyMiddlewares(app)

AliveRoutes.routes(app)
UserRoutes.routes(app)

// Start Server
configuration.connectToPort(app)

// 2022-02-24 del1 backend till frontend


