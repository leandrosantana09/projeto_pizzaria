interface orderRequest {
    order_id: string;
}
declare class RemoveOrderService {
    execute({ order_id }: orderRequest): Promise<{
        name: string;
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    } & {}>;
}
export { RemoveOrderService };
