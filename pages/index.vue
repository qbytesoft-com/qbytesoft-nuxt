<template>
  <div>
    <HeaderBanner/>

    <ClientSection/>

    <OpenSource/>

  </div>
</template>

<script>
import HeaderBanner from "~/components/homepage/HeaderBanner";
import ClientSection from "~/components/homepage/ClientSection";
import OpenSource from "~/components/homepage/OpenSource";
export default {
  name: 'IndexPage',
  components: {OpenSource, ClientSection, HeaderBanner},
  layout: 'base-layout'
}
</script>
