"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_util_1 = require("../utils/jwt.util");
const db_1 = require("../db"); // Assuming you have a Postgres connection pool
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        // Check if user already exists
        const userCheck = yield db_1.pool.query('SELECT * FROM users WHERE email = $1 OR username = $2', [email, username]);
        if (userCheck.rowCount > 0) {
            return res.status(400).json({ message: 'Username or Email already exists' });
        }
        // Hash password and save user
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield db_1.pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Fetch the user from the database based on email
    const user = yield db_1.pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rowCount === 0) {
        return res.status(400).json({ message: 'User not found' });
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, user.rows[0].password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Generate JWT token with full user data
    const token = (0, jwt_util_1.generateToken)({
        id: user.rows[0].id,
        username: user.rows[0].username,
        email: user.rows[0].email,
    });
    // Set token in cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000, // Token expiration (1 hour)
        sameSite: 'strict',
    });
    return res.status(200).json({ message: 'Login successful' });
});
exports.login = login;
// Get the current authenticated user
const getMe = (req, res) => {
    // Check if the user is attached by the authMiddleware
    const user = req.user;
    console.log('User from req.user:', user); // Debugging log
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    return res.status(200).json({ id: user.id, username: user.username, email: user.email });
};
exports.getMe = getMe;
