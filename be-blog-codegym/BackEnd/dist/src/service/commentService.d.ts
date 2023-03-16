export declare class CommentService {
    private commentRepository;
    constructor();
    findAll: (idBlog: any) => Promise<any>;
    saveAll: (data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<any>;
}
declare const _default: CommentService;
export default _default;
