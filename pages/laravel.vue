<template>
  <div>
    <LaravelHeaderArea/>
    <GreenHouseArea/>
    <TechnologyStackArea/>
    <OpenSource/>
  </div>
</template>

<script>
import LaravelHeaderArea from "~/components/laravel/LaravelHeaderArea";
import GreenHouseArea from "~/components/laravel/GreenHouseArea";
import TechnologyStackArea from "~/components/laravel/TechnologyStackArea";
import OpenSource from "~/components/homepage/OpenSource";
export default {
  name: "laravel",
  components: {OpenSource, TechnologyStackArea, GreenHouseArea, LaravelHeaderArea},
  layout: 'base-layout',
}
</script>

<style scoped>

</style>
