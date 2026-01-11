<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '~/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  noHeader?: boolean;
}>();
</script>

<template>
  <div
    class="[background-image:var(--background-grid)] bg-size-[20px_20px] min-h-screen"
  >
    <div
      :class="
        cn(
          noHeader ? 'py-6' : 'py-24',
          'container mx-auto md:px-8 px-2 bg-background min-h-screen shadow-[0_0_2rem_0]/10 border-x',
          props.class
        )
      "
    >
      <slot />
    </div>
  </div>
</template>
