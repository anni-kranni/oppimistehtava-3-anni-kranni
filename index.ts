import express from 'express';
import path from 'path';
import apiTuotteetRouter from './routes/apiTuotteet';

const app: express.Application = express();

const portti: number = Number(process.env.PORT) || 3103;

app.use(express.static(path.resolve(__dirname, "public")));

app.use("/api/tuotteet", apiTuotteetRouter);

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin : ${portti}`);

});