"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    const authToken = req.headers.authorization;
    console.log(authToken);
    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    console.log(token);
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWTOKEN);
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
exports.isAuthenticated = isAuthenticated;
