<script setup lang="ts">
import { authClient } from '@/lib/auth';

const FormElement = ref<HTMLFormElement | null>(null);

const session = authClient.useSession();

function Login() {
  if (!FormElement.value) return;

  if (!FormElement.value.checkValidity()) return;
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
      class="grid grid-cols-9 xl:w-2xl overflow-hidden rounded-xl xl:h-[420px]"
    >
      <form
        ref="FormElement"
        class="col-span-5 p-4 space-y-4"
        @submit.prevent="Login()"
      >
        <div>
          <SubHeading class="font-extrabold font-display">Giriş Yap</SubHeading>
          <span class="text-sm text-muted-foreground text-pretty"
            >Athanasia'da devam etmek için giriş yap.</span
          >
        </div>
        <FieldSet>
          <FieldGroup>
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
            <Field orientation="horizontal">
              <div>
                <Switch id="remember" tabindex="4" />
              </div>
              <FieldContent>
                <FieldLabel for="remember"> Oturumu Hatırla </FieldLabel>
              </FieldContent>
            </Field>
          </FieldGroup>
        </FieldSet>
        <ButtonGroup>
          <Button tabindex="3" class="group/arrow-parent min-w-32"
            >Giriş Yap <ArrowRight
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
        <NuxtLink to="/register" class="text-xs underline text-primary"
          >Athanasia'ya kaydolmak ücretsiz, aklınızda bulunsun bence.</NuxtLink
        >
      </form>
      <div class="col-span-4 pl-2.5 relative">
        <div
          class="absolute bottom-0 left-0 z-10 w-48 h-full mask-[linear-gradient(to_left,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_25%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_100%)] backdrop-blur-sm"
        />

        <NuxtImg
          class="w-full h-full object-center object-cover z-0 mask-[linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_8.3%,rgba(0,0,0,0.5)_16.6%,rgba(0,0,0,1)_25%)]"
          src="https://www.youloveit.com/uploads/posts/2023-04/1682782540_youloveit_com_villains_are_destined_to-_die_soul_illustration4.jpg"
        />
      </div>
    </section>
  </Page>
</template>
