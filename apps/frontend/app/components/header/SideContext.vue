<script setup lang="ts">
import { authClient } from '~/lib/auth';

const session = authClient.useSession();
</script>

<template>
  <div class="my-auto">
    <div class="md:hidden">
      <HeaderMobileContext />
    </div>
    <div class="hidden md:block">
      <ClientOnly>
        <LazyHeaderUserContext v-if="session.data" />
        <LazyHeaderNoUserContext v-else />
      </ClientOnly>
    </div>
  </div>
</template>
