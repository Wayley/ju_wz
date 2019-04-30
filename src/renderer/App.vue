<template>
  <div id="app">
    <div class="layout">
      <div class="layout-header">
        <Menu></Menu>
      </div>
      <div class="layout-main">
        <div class="wrapper">
          <router-view></router-view>
        </div>
      </div>
      <div class="layout-footer">weixinjubo.wuliaokankan.cn Copyright © 2015-2019 </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import Menu from '@/components/Menu/Menu'
export default {
  name: 'ju_wx',
  components: { Menu }
}
</script>

<style>
/* CSS */
.layout {
}
.layout-main {
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  min-height: calc(100vh - 98px); /* 68+30*/
  position: relative;
}
.layout-footer {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-align: center;
}
.wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
}
</style>
