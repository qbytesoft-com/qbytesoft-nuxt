<template>
<div>
  <ContactForm/>
  <OpenSource/>
</div>
</template>

<script>
import ContactForm from "~/components/contact/ContactForm";
import OpenSource from "~/components/homepage/OpenSource";
export default {
  name: "contact",
  components: {OpenSource, ContactForm},
  layout: 'base-layout',
}
</script>

<style scoped>

</style>
