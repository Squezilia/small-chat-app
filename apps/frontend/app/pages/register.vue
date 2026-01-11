<script setup lang="ts">
import { authClient } from '@/lib/auth';
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from '~/components/ui/carousel';

const FormElement = ref<HTMLFormElement | null>(null);

const session = authClient.useSession();

function Login() {
  if (!FormElement.value) return;

  if (!FormElement.value.checkValidity()) return;
}

const slideIndex = ref(0);
const carousel = ref<CarouselApi>();

function setApi(val: CarouselApi) {
  carousel.value = val;

  if (!val) return;

  val.on('select', () => {
    slideIndex.value = val.selectedScrollSnap();
  });
}

watch(
  () => session.value.data,
  (n) => {
    if (n) useRouter().push('/');
  }
);
</script>

<template>
  <Page class="flex items-center justify-center">
    <section
      class="grid grid-cols-9 xl:w-2xl overflow-hidden rounded-xl xl:min-h-[420px]"
    >
      <form
        ref="FormElement"
        class="col-span-5 p-4 space-y-4"
        @submit.prevent="Login"
      >
        <div>
          <SubHeading class="font-extrabold font-display">Kayıt Ol</SubHeading>
          <span class="text-sm text-muted-foreground text-pretty"
            >Athanasia seni bekliyor...</span
          >
        </div>
        <FieldSet>
          <Carousel
            :opts="{ watchDrag: false, duration: 20 }"
            @init-api="setApi"
          >
            <CarouselContent>
              <CarouselItem>
                <FieldGroup class="p-0.75">
                  <Field>
                    <FieldLabel for="name"> İsim </FieldLabel>
                    <Input
                      id="name"
                      tabindex="1"
                      type="text"
                      placeholder="Penelope Eckhart"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel for="email"> E-Posta </FieldLabel>
                    <Input
                      id="email"
                      tabindex="1"
                      type="email"
                      placeholder="username@mail.com"
                      required
                    />
                  </Field>
                </FieldGroup>
              </CarouselItem>
              <CarouselItem>
                <FieldGroup class="p-0.75">
                  <Field>
                    <FieldLabel for="password"> Şifre </FieldLabel>
                    <Input
                      id="password"
                      tabindex="2"
                      type="password"
                      placeholder="••••••••••••"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel for="password2"> Şifre (Tekrar) </FieldLabel>
                    <Input
                      id="password2"
                      tabindex="2"
                      type="password"
                      placeholder="••••••••••••"
                      required
                    />
                  </Field>
                </FieldGroup>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <FieldGroup class="gap-2">
            <Field orientation="horizontal">
              <Checkbox id="privacy" />
              <FieldLabel for="privacy" class="text-muted-foreground"
                >Gizlilik sözleşmesini kabul ediyorum</FieldLabel
              >
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="tos" />
              <FieldLabel for="tos" class="text-muted-foreground"
                >Kullanım koşullarını kabul ediyorum</FieldLabel
              >
            </Field>
          </FieldGroup>
        </FieldSet>
        <ButtonGroup>
          <Button tabindex="3" class="group/arrow-parent min-w-32"
            >Devam Et <ArrowRight
          /></Button>
          <ButtonGroupSeparator />
          <Button variant="secondary">
            <Icon name="fa6-brands:google" /> Google</Button
          >
          <ButtonGroupSeparator />
          <Button variant="secondary">
            <Icon name="fa6-brands:discord" /> Discord</Button
          >
        </ButtonGroup>
        <NuxtLink to="/login" class="text-xs underline text-primary"
          >Bence mevcut hesabını kullanmaktan zarar gelmez, gibi?</NuxtLink
        >
      </form>
      <div class="col-span-4 pl-2.5 relative">
        <div
          class="absolute bottom-0 left-0 z-10 w-48 h-full mask-[linear-gradient(to_left,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_25%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_100%)] backdrop-blur-sm"
        />

        <NuxtImg
          class="w-full h-full object-center object-cover z-0 mask-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_8.3%,rgba(0,0,0,0.5)_16.6%,rgba(0,0,0,1)_25%)]"
          src="https://www.youloveit.com/uploads/posts/2023-04/1682782502_youloveit_com_villains_are_destined_to-_die_soul_illustration5.jpg"
        />
      </div>
    </section>
  </Page>
</template>
