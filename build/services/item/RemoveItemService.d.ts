interface ItemRequest {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: ItemRequest): Promise<{
        id: string;
        creat_at: Date;
        upgrade_at: Date;
        amount: number;
        order_id: string;
        product_id: string;
    } & {}>;
}
export { RemoveItemService };
