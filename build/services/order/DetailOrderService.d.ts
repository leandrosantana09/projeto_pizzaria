interface OrderRequest {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: OrderRequest): Promise<{
        id: string;
        name: string;
    }>;
}
export { DetailOrderService };
