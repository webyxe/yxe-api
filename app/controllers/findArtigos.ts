import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindArtigos {
    async handle(req: Request, res: Response) {
        const searchParams = (req.query.search) ? req.query.search as string : "";
        const pageParams = (req.query.page) ? req.query.page as number : 0;
        const quantityPerPage = 2;
        const initialPage = (pageParams * quantityPerPage) - quantityPerPage
        const artigos = await prismaClient.artigos.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: searchParams,
                        },
                    },
                    {
                        content: {
                            contains: searchParams,
                        },
                    },
                ]
            },
            skip: initialPage,
            take: quantityPerPage,
        });

        return res.json(artigos);
    }
}