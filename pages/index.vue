<template>
  <div class="container">
    <div>
      <svg-nuxt-logo class="nuxt-logo" />

      <h1 class="title">
        so-nuxt-boiler
      </h1>
      <h2 class="subtitle">
        Nuxt project boilerplate
      </h2>
    </div>
  </div>
</template>

<script>
import SvgNuxtLogo from '~/assets/svg/nuxt-logo.svg'

export default {
  components: {
    SvgNuxtLogo
  },
  head() {
    return {
      // title: 'Homepage' <~ Will be output as the page title via the titleTemplate function in layouts/default.vue (if set)
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: $font-weight-light; // <~ SCSS Variables inside components
  font-size: 100px;
  color: $blue;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: $font-weight-light;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.nuxt-logo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
