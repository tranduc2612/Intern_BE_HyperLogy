import {Category} from "../model/category";
import {AppDataSource} from "../data-source";

export class CategoryService {
    private categoryRepository: any

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    find = async () => {
        return await this.categoryRepository.find()
    }
    save = async (data) => {
        return await this.categoryRepository.save(data)
    }
    delete = async (id)=>{
        let query = `DELETE FROM category WHERE id = ` + id
        return await this.categoryRepository.query(query)
    }
    update = async (id,data)=>{
        let query = `update category set name='${data.name}' where id=${id}`
        return await this.categoryRepository.query(query)
    }
}

export default new CategoryService()