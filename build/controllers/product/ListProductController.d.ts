import { Request, Response } from 'express';
declare class ListProductController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListProductController };
