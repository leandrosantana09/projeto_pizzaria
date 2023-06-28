declare class ListCategoryService {
    execute(): Promise<{
        id: string;
        name: string;
    }[]>;
}
export { ListCategoryService };
