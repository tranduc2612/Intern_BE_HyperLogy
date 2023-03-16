"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserService {
    constructor() {
        this.findAll = async () => {
            return await this.userRepository.find();
        };
        this.save = async (user) => {
            let query = `select *
                     from user
                     where username = '${user.username}'`;
            let userFind = await this.userRepository.query(query);
            if (userFind.length != 0) {
                return {
                    message: "has the same name"
                };
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                return await this.userRepository.save(user);
            }
        };
        this.login = async (user) => {
            let query = `select *
                     from user
                     where username = '${user.username}'`;
            let userFind = (await this.userRepository.query(query))[0];
            if (!userFind) {
                return {
                    message: 'User is not exist'
                };
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!comparePassword) {
                    return {
                        message: "pass is wrong"
                    };
                }
                else {
                    let payload = {
                        idUser: userFind._id,
                        username: userFind.username
                    };
                    let secret = 'king';
                    let token = jsonwebtoken_1.default.sign(payload, secret, {
                        expiresIn: 36000
                    });
                    return {
                        token: token,
                        user: userFind
                    };
                }
            }
        };
        this.delete = async (id) => {
            const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
            return await this.userRepository.query(query);
        };
        this.findUserById = async (id) => {
            return await this.userRepository.find({
                where: {
                    id: id
                }
            });
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map