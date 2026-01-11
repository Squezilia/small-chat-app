<script lang="ts" setup>
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { LogOut, Shield, User2, Cog } from 'lucide-vue-next';
import { authClient } from '~/lib/auth';

const session = authClient.useSession();

function logout() {
  authClient.signOut();
  useRouter().push('/login');
}
</script>

<template>
  <DropdownMenuContent
    class="min-w-[220px]"
    side="bottom"
    align="end"
    :side-offset="4"
  >
    <DropdownMenuLabel class="p-0 font-normal">
      <div class="flex items-center gap-2.5 px-2 py-1.5 text-left text-sm">
        <UserAvatar />
        <div class="grid flex-1 text-left text-sm leading-tight">
          <ClientOnly>
            <template v-if="session.data">
              <span class="truncate font-semibold">
                {{ session.data.user.name }}
              </span>
              <span class="truncate text-xs text-muted-foreground">
                {{ session.data.user.email }}
              </span>
            </template>
          </ClientOnly>
        </div>
      </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <NuxtLink to="/user">
        <DropdownMenuItem>
          <User2 />
          Hesap
        </DropdownMenuItem>
      </NuxtLink>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <NuxtLink to="/user/security">
      <DropdownMenuItem>
        <Shield />
        Güvenlik
      </DropdownMenuItem>
    </NuxtLink>
    <NuxtLink to="/user/preferences">
      <DropdownMenuItem>
        <Cog />
        Tercihler
      </DropdownMenuItem>
    </NuxtLink>
    <DropdownMenuSeparator />
    <DropdownMenuItem @click="logout()">
      <LogOut />
      Çıkış Yap
    </DropdownMenuItem>
  </DropdownMenuContent>
</template>
