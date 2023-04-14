import express, { Request, Response } from 'express';
import path from 'path';
import { sum } from './controller/controller';

const app = express.Router();

interface FormData {
    num1: number;
    num2: number;
}

app.get('/', (req: Request, res: Response) => {
    res.render('index', { result: undefined });
});

app.post('/', (req: Request, res: Response) => {
    const { num1, num2 } = req.body as FormData;
    const result = sum(+num1, +num2);
    res.render('index', { result: result, num1: num1, num2: num2 });
});


export default app;
