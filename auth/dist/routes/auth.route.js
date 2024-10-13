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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// Register route
router.post('/register', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_controller_1.register)(req, res);
        next();
    }
    catch (error) {
        next(error);
    }
}));
// Login route
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_controller_1.login)(req, res);
        next();
    }
    catch (error) {
        next(error);
    }
}));
// Protected route to get the current user's data
router.get('/me', auth_middleware_1.authMiddleware, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, auth_controller_1.getMe)(req, res);
        next();
    }
    catch (error) {
        next(error);
    }
}));
// Logout route
router.post('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.status(200).json({ message: 'Logged out successfully' });
});
exports.default = router;
