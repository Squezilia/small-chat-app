<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import { authClient } from '~/lib/auth';
import UserAvatar from '../UserAvatar.vue';

const user = authClient.useSession();
</script>

<template>
  <div class="flex items-center">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="px-2.5! pl-1.5! pr-2!">
          <UserAvatar />
          <span class="hidden sm:block">
            <ClientOnly>
              <template v-if="user.data">
                {{ user.data.user.name }}
              </template>
            </ClientOnly>
          </span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownContentUser />
    </DropdownMenu>
  </div>
</template>
