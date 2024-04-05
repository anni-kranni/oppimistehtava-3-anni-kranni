import express from 'express';
import Varasto, { Tuote } from '../models/varasto';

const varasto: Varasto = new Varasto();

const apiTuotteetRouter: express.Router = express.Router();

apiTuotteetRouter.use(express.json());

apiTuotteetRouter.delete("/:id", async (req: express.Request, res: express.Response) => {

    await varasto.poista(Number(req.params.id));

    res.json({ "viesti": "Tuote poistettu onnistuneesti" });

});


apiTuotteetRouter.put("/:id", async (req: express.Request, res: express.Response) => {

    let muokattuTuote: Tuote = {
        id: 0,
        koko: req.body.koko,
        vari: req.body.vari,
        varastotilanne: req.body.varastotilanne
    }

    await varasto.muokkaa(muokattuTuote, Number(req.params.id));

    res.json({ "viesti": "Tuotetta muokattu onnistuneesti" });

});

apiTuotteetRouter.post("/", async (req: express.Request, res: express.Response) => {

    let uusiTuote: Tuote = {
        id: 0,
        koko: req.body.koko,
        vari: req.body.vari,
        varastotilanne: req.body.varastotilanne
    }

    await varasto.lisaa(uusiTuote);

    res.json({ "viesti": "Tuote lisätty onnistuneesti" });

});

apiTuotteetRouter.get("/:id", (req: express.Request, res: express.Response) => {

    res.json(varasto.haeYksi(Number(req.params.id)));

});

apiTuotteetRouter.get("/", (req: express.Request, res: express.Response) => {

    res.json(varasto.haeKaikki());

});

export default apiTuotteetRouter;