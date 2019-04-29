<template>
  <div id="app">
    <div class="layout">
      <div class="layout-header">
        <Menu></Menu>
      </div>
      <div class="layout-main">
        main
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import Menu from './components/Menu/Menu'
export default {
  name: 'ju_wx',
  components: { Menu }
}
</script>

<style>
/* CSS */
</style>
