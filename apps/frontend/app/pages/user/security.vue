<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  AlertTriangle,
  Laptop2,
  Lock,
  QrCode,
  ShieldCheck,
  Users,
} from 'lucide-vue-next';

const authMethods = [
  {
    name: 'Passkey',
    description: 'Tarayıcıya kayıtlı anahtar ile parolasız giriş.',
    badge: 'Önerilen',
  },
  {
    name: 'E-Posta + Şifre',
    description: 'Better Auth şifre politikası ve ihlal taraması.',
    badge: 'Zorunlu',
  },
  {
    name: 'Tek kullanımlık kod',
    description: 'Authenticator uygulaması ya da SMS yedeği.',
    badge: 'Yedek',
  },
];

const recovery = [
  {
    title: 'Kurtarma kodları',
    status: '8/10 kod duruyor',
    badge: 'Güncel',
  },
  {
    title: 'Yedek e-posta',
    status: 'backup@mail.com',
    badge: 'Doğrulandı',
  },
  {
    title: 'SMS yedeği',
    status: '+90 •• •• •• 21',
    badge: 'Opsiyonel',
  },
];

const organizations = [
  {
    name: 'Serein Scans',
    role: 'Yönetici',
    members: '8/20 üye',
  },
  {
    name: 'Lena Studio',
    role: 'Üye',
    members: '3/10 üye',
  },
];

const lastLogin = {
  method: 'Google OAuth',
  device: 'Safari · MacBook',
  location: 'İzmir, TR',
  freshness: '30 dk önce',
};
</script>

<template>
  <Page class="space-y-10">
    <div class="flex flex-wrap items-start gap-4">
      <div class="space-y-2">
        <Heading>Güvenlik</Heading>
        <p class="text-muted-foreground max-w-3xl">
          Better Auth oturumları, cihaz izinleri ve kurtarma seçenekleri için
          tasarım maketi. Buradaki butonlar henüz işlevsel değil.
        </p>
      </div>
      <div class="ml-auto flex gap-2">
        <Button variant="outline">
          <Lock class="size-4" />
          Tüm oturumları kapat
        </Button>
        <Button>
          <QrCode class="size-4" />
          Kurtarma kodlarını yenile
        </Button>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader>
          <CardTitle>Giriş yöntemleri</CardTitle>
          <CardDescription
            >Passkey, OAuth ve yedek kod tasarımı</CardDescription
          >
        </CardHeader>
        <CardContent class="space-y-4">
          <div
            v-for="method in authMethods"
            :key="method.name"
            class="rounded-xl border bg-muted/20 p-4"
          >
            <div class="flex flex-wrap items-center gap-3">
              <div class="rounded-lg bg-primary/10 p-2 text-primary">
                <ShieldCheck class="size-4" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-semibold">{{ method.name }}</p>
                <p class="text-sm text-muted-foreground">
                  {{ method.description }}
                </p>
              </div>
              <Badge variant="secondary">{{ method.badge }}</Badge>
              <Button size="sm" variant="outline">Yönet</Button>
            </div>
          </div>

          <Alert>
            <AlertTriangle class="size-4 text-amber-500" />
            <AlertTitle>Öneri</AlertTitle>
            <AlertDescription>
              Passkey ve TOTP birlikte etkinleştirildiğinde riskli cihaz
              oturumları otomatik olarak askıya alınabilir.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>İki adımlı doğrulama</CardTitle>
          <CardDescription>twoFactor eklentisi için maket.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
            <Switch :checked="true" class="mt-1" />
            <div>
              <p class="font-medium">Authenticator</p>
              <p class="text-sm text-muted-foreground">
                TOTP kodları aktif, cihaz güvenilir olarak işaretli.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
            <Switch :checked="true" class="mt-1" />
            <div>
              <p class="font-medium">Passkey</p>
              <p class="text-sm text-muted-foreground">
                Cihaz anahtarı kayıtlı, parolasız giriş açık.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
            <Switch :checked="false" class="mt-1" />
            <div>
              <p class="font-medium">SMS yedeği</p>
              <p class="text-sm text-muted-foreground">
                Opsiyonel yedek kanal henüz kurulmadı.
              </p>
            </div>
          </div>
          <Button class="w-full">
            <QrCode class="size-4" />
            Yeni TOTP QR oluştur
          </Button>
        </CardContent>
      </Card>
    </div>

    <SubHeading>Erişim & üyelik</SubHeading>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader class="flex-row items-start justify-between gap-3">
          <div>
            <CardTitle>Organizasyonlar</CardTitle>
            <CardDescription
              >organization eklentisi için maket üyelikler.</CardDescription
            >
          </div>
          <Button variant="outline" size="sm">
            <Users class="size-4" />
            Yeni davet
          </Button>
        </CardHeader>
        <CardContent class="space-y-3">
          <div
            v-for="org in organizations"
            :key="org.name"
            class="flex flex-wrap items-center gap-3 rounded-xl border bg-muted/20 p-4"
          >
            <div class="rounded-lg bg-background p-2 shadow-sm">
              <Users class="size-4 text-primary" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-medium">{{ org.name }}</p>
              <p class="text-sm text-muted-foreground">{{ org.members }}</p>
            </div>
            <Badge variant="secondary">{{ org.role }}</Badge>
            <Button size="sm" variant="ghost">Yönet</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Son giriş</CardTitle>
          <CardDescription>lastLoginMethod eklentisi maketi.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
            <Laptop2 class="size-4 text-primary" />
            <div>
              <p class="font-medium">{{ lastLogin.device }}</p>
              <p class="text-sm text-muted-foreground">
                {{ lastLogin.location }} · {{ lastLogin.method }}
              </p>
            </div>
          </div>
          <Alert>
            <AlertTriangle class="size-4 text-amber-500" />
            <AlertTitle>Yeni cihaz</AlertTitle>
            <AlertDescription>
              Bu giriş tanıdık değilse diğer cihazlardan oturumu kapatın.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>

    <SubHeading>Kurtarma ve yedekler</SubHeading>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader class="flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Kurtarma seçenekleri</CardTitle>
            <CardDescription
              >Statik içerik, akış daha sonra bağlanacak.</CardDescription
            >
          </div>
          <Button variant="outline" size="sm">Kurtarma ayarları</Button>
        </CardHeader>
        <CardContent class="grid gap-3 md:grid-cols-3">
          <div
            v-for="item in recovery"
            :key="item.title"
            class="rounded-xl border bg-muted/20 p-4"
          >
            <div class="flex items-center gap-2">
              <Badge variant="secondary">{{ item.badge }}</Badge>
            </div>
            <p class="mt-2 font-semibold">{{ item.title }}</p>
            <p class="text-sm text-muted-foreground">{{ item.status }}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </Page>
</template>
