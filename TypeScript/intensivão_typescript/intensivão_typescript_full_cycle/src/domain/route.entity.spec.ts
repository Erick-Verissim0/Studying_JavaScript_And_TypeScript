import { LatLng, Route, RouteProps } from './route.entity';

describe('Route Tests', () => {
  test('constructor', () => {
    let routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 5 },
    };
    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({ ...routeProps, points: [] });

    routeProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 5 },
      points: [{ lat: 10, lng: 11 }],
    };
    route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({ ...routeProps, points: [{ lat: 10, lng: 11 }] });
  });

  test('Test Title', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 5 },
    };

    const route = new Route(routeProps);
    route.updateTitle('title updated');
    expect(route.title).toBe('title updated');
  });

  test('Test Position', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 5 },
    };

    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 25, lng: 32 };
    route.updatePosition(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test('Test Points', () => {
    const routeProps: RouteProps = {
      title: 'minha rota',
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 5 },
    };

    const route = new Route(routeProps);
    const points: LatLng[] = [{ lat: 10, lng: 20 }];
    route.updatePoints(points);
    expect(route.points).toStrictEqual(points);
  });
});
