<template>
  <div class="wechat-page">
    <webview ref="foo" class="wechat-view" id="foo" autosize="on" src="https://wx.qq.com/" nodeintegration></webview>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    // const BrowserWindow = require('electron').remote.BrowserWindow
    // let win = new BrowserWindow({
    //   width: 1100,
    //   height: 716,
    //   frame: true,
    //   autoHideMenuBar: false,
    //   maximizable: false,
    //   resizable: false,
    //   show: false
    // })
    // win.loadURL('http://github.com')
    // let contents = win.webContents
    // win.webContents.on('did-navigate', (event, url) => {
    //   // 对应操作
    //   console.log(event, url, '====')
    // })
    // console.log(contents, './//////////////')
  },
  mounted () {
    var webview = this.$refs['foo']
    webview.addEventListener('dom-ready', function () {
      // 打开webview 的调试窗口
      // webview.openDevTools()
      console.log(webview.getURL())
    })
    console.log(webview, '------')
  },
  methods: {
    onload () {
      console.log(11111)
    }
  }
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
