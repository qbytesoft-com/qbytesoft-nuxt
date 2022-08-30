<template>
<div>
  <AboutHeaderArea/>
  <TeamArea/>
</div>
</template>

<script>
import AboutHeaderArea from "~/components/aboutus/AboutHeaderArea";
import TeamArea from "~/components/aboutus/TeamArea";
export default {
  name: "about-us",
  components: {TeamArea, AboutHeaderArea},
  layout: 'base-layout',
}
</script>

<style scoped>

</style>
