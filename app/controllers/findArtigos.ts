import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindArtigos {
    async handle(req: any, res: any) {
        const {search, page} = req.query;
        
        const quantityPerPage = 2;
        const pageCurrent = (page) ? parseInt(page) : 1;
        const initialPage = (pageCurrent * quantityPerPage) - quantityPerPage;

        const countTotal = await prismaClient.artigos.count();

        const artigos = await prismaClient.artigos.findMany({
            where: {
                OR: [
                    { title: { contains: search }, },
                    { content: { contains: search }, },
                ]
            },
            skip: initialPage,
            take: quantityPerPage,
            orderBy: [{ created_at: 'desc'}],
        });

        const jsonReturn = {
            artigos: artigos,
            countTotal: countTotal,
            countCurrent: artigos.length,
            pageCurrent: pageCurrent,
            quantityPerPage: quantityPerPage,
        }

        return res.json(jsonReturn);
    }
}