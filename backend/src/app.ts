import express, { Request, Response } from "express";
import { Sessoes } from "./sessoes";

const app = express()
const port: number = 8080

app.use(express.json());

app.post('/sessoes/:id/filme', (req, res) => {
    const { id } = req.params;
    const { assento } = req.body;

    const sessao = Sessoes.find((s) => s.id === parseInt(id))
    if (!sessao) {
        res.status(404).json({ erro: "Sessão não encontrada" })
        return;
    }

    const lugar = sessao.assentos.find((l) => l.numero === assento);
    if (!lugar) {
        res.status(400).json({ erro: "Assento inválido" })
        return;
    }
    if (!lugar.disponivel) {
        res.status(400).json({ erro: "Assento já reservado" })
        return;
    }

    lugar.disponivel = false
    res.json({ mensagem: `Assento ${assento} reservado com sucesso.` })
})

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})
