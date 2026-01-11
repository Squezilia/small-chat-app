<script setup lang="ts">
// import { ArrowRight } from 'lucide-vue-next';
</script>

<template>
  <div class="items-center space-x-2.5">
    <NuxtLink to="/login">
      <Button variant="outline" class="group/arrow-parent">
        Oturum Aç <ArrowRight />
      </Button>
    </NuxtLink>
    <NuxtLink to="/register">
      <Button class="group/arrow-parent">
        Şimdi Başla
        <ArrowRight />
      </Button>
    </NuxtLink>
  </div>
</template>
