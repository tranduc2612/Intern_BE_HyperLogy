import {UserService} from "../service/userService";
import {Request, Response} from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAll = async (req: Request, res: Response) => {
        let user = await this.userService.findAll()
        return res.status(200).json(user)
    }

    register = async (req: Request, res: Response) => {
        let userAdd = await this.userService.save(req.body)
        return res.status(201).json(userAdd)
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.login(req.body);
        return res.status(200).json(user);
    }

    delete = async (req: Request, res: Response) => {
        await this.userService.delete(req.params.id)
        return res.status(204).json({message: 'ok'})
    }
    getUser = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let user = await this.userService.findUserById(req.params.id);
        return res.status(200).json(user[0]);
    }
}

export default new UserController()