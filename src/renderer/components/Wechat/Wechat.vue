<template>
  <div class="wechat-page">
    <iframe id="frame-0" src="https://wx.qq.com" width="100%" height="100%" frameborder="0" scrolling="no" sandbox="allow-forms allow-modals allow-scripts allow-same-origin allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox"></iframe>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    onload = () => {
      console.log(111, 'onload')
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped>
.wechat-page {
  width: 100%;
  height: 100%;
}
.wechat-view {
  display: inline-flex;
  width: 900px;
  height: 500px;
}
</style>
