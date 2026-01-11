import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { auth } from './lib/auth';
import v1 from './v1';

const app = new Elysia()
  .use(
    cors({
      origin: 'http://localhost:8080',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  )
  .use(swagger())
  .use(v1)
  .mount(auth.handler)
  .get('/', () => 'Hello Lena!!');

app.listen(3000);

console.log(`🦊 Lena backend is running on http://localhost:3000`);
