"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationMiddleware = authorizationMiddleware;
const common_1 = require("@nestjs/common");
function authorizationMiddleware(req, res, next) {
    if (req.headers['authorization'] !== 'Bearer admin') {
        throw new common_1.UnauthorizedException('The token does not match');
    }
    next();
}
//# sourceMappingURL=authorization.middleware.js.map