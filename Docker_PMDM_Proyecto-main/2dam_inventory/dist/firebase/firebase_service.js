"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
const admin = require("firebase-admin");
const path = require("path");
(0, dotenv_1.config)();
let FirebaseService = class FirebaseService {
    constructor() {
        const serviceAccountPath = process.env.FIREBASE_CREDENTIALS_PATH || '';
        if (!serviceAccountPath) {
            throw new Error('Firebase credentials path is not defined.');
        }
        const serviceAccount = require(path.resolve(serviceAccountPath));
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    }
    getFirestore() {
        return admin.firestore();
    }
    async createFirebaseUser(email, active, password) {
        try {
            const userRecord = await admin.auth().createUser({
                email,
                password,
                disabled: active
            });
            return userRecord;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteFirebaseUser(email) {
        try {
            const userRecord = await admin.auth().getUserByEmail(email);
            await admin.auth().deleteUser(userRecord.uid);
        }
        catch (error) {
            throw new Error('No se pudo eliminar el usuario de Firebase: ' + error.message);
        }
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
//# sourceMappingURL=firebase_service.js.map