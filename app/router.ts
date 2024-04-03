import { Router } from "express";
import { FindArtigos } from "./controllers/findArtigos";
import { FindArtigosSingle } from "./controllers/findArtigosSingle";
import { FindArtigosRecents } from "./controllers/findArtigosRecents";

const router = Router();
const example = {
    name: "Felipe"
};

const findArtigos = new FindArtigos();
const findArtigosSingle = new FindArtigosSingle();
const findArtigosRecents = new FindArtigosRecents();

router.get("/artigos", findArtigos.handle);
router.get("/artigos/single", findArtigosSingle.handle);
router.get("/artigos/recentes", findArtigosRecents.handle);

router.get("/", function (req, res) {
    res.json(example);
});

export { router };