import { Request, Response } from "express";
import { send } from "../utils/responseUtils";
import { RESPONSE } from "../utils/responseMsg";
import { posthogVdoBulkDelete } from "../utils/posthogBulkDelete";

export const posthogBulkDelete = async (req: Request, res: Response): Promise<any> => {
    try {
        await posthogVdoBulkDelete()
        return send(res, RESPONSE.SUCCESS)
    } catch (error) {
        return send(res, RESPONSE.UNKNOWN)
    }
}