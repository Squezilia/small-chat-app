<script setup lang="ts">
import { Filter, Search } from 'lucide-vue-next';
import Heading from '~/components/Heading.vue';
import SubHeading from '~/components/SubHeading.vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '~/components/ui/carousel';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '~/components/ui/input-group';

const dataList = [
  {
    heading: 'Dram',
    data: [
      {
        image:
          'https://sereinscan.com/wp-content/uploads/2025/06/GsrrVEea8AA-E7O.jpg',
        name: 'Kılıcı Taşıyan Çiçek',
        year: 2025,
        mainTag: 'Drama',
        type: 'Webtoon',
        tags: ['Drama', 'Aksiyon', 'Yuri', 'Magical Girl', 'School', 'Loli'],
        episodeSize: 196,
      },
      {
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Violet_Evergarden_light_novel_volume_1_cover.jpg/250px-Violet_Evergarden_light_novel_volume_1_cover.jpg',
        name: 'Violet Evergarden',
        year: 2018,
        mainTag: 'Drama',
        type: 'Novel',
        tags: ['Drama', 'Aksiyon', 'Askeri'],
        episodeSize: 266,
      },
    ],
  },
  {
    heading: 'Aksiyon',
    data: [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1651084439i/60893477.jpg',
        name: 'GACHIAKUTA',
        year: 2025,
        mainTag: 'Aksiyon',
        type: 'Manga',
        tags: ['Aksiyon', 'Sosyolojik', 'Dram'],
        episodeSize: 122,
      },
    ],
  },
  {
    heading: 'Psikolojik',
    data: [
      {
        image:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1748698778i/61398894.jpg',
        name: 'Caninin Tek Sonu Ölüm',
        year: 2025,
        mainTag: 'Psikolojik',
        type: 'Webtoon',
        tags: ['Psikolojik', 'Dram', 'Sosyolojik'],
        episodeSize: 198,
      },
    ],
  },
];
</script>

<template>
  <Page class="space-y-8">
    <div class="flex z-20">
      <Heading>Seriler</Heading>
      <div class="ml-auto flex gap-2.5 items-center">
        <InputGroup class="rounded-lg max-w-[320px] my-auto">
          <InputGroupInput placeholder="Serilerde Ara..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              size="icon-xs"
              class="rounded-md"
              variant="default"
            >
              <Search />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Button size="icon" variant="outline"><Filter /></Button>
      </div>
    </div>

    <template v-for="category of dataList" :key="category.heading">
      <SubHeading> {{ category.heading }} </SubHeading>
      <Carousel :opts="{ dragFree: true, loop: true }">
        <CarouselContent>
          <CarouselItem
            v-for="serie of category.data"
            :key="serie.name"
            class="basis-54 sm:basis-64"
          >
            <SerieCard v-bind="serie" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </template>
  </Page>
</template>
