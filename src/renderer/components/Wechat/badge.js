// // 引入 IPC 模块
// const ipcRenderer = require('electron').ipcRenderer

// let badge = {
//   get: function () {
//     // 监听微信左侧面板节点变化
//     $('.panel').bind('DOMSubtreeModified', function () {
//       var count = 0
//       // 累加所有未读消息
//       $('.icon.web_wechat_reddot_middle').each(function () {
//         count += parseInt(this.textContent)
//       })
//       // 通过 IPC 发送给主进程
//       if (count > 0) {
//         ipcRenderer.send('badge-changed', count.toString())
//       } else {
//         ipcRenderer.send('badge-changed', '')
//       }
//     })
//   }
// }
// export default badge
