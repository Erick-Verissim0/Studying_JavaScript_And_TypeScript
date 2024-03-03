import express, { Express, Request, Response } from 'express';
import { CreateRouteUseCase } from '../../../application/create-route.use-case';
import { RouteInMemoryRepository } from '../../database/route-in-memory.repository';

const app: Express = express();
app.use(express.json());

const routeRepo = new RouteInMemoryRepository();

app.post('/routes', async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(req.body);

  res.status(201).json(output);
});

app.listen(3000, () => {
  console.log('Servidor rodando ');
});
