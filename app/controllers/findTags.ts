import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class FindTags {
    async handle(req: any, res: any) {

        const tags = await prismaClient.tag.findMany();

        return res.json(tags);
    }
}