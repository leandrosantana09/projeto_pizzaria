interface UserRequest {
    user_id: string;
}
declare class DetailUserService {
    execute({ user_id }: UserRequest): Promise<{
        id: string;
        name: string;
        email: string;
    }>;
}
export { DetailUserService };
