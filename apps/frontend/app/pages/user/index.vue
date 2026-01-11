<script setup lang="ts">
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Bell,
  CheckCircle2,
  Globe,
  KeyRound,
  LogOut,
  Settings,
  ShieldCheck,
  Smartphone,
  Clock3,
  Laptop2,
} from 'lucide-vue-next';

const providerConnections: Array<{
  title: string;
  description: string;
  status: string;
  tone: 'default' | 'secondary' | 'outline';
}> = [
  {
    title: 'E-Posta ve Şifre',
    description: 'Better Auth · Zorunlu',
    status: 'Doğrulandı',
    tone: 'default',
  },
  {
    title: 'Google',
    description: 'OAuth · Tek tıkla giriş',
    status: 'Bağlı',
    tone: 'secondary',
  },
  {
    title: 'Passkey',
    description: 'Cihaz tabanlı anahtar',
    status: 'Kayıtlı',
    tone: 'outline',
  },
];

const quickHighlights = [
  {
    icon: ShieldCheck,
    label: 'Güvenli giriş',
    value: 'Passkey + E-Posta',
  },
  {
    icon: Smartphone,
    label: 'Aktif oturum',
    value: '5 cihaz',
  },
  {
    icon: Bell,
    label: 'Bildirimler',
    value: 'Sessiz mod kapalı',
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
    <div class="flex flex-wrap gap-4 items-start">
      <div class="space-y-2">
        <Heading>Kullanıcı Profili</Heading>
        <p class="text-muted-foreground max-w-3xl">
          Better Auth ile bağlanan hesaplarınızı, oturumlarınızı ve güvenlik durumunuzu
          tek ekranda görün.
        </p>
      </div>
      <div class="ml-auto flex gap-2">
        <Button variant="outline">
          <Settings />
          Tercihler
        </Button>
        <Button>
          <ShieldCheck />
          Güvenliğe Git
        </Button>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader class="flex-row items-start justify-between gap-4">
          <div class="space-y-1.5">
            <CardTitle>Profil Özeti</CardTitle>
            <CardDescription>
              Kişisel bilgiler, görünürlük ve doğrulama durumu.
            </CardDescription>
          </div>
          <Badge variant="secondary" class="flex gap-1 items-center">
            <CheckCircle2 class="size-4" />
            Hesap aktif
          </Badge>
        </CardHeader>
        <CardContent class="grid gap-6 md:grid-cols-[160px_1fr]">
          <div class="flex flex-col items-start gap-3">
            <div
              class="h-28 w-28 rounded-2xl bg-gradient-to-br from-primary/80 via-primary to-primary/70 text-primary-foreground flex items-center justify-center text-3xl font-bold shadow-lg ring-1 ring-primary/30"
            >
              ER
            </div>
            <Button variant="outline" size="sm" class="w-full">
              <KeyRound class="size-4" />
              Avatar Yükle
            </Button>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2 rounded-xl border bg-muted/30 p-4">
              <div class="flex items-center gap-2 text-sm font-medium">
                <span class="text-muted-foreground">Ad Soyad</span>
                <Badge variant="outline">Genel</Badge>
              </div>
              <p class="text-lg font-semibold">Eren R.</p>
              <p class="text-sm text-muted-foreground">
                Topluluk ve okuma listelerinde görünür.
              </p>
            </div>
            <div class="space-y-2 rounded-xl border bg-muted/30 p-4">
              <div class="flex items-center gap-2 text-sm font-medium">
                <span class="text-muted-foreground">E-Posta</span>
                <Badge variant="default">
                  <CheckCircle2 class="size-3" />
                  Doğrulandı
                </Badge>
              </div>
              <p class="text-lg font-semibold">eren@example.com</p>
              <p class="text-sm text-muted-foreground">
                Giriş, bildirim ve kurtarma için kullanılır.
              </p>
            </div>
            <div class="space-y-3 sm:col-span-2">
              <div class="flex items-center justify-between">
                <div class="text-sm text-muted-foreground">
                  Profil tamamlanma
                </div>
                <span class="text-sm font-medium">72%</span>
              </div>
              <Progress :value="72" />
              <div class="flex flex-wrap gap-2">
                <Badge variant="outline">Bio ekle</Badge>
                <Badge variant="outline">İkinci e-posta</Badge>
                <Badge variant="outline">Hızlı bildirim</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bağlı Sağlayıcılar</CardTitle>
          <CardDescription>Better Auth entegrasyonları</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div
            v-for="provider in providerConnections"
            :key="provider.title"
            class="rounded-lg border p-4 bg-muted/20"
          >
            <div class="flex items-start gap-2">
              <Badge :variant="provider.tone">
                <ShieldCheck class="size-4" />
                {{ provider.status }}
              </Badge>
              <div class="ml-auto">
                <Button variant="ghost" size="icon-sm">
                  <LogOut class="size-4" />
                </Button>
              </div>
            </div>
            <div class="mt-2 space-y-1">
              <p class="font-semibold">{{ provider.title }}</p>
              <p class="text-sm text-muted-foreground">
                {{ provider.description }}
              </p>
            </div>
          </div>
          <Separator />
          <Button variant="outline" class="w-full justify-center gap-2">
            <Globe class="size-4" />
            Yeni sağlayıcı ekle
          </Button>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card
        v-for="highlight in quickHighlights"
        :key="highlight.label"
        class="border-dashed"
      >
        <CardContent class="flex items-center gap-4 p-5">
          <div class="rounded-xl bg-primary/10 p-3 text-primary">
            <component :is="highlight.icon" class="size-5" />
          </div>
          <div>
            <p class="text-sm text-muted-foreground">{{ highlight.label }}</p>
            <p class="text-lg font-semibold">{{ highlight.value }}</p>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader class="flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Son giriş yöntemi</CardTitle>
            <CardDescription>
              Better Auth last login method eklentisinden gelen özet için maket.
            </CardDescription>
          </div>
          <Badge variant="outline" class="gap-1">
            <Clock3 class="size-4" />
            {{ lastLogin.freshness }}
          </Badge>
        </CardHeader>
        <CardContent class="flex flex-wrap items-center gap-4 rounded-xl border bg-muted/20 p-4">
          <div class="rounded-lg bg-background p-3 shadow-sm">
            <Laptop2 class="size-5 text-primary" />
          </div>
          <div class="min-w-0">
            <p class="font-semibold">{{ lastLogin.device }}</p>
            <p class="text-sm text-muted-foreground">
              {{ lastLogin.location }} · {{ lastLogin.method }}
            </p>
          </div>
          <Button variant="ghost" size="sm" class="ml-auto">
            <LogOut class="size-4" />
            Bu cihazı kapat
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bildirim Özeti</CardTitle>
          <CardDescription>Güvenlik ve etkinlik sinyalleri</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <Bell class="size-4 text-primary" />
            <div>
              <p class="font-medium">Giriş uyarıları</p>
              <p class="text-sm text-muted-foreground">
                Yeni cihaz ve riskli girişlerde e-posta al.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <ShieldCheck class="size-4 text-primary" />
            <div>
              <p class="font-medium">Kurtarma kanalları</p>
              <p class="text-sm text-muted-foreground">
                Yedek kodlar ve ikincil e-posta tanımlı.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 rounded-lg border p-3">
            <KeyRound class="size-4 text-primary" />
            <div>
              <p class="font-medium">Güvenli paylaşım</p>
              <p class="text-sm text-muted-foreground">
                OAuth kapsamları kısıtlı, okuma/okutma izinleri tanımlı.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </Page>
</template>
