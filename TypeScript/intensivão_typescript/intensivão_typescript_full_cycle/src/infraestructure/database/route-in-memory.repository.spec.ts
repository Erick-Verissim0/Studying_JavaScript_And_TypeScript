import { Route, RouteProps } from '../../domain/route.entity';
import { RouteInMemoryRepository } from './route-in-memory.repository';

describe('RouteInMemoryRepository Test', () => {
  it('Should insert a new route', async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: 'Minha rota',
      startPosition: { lat: 0, lng: 2 },
      endPosition: { lat: 4, lng: 6 },
    };
    const route = new Route(routeProps);
    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
