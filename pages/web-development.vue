<template>
<div>
  <WebHeaderArea/>
  <WorkArea/>
  <ClientsArea/>
</div>
</template>

<script>
import WebHeaderArea from "~/components/webdevelopment/WebHeaderArea";
import WorkArea from "~/components/webdevelopment/WorkArea";
import ClientsArea from "~/components/webdevelopment/ClientsArea";
export default {
  name: "web-development",
  components: {ClientsArea, WorkArea, WebHeaderArea},
  layout: 'base-layout',
}
</script>

<style scoped>

</style>
