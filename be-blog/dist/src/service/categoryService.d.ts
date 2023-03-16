export declare class CategoryService {
    private categoryRepository;
    constructor();
    find: () => Promise<any>;
    save: (data: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    update: (id: any, data: any) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
