<script setup lang="ts">
const fansubData = [
  {
    name: 'Serein Scans',
    logo: 'https://sereinscan.com/wp-content/uploads/2024/01/serein-logo-4-min.png',
    image:
      'https://sereinscan.com/wp-content/uploads/2025/06/0203a8a9-b7e2-42cf-a523-a7514802a584.jpg',
    contentType: 'Webtoon / Manghwa / Manghua',
  },
];
</script>

<template>
  <Page class="space-y-8">
    <Heading> Fansublar </Heading>

    <Carousel :opts="{ dragFree: true, loop: true }">
      <CarouselContent>
        <CarouselItem
          v-for="fansub of fansubData"
          :key="fansub.name"
          class="basis-72"
        >
          <FansubCard v-bind="fansub" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </Page>
</template>
