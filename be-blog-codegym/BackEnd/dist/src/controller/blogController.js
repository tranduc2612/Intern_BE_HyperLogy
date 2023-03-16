"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blogService_1 = require("../service/blogService");
class BlogController {
    constructor() {
        this.showAll = async (req, res) => {
            let blogs = await this.blogService.find();
            return res.status(200).json(blogs);
        };
        this.createBlog = async (req, res) => {
            let blog = await this.blogService.create(req.body);
            return res.status(200).json(blog);
        };
        this.editBlogs = async (req, res) => {
            await this.blogService.update(req.params.id, req.body);
            return res.status(200).json({ message: 'ok' });
        };
        this.removeBlogs = async (req, res) => {
            let blogs = await this.blogService.delete(req, res);
            return res.json(blogs);
        };
        this.findBlogByUser = async (req, res) => {
            let blogs = await this.blogService.findByUser(req.params.id);
            return res.json(blogs);
        };
        this.showStatusByUser = async (req, res) => {
            let blogs = await this.blogService.showStatus(req.params.id);
            return res.json(blogs);
        };
        this.showBlog = async (req, res) => {
            let blogs = await this.blogService.showBlog(req.params.id);
            return res.json(blogs);
        };
        this.blogService = new blogService_1.BlogService();
    }
}
exports.default = new BlogController;
//# sourceMappingURL=blogController.js.map