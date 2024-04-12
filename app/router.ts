import { Router } from "express";
import { FindArtigos } from "./controllers/findArtigos";
import { FindArtigosSingle } from "./controllers/findArtigosSingle";
import { FindArtigosRecents } from "./controllers/findArtigosRecents";
import { FindTags } from "./controllers/findTags";
import { FindContatoController } from "./controllers/FindContatoController";
import { CreateContatoController } from "./controllers/CreateContatoController";

const router = Router();
const example = {
    name: "Felipe"
};

const findArtigos = new FindArtigos();
const findArtigosSingle = new FindArtigosSingle();
const findArtigosRecents = new FindArtigosRecents();

const findTags = new FindTags();

const contactFind = new FindContatoController();
const contactCreate = new CreateContatoController();

router.get("/contatos/find", contactFind.handle);
router.post("/contatos/create", contactCreate.handle);

router.get("/artigos", findArtigos.handle);
router.get("/artigos/single", findArtigosSingle.handle);
router.get("/artigos/recentes", findArtigosRecents.handle);
router.get("/tags/", findTags.handle);

router.get("/", function (req, res) {
    res.json(example);
});

export { router };