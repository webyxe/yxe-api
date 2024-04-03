import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindArtigosSingle {
    async handle(req: Request, res: Response) {
        const searchParams = req.query.search as string;
        const artigos = await prismaClient.artigo.findUnique({
            where: {
                slug: searchParams
            }
        });

        return res.json(artigos);
    }
}