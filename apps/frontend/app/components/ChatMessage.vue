<script setup lang="ts">
import type { User } from 'better-auth';
import shortenName from '~/lib/shortenName';
import { cn } from '~/lib/utils';

defineProps<{
  user: User;
  continuous?: boolean;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'flex w-full hover:bg-accent rounded-md',
        continuous ? 'px-8 pl-20.5 py-1' : 'px-8 py-2 gap-2.5'
      )
    "
  >
    <Avatar v-if="!continuous" class="size-10">
      <AvatarImage :src="user.image || ''" />
      <AvatarFallback>{{ shortenName(user.name) }}</AvatarFallback>
    </Avatar>
    <div class="flex flex-col">
      <span v-if="!continuous">{{ user.name }}</span>
      <span class="dark:text-neutral-200 text-neutral-900 text-sm leading-5.5">
        <slot />
      </span>
    </div>
  </div>
</template>
