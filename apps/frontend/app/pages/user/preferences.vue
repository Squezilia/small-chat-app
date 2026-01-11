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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { BellRing, Eye, Palette, ShieldCheck, Sparkles, Timer } from 'lucide-vue-next';

const notificationOptions = [
  {
    title: 'Yeni cihaz girişleri',
    description: 'Better Auth device fingerprints üzerinden uyar.',
    enabled: true,
  },
  {
    title: 'Güvenlik önerileri',
    description: 'Zayıf parola, riskli kapsam veya iptal edilen token bildirimleri.',
    enabled: true,
  },
  {
    title: 'Haftalık özet',
    description: 'Okuma istatistikleri ve takip ettiğin seriler.',
    enabled: false,
  },
];

const readerOptions = [
  {
    title: 'Sessiz mod',
    description: 'Bildirimler sessiz, güvenlik uyarıları her zaman görünür.',
    enabled: false,
  },
  {
    title: 'Hızlı kaydırma',
    description: 'Uzun bölümler için kesintisiz dikey okuma.',
    enabled: true,
  },
  {
    title: 'Metin vurgusu',
    description: 'Seçili cümleleri pano ve notlara ekle.',
    enabled: true,
  },
];
</script>

<template>
  <Page class="space-y-10">
    <div class="flex flex-wrap items-start gap-4">
      <div class="space-y-2">
        <Heading>Tercihler</Heading>
        <p class="text-muted-foreground max-w-2xl">
          Hesap deneyimini, bildirimleri ve okuma ayarlarını Better Auth profilinle uyumlu
          tut.
        </p>
      </div>
      <div class="ml-auto flex gap-2">
        <Button variant="outline">
          <ShieldCheck class="size-4" />
          Güvenlik
        </Button>
        <Button>
          <Sparkles class="size-4" />
          Değişiklikleri kaydet
        </Button>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader>
          <CardTitle>Profil ve Görünürlük</CardTitle>
          <CardDescription>
            Kullanıcı adı, bio ve dil ayarları sadece tasarım amaçlı gösteriliyor.
          </CardDescription>
        </CardHeader>
        <CardContent class="space-y-5">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <Label>Kullanıcı adı</Label>
              <Input default-value="erenr" />
              <p class="text-xs text-muted-foreground">
                Public profilde ve yorumlarda gösterilir.
              </p>
            </div>
            <div class="space-y-2">
              <Label>Görünen ad</Label>
              <Input default-value="Eren R." />
              <p class="text-xs text-muted-foreground">
                Küçük topluluk rozetlerinde kullanılır.
              </p>
            </div>
          </div>

          <div class="space-y-2">
            <Label>Bio</Label>
            <Textarea
              rows="3"
              class="resize-none"
              default-value="Fantastik ve sosyolojik serilerle ilgileniyorum. Fansub notlarını arşivliyorum."
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <div class="space-y-2">
              <Label>Arayüz dili</Label>
              <Select default-value="tr">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Dil seç" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tr">Türkçe</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="de">Deutsch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="space-y-2">
              <Label>Okuyucu modu</Label>
              <Select default-value="clean">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Mod seç" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clean">Düzgün</SelectItem>
                  <SelectItem value="dense">Yoğun</SelectItem>
                  <SelectItem value="immersive">Sinematik</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="space-y-2">
              <Label>Zaman dilimi</Label>
              <Select default-value="gmt+3">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Zaman" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gmt+3">GMT+3 (İstanbul)</SelectItem>
                  <SelectItem value="gmt+1">GMT+1 (Berlin)</SelectItem>
                  <SelectItem value="gmt-5">GMT-5 (New York)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Temel Özeti</CardTitle>
          <CardDescription>Hesap ve okuma kısayolları</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="rounded-lg border bg-muted/30 p-4">
            <div class="flex items-center gap-3">
              <Palette class="size-4 text-primary" />
              <div>
                <p class="font-medium">Tema</p>
                <p class="text-sm text-muted-foreground">
                  Sistem temasını izliyor
                </p>
              </div>
            </div>
            <Button size="sm" variant="outline" class="mt-3 w-full">
              Tema seçenekleri
            </Button>
          </div>
          <div class="rounded-lg border bg-muted/30 p-4">
            <div class="flex items-center gap-3">
              <Timer class="size-4 text-primary" />
              <div>
                <p class="font-medium">Okuma ritmi</p>
                <p class="text-sm text-muted-foreground">
                  Otomatik kaydetme aralığı 5 dk
                </p>
              </div>
            </div>
            <Button size="sm" variant="ghost" class="mt-3 w-full">
              Değiştir
            </Button>
          </div>
          <div class="rounded-lg border bg-muted/30 p-4 space-y-2">
            <div class="flex items-center gap-3">
              <Eye class="size-4 text-primary" />
              <div>
                <p class="font-medium">Gizlilik modu</p>
                <p class="text-sm text-muted-foreground">
                  Çevrim içi durum gizli, öneriler açık.
                </p>
              </div>
            </div>
            <Badge variant="outline">Kısmi görünür</Badge>
          </div>
        </CardContent>
      </Card>
    </div>

    <SubHeading>Okuma & Bildirim</SubHeading>

    <div class="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Okuyucu seçenekleri</CardTitle>
          <CardDescription>Şimdilik statik, mantık sonradan eklenecek.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div
            v-for="option in readerOptions"
            :key="option.title"
            class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4"
          >
            <Switch :checked="option.enabled" class="mt-1" />
            <div class="space-y-1">
              <p class="font-medium">{{ option.title }}</p>
              <p class="text-sm text-muted-foreground">
                {{ option.description }}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bildirim tercihleri</CardTitle>
          <CardDescription>Better Auth sinyalleri ile uyumlu.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4">
            <Switch :checked="true" class="mt-1" />
            <div>
              <p class="font-medium">Anlık push</p>
              <p class="text-sm text-muted-foreground">
                Tarayıcı izinleri açık, güvenlik olaylarında önceliklendirilir.
              </p>
            </div>
          </div>

          <div
            v-for="item in notificationOptions"
            :key="item.title"
            class="flex items-start gap-3 rounded-lg border bg-muted/20 p-4"
          >
            <Switch :checked="item.enabled" class="mt-1" />
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p class="text-sm text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>

          <Separator />

          <div class="flex items-center justify-between">
            <div class="space-y-1">
              <p class="font-medium">E-posta özeti</p>
              <p class="text-sm text-muted-foreground">
                Haftalık arşiv ve güvenlik raporları.
              </p>
            </div>
            <Badge variant="secondary" class="gap-1">
              <BellRing class="size-3" />
              Açık
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </Page>
</template>
