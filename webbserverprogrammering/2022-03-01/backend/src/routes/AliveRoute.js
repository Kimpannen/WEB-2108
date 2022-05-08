import AliveController from "../controllers/AliveController.js";

// Endpoint + Business logic
const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}