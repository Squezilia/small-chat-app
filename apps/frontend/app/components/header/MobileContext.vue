<script setup lang="ts">
import { AlignRight } from 'lucide-vue-next';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { authClient } from '~/lib/auth';
import { Button } from '../ui/button';

const { navigation } = useAppConfig();

const session = authClient.useSession();
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button size="icon" variant="outline">
        <AlignRight />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader class="hidden">
        <DrawerTitle>Navigation</DrawerTitle>
        <DrawerDescription>Navigate in the site. </DrawerDescription>
      </DrawerHeader>
      <div class="flex flex-col p-8 gap-6">
        <div class="flex flex-col gap-1.5 sm:hidden">
          <h3 class="text-lg text-muted-foreground">Temel Sayfalar</h3>
          <div class="flex-col gap-2.5 flex">
            <template
              v-for="[key, val] of Object.entries(navigation.routes)"
              :key="key"
            >
              <NuxtLink
                v-if="typeof val === 'string'"
                :to="val"
                class="text-xl"
              >
                {{ key }}
              </NuxtLink>
            </template>
          </div>
        </div>

        <ClientOnly>
          <template v-if="session.data">
            <div class="flex flex-col gap-1.5">
              <NuxtLink class="text-xl flex items-center gap-2.5" to="/user">
                <UserAvatar />
                {{ session.data.user.name }}
              </NuxtLink>
            </div>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-lg text-muted-foreground">İşlemler</h3>
              <div class="flex flex-col gap-2.5">
                <NuxtLink class="text-xl" to="/user/security">
                  Güvenlik
                </NuxtLink>
                <NuxtLink class="text-xl" to="/user/preferences">
                  Tercihler
                </NuxtLink>
                <a class="text-xl" @click="authClient.signOut()"> Çıkış Yap </a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-lg text-muted-foreground">Hareket Alın</h3>
              <div class="flex flex-col gap-2.5">
                <NuxtLink class="text-xl" to="/login"> Giriş Yap </NuxtLink>
                <NuxtLink class="text-xl" to="/register">
                  Hemen Başla
                </NuxtLink>
              </div>
            </div>
          </template>
        </ClientOnly>
      </div>
    </DrawerContent>
  </Drawer>
</template>
