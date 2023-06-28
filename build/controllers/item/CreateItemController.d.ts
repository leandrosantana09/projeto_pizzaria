import { Request, Response } from 'express';
declare class CreateItemController {
    handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateItemController };
