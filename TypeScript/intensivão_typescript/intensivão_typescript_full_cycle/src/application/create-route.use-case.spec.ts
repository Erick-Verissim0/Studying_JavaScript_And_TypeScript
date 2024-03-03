import { RouteInMemoryRepository } from '../infraestructure/database/route-in-memory.repository';
import { CreateRouteUseCase } from './create-route.use-case';

describe('CreateRouteUseCase', () => {
  it('Should create a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);
    const output = await createUseCase.execute({
      title: 'My title',
      startPosition: { lat: 10, lng: 20 },
      endPosition: { lat: 30, lng: 40 },
    });
    expect(output).toStrictEqual({
      title: 'My title',
      startPosition: { lat: 10, lng: 20 },
      endPosition: { lat: 30, lng: 40 },
      points: [],
    });
    expect(repository.items).toHaveLength(1);
  });
});
