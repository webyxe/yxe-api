import { Request, Response } from "express";
import prismaClient from "./prismaClient";

export class CreateContatoController {
    async handle(request: Request, response: Response) {

        const responseContent = {
            status: false,
            message: "Houve um erro ao tentar enviar os dados.",
            data: {},
            resend: {}
        };
        const { name, email, phone } = request.body;

        if (!name || name == "") { responseContent.message = "Preencha o campo name"; }
        else if (!email || email == "") { responseContent.message = "Preencha o campo email"; }
        else if (!phone || phone == "") { responseContent.message = "Preencha o campo telefone"; }
        else {
            try {
                const contatoPrisma = await prismaClient.contato.create({
                    data: {
                        email,
                        name,
                        phone
                    },
                });
                responseContent.status = true;
                responseContent.message = "Recebemos seu contato com sucesso";
                responseContent.data = contatoPrisma;
                return response.json(responseContent);



            }
            catch (erro: any) {
                if (erro.code === 'P2002') { responseContent.message = "Você já está cadastrado em nosso sistema!"; }
            }
        }
        return response.json(responseContent);
    }
}
