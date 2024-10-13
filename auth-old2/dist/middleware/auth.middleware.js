"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_util_1 = require("../utils/jwt.util"); // Your JWT verification function
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token; // Extract the token from cookies
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' }); // Send response but don't return it explicitly
        return; // Explicitly return to stop further execution
    }
    try {
        // Verify the token and attach the decoded user data to req.user
        const user = (0, jwt_util_1.verifyToken)(token); // Log to check if user data is correct
        console.log('Decoded user from token in middleware:', user); // Debugging log
        req.user = user; // Attach the user object to the request
        next(); // Proceed to the next middleware or controller
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Unauthorized' }); // Send the response
        return; // Explicitly return after sending a response
    }
};
exports.authMiddleware = authMiddleware;
