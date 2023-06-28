interface CategoryRequest {
    name: string;
}
declare class CreateCategoryService {
    execute({ name }: CategoryRequest): Promise<{
        id: string;
        name: string;
    }>;
}
export { CreateCategoryService };
