<template>
<div>
  <PackagesArea/>
  <OpenSource/>
</div>
</template>

<script>
import PackagesArea from "~/components/pricing/PackagesArea";
import OpenSource from "~/components/homepage/OpenSource";
export default {
  name: "pricing",
  components: {OpenSource, PackagesArea},
  layout: 'base-layout',

}
</script>

<style scoped>

</style>
