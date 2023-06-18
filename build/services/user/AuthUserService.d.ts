interface AuthRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthRequest): Promise<{
        name: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
