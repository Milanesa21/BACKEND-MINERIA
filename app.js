import { Express } from "express";
import dotenv from 'dotenv';
import Encuesta from "./model/EncuestaModel.js";

dotenv.config

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app,post('/encuesta', async (req, res) => {
    try {
        const encuesta = await Encuesta.create(req.body)
        res.status(201).json(encuesta);
    }   catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Error al crear la encuesta'});
    }
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});