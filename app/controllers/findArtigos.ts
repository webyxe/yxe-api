import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindArtigos {
    async handle(req: any, res: any) {
        const { search, page, slug } = req.query;
        const quantityPerPage = 12;
        const pageCurrent = (page) ? parseInt(page) : 1;
        const initialPage = (pageCurrent * quantityPerPage) - quantityPerPage;
        const findTag = (slug) ? await prismaClient.tag.findFirst({
            where: {
                slug: slug
            }
        }): null;
        const tagList = (findTag?.id) ? { tagId: findTag?.id} : {};

        const countTotal = await prismaClient.artigo.count({
            where: {
                OR: [
                    { title: { contains: search }, },
                    { content: { contains: search }, },
                ],
                AND: [
                    tagList
                ]
            }
        });

        const artigos = await prismaClient.artigo.findMany({
            where: {
                OR: [
                    { title: { contains: search }, },
                    { content: { contains: search }, },
                ],
                AND: [
                    tagList
                ]
            },
            skip: initialPage,
            take: quantityPerPage,
            orderBy: [{ created_at: 'desc' }],
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