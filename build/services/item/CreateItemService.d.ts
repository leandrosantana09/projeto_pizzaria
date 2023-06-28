interface ItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
declare class CreateItemService {
    execute({ order_id, product_id, amount }: ItemRequest): Promise<{
        id: string;
        creat_at: Date;
        upgrade_at: Date;
        amount: number;
        order_id: string;
        product_id: string;
    } & {}>;
}
export { CreateItemService };
