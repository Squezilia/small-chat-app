import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from '@lena/database/index';
import {
  admin,
  lastLoginMethod,
  organization,
  twoFactor,
} from 'better-auth/plugins';
import Elysia from 'elysia';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: ['http://localhost:8080/', '*'],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [twoFactor(), admin(), lastLoginMethod(), organization()],
});

export const authMacro = new Elysia({ name: 'better-auth' }).macro({
  auth: {
    async resolve({ status, request: { headers } }) {
      const session = await auth.api.getSession({
        headers,
      });

      if (!session) return status(401);

      return {
        user: session.user,
        session: session.session,
      };
    },
  },
});
