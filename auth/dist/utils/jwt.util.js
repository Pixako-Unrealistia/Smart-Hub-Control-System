"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
// Generate JWT token for a user
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        username: user.username,
        email: user.email,
    }, JWT_SECRET, { expiresIn: '1h' } // Token expiration time
    );
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        console.log('Decoded JWT payload:', decoded); // Log the decoded JWT payload for debugging
        return decoded;
    }
    catch (error) {
        console.error('Invalid token:', error);
        throw new Error('Invalid token');
    }
};
exports.verifyToken = verifyToken;
