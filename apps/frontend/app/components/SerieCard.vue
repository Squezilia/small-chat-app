<script setup lang="ts">
defineProps<{
  name: string;
  image: string;
  year: number;
  mainTag: string;
  episodeSize: number;
}>();
</script>

<template>
  <div
    class="select-none hover:ring-2 m-2 transition-shadow duration-75 aspect-10/16 group/card overflow-hidden relative border bg-input/20 rounded-xl flex items-center justify-center"
  >
    <NuxtImg :src="image" class="absolute w-full h-full object-cover" />
    <div
      class="absolute bottom-0 left-0 bg-linear-to-t from-black w-full h-24 mask-linear-0 mask-linear-from-black mask-linear-to-transparent mask-linear-from-50% mask-linear-to-100% backdrop-blur-sm"
    />
    <div class="absolute left-0 bottom-0 p-2">
      <span
        class="text-xs group-hover/card:opacity-100 relative -bottom-full opacity-0 transition-all duration-100"
        >{{ year }} ‧ {{ mainTag }} ‧ {{ episodeSize }} Bölüm</span
      >
      <h6 class="font-bold text-sm">
        {{ name }}
      </h6>
    </div>
  </div>
</template>
