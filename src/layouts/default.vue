<script setup>
const localePath = useLocalePath();
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
const title = computed(() => t(route.meta.title));
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#233746" />
        <Title>{{ `${title} | Rob Arkesteijn` }}</Title>
        <Link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple/icon-180.png"
        />
        <Link
          rel="apple-touch-icon-precomposed"
          sizes="180x180"
          href="/apple/icon-180.png"
        />
        <Link rel="mask-icon" color="#233746" href="/apple/mask-icon.svg" />
        <Link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="16x16 32x32 48x48 64x64 128x128"
        />
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :name="meta.name"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body data-cursor="lighting">
        <VitePwaManifest />
        <CursorFollower />
        <TopBlob />
        <PortfolioLogo />
        <TheBreadcrumb v-if="$route.path !== localePath('/')" />
        <main>
          <slot />
        </main>
        <LanguageNavigation />
        <TheFooter />
      </Body>
    </Html>
  </div>
</template>
