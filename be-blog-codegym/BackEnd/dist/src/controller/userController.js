"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let user = await this.userService.findAll();
            return res.status(200).json(user);
        };
        this.register = async (req, res) => {
            let userAdd = await this.userService.save(req.body);
            return res.status(201).json(userAdd);
        };
        this.login = async (req, res) => {
            let user = await this.userService.login(req.body);
            return res.status(200).json(user);
        };
        this.delete = async (req, res) => {
            await this.userService.delete(req.params.id);
            return res.status(204).json({ message: 'ok' });
        };
        this.getUser = async (req, res) => {
            console.log(req.params.id);
            let user = await this.userService.findUserById(req.params.id);
            return res.status(200).json(user[0]);
        };
        this.userService = new userService_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map