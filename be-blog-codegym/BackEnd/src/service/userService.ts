import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

export class UserService {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findAll = async () => {
        return await this.userRepository.find()
    }
    save = async (user) => {
        let query = `select *
                     from user
                     where username = '${user.username}'`
        let userFind = await this.userRepository.query(query);
        if (userFind.length != 0) {
            return {
                message: "has the same name"
            }
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            return await this.userRepository.save(user)
        }
    }
    login = async (user) => {
        let query = `select *
                     from user
                     where username = '${user.username}'`
        let userFind = (await this.userRepository.query(query))[0];
        if (!userFind) {
            return {
                message: 'User is not exist'
            };
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password)
            if (!comparePassword) {
                return {
                    message: "pass is wrong"
                };
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let secret = 'king'
                let token = jwt.sign(payload, secret, {
                    expiresIn: 36000
                })
                return {
                    token: token,
                    user: userFind
                }
            }
        }
    }

    delete = async (id) => {
        const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
        return await this.userRepository.query(query)
    }

    findUserById = async (id) => {
        return await this.userRepository.find({
            where: {
                id: id
            }
        })
    }
}
