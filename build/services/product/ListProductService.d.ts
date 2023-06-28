interface ListProducyRequest {
    category_id: string;
}
declare class ListProductService {
    execute({ category_id }: ListProducyRequest): Promise<({
        name: string;
        id: string;
        creat_at: Date;
        upgrade_at: Date;
        price: string;
        description: string;
        banner: string;
        category_id: string;
    } & {})[]>;
}
export { ListProductService };
