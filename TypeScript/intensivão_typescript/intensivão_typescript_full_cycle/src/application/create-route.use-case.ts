import { LatLng, Route } from '../domain/route.entity';
import { RouteRepositoryInterface } from '../domain/route.repository';

export class CreateRouteUseCase {
  constructor(private routerProps: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteInput> {
    const route = new Route(input);
    await this.routerProps.insert(route);
    return route.toJSON();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
