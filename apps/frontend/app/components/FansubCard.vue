<script setup lang="ts">
defineProps<{
  image: string;
  logo: string;
  name: string;
  contentType: string;
}>();
</script>

<template>
  <div class="aspect-4/3 grid grid-rows-6 border rounded-xl overflow-hidden">
    <NuxtImg
      :src="image"
      class="object-cover object-center h-full row-span-4 w-full border-b"
    />
    <div class="flex row-span-2 items-center p-2.5 gap-2.5">
      <NuxtImg
        :src="logo"
        class="border rounded-lg aspect-square object-center object-scale-down size-10"
      />
      <div class="">
        <span class="font-bold text-sm dark:text-neutral-300 text-neutral-800">
          {{ name }}
        </span>
        <span class="text-xs block">
          {{ contentType }}
        </span>
      </div>
    </div>
  </div>
</template>
