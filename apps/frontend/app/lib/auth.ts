import { createAuthClient } from 'better-auth/vue';
import {
  twoFactorClient,
  lastLoginMethodClient,
  adminClient,
  organizationClient,
} from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [
    twoFactorClient(),
    adminClient(),
    lastLoginMethodClient(),
    organizationClient(),
  ],
});
