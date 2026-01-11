import Elysia from 'elysia';
import sockets from './sockets';

export default new Elysia({ prefix: '/v1' }).use(sockets);
