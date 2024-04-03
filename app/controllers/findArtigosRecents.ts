import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindArtigosRecents {
    async handle(req: any, res: any) {
        const artigos = await prismaClient.artigos.findMany({
            take: 3,
            orderBy: [{ created_at: 'desc'}],
        });
        return res.json(artigos);
    }
}