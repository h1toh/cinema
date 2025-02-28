import express, { Request, Response } from "express";

const app = express();
const port: number = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`);
})