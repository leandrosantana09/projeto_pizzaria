interface OrderRequest {
    table: number;
    name: string;
}
declare class CreateOrderService {
    execute({ table, name }: OrderRequest): Promise<{
        name: string;
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    } & {}>;
}
export { CreateOrderService };
