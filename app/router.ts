import { Router } from "express";
import { FindArtigos } from "./controllers/findArtigos";
import { FindArtigosSingle } from "./controllers/findArtigosSingle";

const router = Router();
const example = {
    name: "Felipe"
};

const findArtigos = new FindArtigos();
const findArtigosSingle = new FindArtigosSingle();

router.get("/artigos", findArtigos.handle);
router.get("/artigossingle", findArtigosSingle.handle);

router.get("/", function (req, res) {
    res.json(example);
});

export { router };