import express, { Express, Request, Response } from "express";
const PORT = 4000

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send("HELLO FROM EXPRESS + TS")
});

app.get('/test', (req: Request, res: Response) => {
    res.send("Test")
});

app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}`);
});
