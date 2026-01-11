import Elysia from 'elysia';
import chat from './chat';

export default new Elysia({ prefix: '/sockets' }).use(chat);
