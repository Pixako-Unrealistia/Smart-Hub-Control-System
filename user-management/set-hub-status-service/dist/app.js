"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const setHubStatusRoutes_1 = __importDefault(require("./routes/setHubStatusRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // For parsing JSON bodies
app.use('/api', setHubStatusRoutes_1.default); // Register the route for setting hub status
const port = process.env.PORT || 3012; // Use a dedicated port for this service
app.listen(port, () => {
    console.log(`Set Hub Status service running on port ${port}`);
});
