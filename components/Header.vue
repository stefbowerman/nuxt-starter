<template>
  <header v-text="'Nuxt Starter'" />
</template>

<script>
// You can delete this component if you don't need it

export default {
  mounted() {
    console.info('👋 from SiteHeader.vue - You can delete me if you have no use for me.. 😢')    
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: $green;
  color: $white;
  text-align: center;
  font-family: 'Helvetica Neue';
}
</style>