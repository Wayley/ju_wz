<template>
  <div class="wechat-page">
    <div class="indicator"></div>
    <webview id="foo" src="https://wx.qq.com/" style="display:inline-flex; width:900px; height:500px" nodeintegration allowpopups></webview>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    onload = () => {
      const webview = document.querySelector('webview')
      const indicator = document.querySelector('.indicator')
      const loadstart = () => {
        indicator.innerText = 'loading...'
      }
      const loadstop = () => {
        indicator.innerText = 'loaded~~~~~'
      }
      webview.addEventListener('did-start-loading', loadstart)
      webview.addEventListener('did-stop-loading', loadstop)

      webview.addEventListener('new-window', e => {
        console.log('new-window', e)
      })
    }
  },
  mounted () {
    const webview = document.querySelector('webview')
    webview.addEventListener('dom-ready', () => {
      let result = webview.querySelector('div')
      console.log('dom-ready', result)

      this.insertCSS(webview)
      this.executeJavaScript(webview)
      // this.test(webview)
    })
    webview.addEventListener('did-finish-load', () => {})
  },
  methods: {
    onload () {
      console.log(11111)
    },
    insertCSS (webview) {
      webview && webview.insertCSS(`body, p{color: red !important;}`)
    },
    executeJavaScript (webview) {
      webview &&
        webview.executeJavaScript(
          `document.documentElement.innerHTML`,
          // `document.querySelector('webview').documentElement.innerHTML`,
          function (str) {
            console.log(str)

            let doc = document.createDocumentFragment()
            let el = document.createElement('html')
            el.innerHTML = str
            doc.appendChild(el)
            // ////////////////////
            setTimeout(function () {
              var userInfoEl = doc.querySelector('.header')
              var imgEl = doc.querySelector('.header .img')
              var nickNameEl = doc.querySelector('.header .info .nickname span')
              var avatar = imgEl.src
              var nickNameStr = nickNameEl.innerHTML

              var appElement = doc.querySelector(
                '[ng-controller=appController]'
              )
              const angular = window.angular

              // 获取$scope变量
              // var appElement =angular.element(document.findElementById('elementId');

              var $scope = angular.element(appElement).scope()
              console.log(appElement, '------------', $scope)

              console.log(userInfoEl, 1234567890987654321, avatar, nickNameStr)
              console.log('avatar:', avatar)
              console.log('nickName:', nickNameStr)
            }, 500)
          }
        )
    },
    test (webview) {
      const fs = require('fs')
      const js = fs
        .readFileSync('./src/renderer/components/Wechat/badge.js')
        .toString()

      webview.executeJavaScript(js)
    }
  }
}
</script>
<style scoped>
.indicator {
  color: red;
  font-size: 20px;
}
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
