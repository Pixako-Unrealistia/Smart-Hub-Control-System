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
exports.setHubStatus = void 0;
const setHubStatusService_1 = __importDefault(require("../services/setHubStatusService"));
const setHubStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { hubId } = req.params;
    const { is_online } = req.body; // `is_online` is passed in the body (true/false)
    try {
        const updatedHub = yield setHubStatusService_1.default.updateHubStatus(hubId, is_online);
        if (updatedHub) {
            return res.status(200).json({ message: 'Hub status updated successfully', updatedHub });
        }
        res.status(404).json({ message: `Hub with ID ${hubId} not found` });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update hub status', error: error.message });
    }
});
exports.setHubStatus = setHubStatus;
