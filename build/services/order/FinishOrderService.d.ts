interface FinishOrderRequest {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: FinishOrderRequest): Promise<{
        name: string;
        id: string;
        table: number;
        status: boolean;
        draft: boolean;
    } & {}>;
}
export { FinishOrderService };
