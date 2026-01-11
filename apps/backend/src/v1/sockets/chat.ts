import { authMacro } from '@lena/backend/lib/auth';
import Elysia from 'elysia';

export default new Elysia().use(authMacro).ws('/chat', {
  auth: true,
});
