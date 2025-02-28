import express, { Request, Response } from "express"
import cors from "cors"

const app = express();
const port: number = 8080;

app.use(cors({ origin: "http://localhost:3000" }))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
})