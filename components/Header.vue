<template>
  <div class="header-area">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-3/12 px-3">
          <a href="#" class="logo inline-block">
            <img src="~/assets/img/logo.png" alt="logo">
          </a>
        </div>
        <div class="w-9/12 px-3">
          <div class="main-menu text-right">
            <ul class="menu-list">
              <li class="menu-list-item">
                <a class="menu-list-link" href="#">Home</a>
              </li>
              <li class="menu-list-item">
                <a class="menu-list-link" href="#">Web Development</a>
              </li>
              <li class="menu-list-item">
                <a class="menu-list-link" href="#">Laravel</a>
              </li>
              <li class="menu-list-item">
                <a class="menu-list-link" href="#">Open Source</a>
              </li>
              <li class="menu-list-item">
                <a class="menu-list-link" href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header"
}
</script>

<style scoped>

</style>
