export declare class UserService {
    private userRepository;
    constructor();
    findAll: () => Promise<any>;
    save: (user: any) => Promise<any>;
    login: (user: any) => Promise<{
        message: string;
        token?: undefined;
        user?: undefined;
    } | {
        token: string;
        user: any;
        message?: undefined;
    }>;
    delete: (id: any) => Promise<any>;
    findUserById: (id: any) => Promise<any>;
}
