<template>
  <div :class="classes">
    <site-header />

    <nuxt />
  </div>
</template>

<script>
import _kebabCase from 'lodash/kebabCase'
import SiteHeader from '~/components/Header'

export default {
  components: {
    SiteHeader
  },
  computed: {
    classes() {
      return [
        'main',
        { 'stateful-class' : this.$store.state.stateVariable }
      ]
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          `route-${_kebabCase(this.$route.name || 'error')}` // If you need to use the route as a CSS hook
        ]
      },
      // titleTemplate: (titleChunk) => {
      //   // You'll probably want to set the site title in a config or pull from the site API as a setting
      //   // Or just hard code here...
      //   return titleChunk ? `${titleChunk} - Site Name Here` : 'Site Name Here'
      // },
      // * Use this meta property if you need to populate the meta info with dynamic data (from the store for instance..) *
      // meta: [
      //   {
      //     property: 'og:site_name',
      //     content: this.$store.state.settings...,
      //   }
      // ]
    }
  }
}
</script>