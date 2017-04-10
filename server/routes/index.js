import { routes } from './app-router';
import ioRoute from './io';
import {
  getUser,
} from '../users/get-user';

routes.get('/user', getUser);

export default routes;
export { ioRoute };
