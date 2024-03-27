"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogData = exports.createBlogData = exports.signInData = exports.signUpData = void 0;
const zod_1 = require("zod");
exports.signUpData = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.signInData = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional()
});
exports.createBlogData = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateBlogData = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
