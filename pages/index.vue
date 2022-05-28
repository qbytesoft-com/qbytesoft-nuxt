<template>
  <div>
    <div class="header-area">
      <div class="flex flex-row">
        <div class="basis-1/2">
          <div class="logo">
            <a href="#">
              <img src="@/assets/img/logo.png" alt="logo">
            </a>
          </div>
        </div>
        <div class="basis-1/3">
          <div class="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Laravel</a></li>
              <li><a href="#">Open Source</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="basis-1/4">01</div>
      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div>
    </div>
    <p class="text-sm ...">The quick brown fox ...</p>
    <p class="text-base ...">The quick brown fox ...</p>
    <p class="text-lg ...">The quick brown fox ...</p>
    <p class="text-xl ...">The quick brown fox ...</p>
    <p class="text-2xl ...">The quick brown fox ...</p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
