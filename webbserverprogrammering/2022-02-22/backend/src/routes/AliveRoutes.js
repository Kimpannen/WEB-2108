import AliveController from "../controller/AliveController.js";

// Endpoint + Business logic
const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}