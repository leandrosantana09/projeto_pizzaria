interface SendOrderRequest {
    order_id: string;
}
declare class SendOrderService {
    execute({ order_id }: SendOrderRequest): Promise<{
        name: string;
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    } & {}>;
}
export { SendOrderService };
