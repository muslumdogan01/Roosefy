<template>
  <div class="home">
    <homePanel/>
    <contentPanel/>
  </div>
</template>

<script>

import homePanel from '@/components/Home-page/home-page-panel.vue'
import contentPanel from '@/components/Home-page/home-page-content.vue'

export default {
  name: 'Home',
  components: {
    homePanel,
    contentPanel
  }
}
</script>

<style scoped>
.home{
  height: 100vh;
  display: flex;
}
</style>