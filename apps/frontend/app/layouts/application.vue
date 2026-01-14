<script setup lang="ts">
import Header from '~/components/header/Header.vue';

const { navigation } = useAppConfig();
</script>

<template>
  <main>
    <Header :tabs="navigation" />
    <slot />
  </main>
</template>
