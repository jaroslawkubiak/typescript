import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';


export function controller(routePrefix: string) {
  // jeżeli jako target podamy Function i odnosimy się do class, to Function będzie konstruktorem tej klasy
  return function (target: Function) {
    const router = AppRouter.getInstance();
    
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      // associate route handler with router if path exists
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
