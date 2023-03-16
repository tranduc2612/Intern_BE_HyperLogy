export declare class LikeService {
    private likeRepository;
    constructor();
    findAll: (idBlog: any) => Promise<any>;
    save: (like: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findByIdUserAndIdBlog: (data: any) => Promise<any>;
    findLikesByIdBlog: (id: any) => Promise<any>;
}
