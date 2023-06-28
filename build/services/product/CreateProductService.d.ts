interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
declare class CreateProductService {
    execute({ name, price, description, banner, category_id }: ProductRequest): Promise<{
        name: string;
        id: string;
        creat_at: Date;
        upgrade_at: Date;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    } & {}>;
}
export { CreateProductService };
