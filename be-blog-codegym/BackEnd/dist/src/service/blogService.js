"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const blog_1 = require("../model/blog");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.find = async () => {
            return await this.blogRepository.find({
                relations: {
                    categories: true,
                    user: true,
                    likes: true
                },
                where: {
                    status: 1
                },
                order: {
                    id: 'desc'
                }
            });
        };
        this.create = async (blog) => {
            return await this.blogRepository.save(blog);
        };
        this.update = async (id, blog) => {
            const query = `UPDATE blog
                       SET title       = '${blog.title}',
                           image       = '${blog.image}',
                           status      = ${blog.status},
                           description = '${blog.description}'
                       WHERE id = ${id};`;
            console.log(await this.blogRepository.query(query));
            return await this.blogRepository.query(query);
        };
        this.findByUser = async (id) => {
            return await this.blogRepository.find({
                relations: {
                    categories: true,
                    user: true,
                    likes: true
                },
                where: {
                    user: {
                        id: id
                    }
                },
                order: {
                    id: 'desc'
                }
            });
        };
        this.findByStatus = async (id) => {
            const query = `
            select *
            from blog
            where status = ${id}
        `;
            return await this.blogRepository.query(query);
        };
        this.delete = async (req, res) => {
            let id = +req.params.id;
            await this.blogRepository.delete({ id: id });
        };
        this.findU = async (id) => {
            let query = `SELECT *
                     FROM blog
                     where userId = ${id}`;
            return await this.blogRepository.query(query);
        };
        this.showStatus = async (id) => {
            let query = `SELECT *
                     FROM blog
                     where status = ${id}`;
            return await this.blogRepository.query(query);
        };
        this.showBlog = async (id) => {
            return await this.blogRepository.find({
                relations: {
                    categories: true,
                    user: true,
                    likes: true
                },
                where: {
                    id: id
                }
            });
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.BlogService = BlogService;
//# sourceMappingURL=blogService.js.map