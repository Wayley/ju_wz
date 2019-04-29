<template>
  <div class="menu clearfix">
    <div class="menu-item" v-for="menu in list" :key="menu.id" @click="goRouter(menu.router)">
      <img src="../../assets/images/1.png" alt="">
      <div class="name">{{menu.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: '1',
          name: '会话',
          icon: '@/assets/images/1.png',
          router: 'session'
        },
        {
          id: '2',
          name: '朋友圈',
          icon: '@/assets/images/2.png',
          router: 'circle'
        },
        {
          id: '3',
          name: '群发助手',
          icon: '@/assets/images/3.png',
          router: ''
        },
        {
          id: '4',
          name: '好友管理',
          icon: '@/assets/images/4.png',
          router: ''
        },
        {
          id: '5',
          name: '朋友圈管理',
          icon: '@/assets/images/5.png',
          router: ''
        },
        {
          id: '6',
          name: '功能大全',
          icon: '@/assets/images/6.png',
          router: ''
        }
      ]
    }
  },
  methods: {
    goRouter (name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>
<style scoped>
.menu {
  color: #cad1ea;
  background: #455071;
}
.menu-item {
  float: left;
  text-align: center;
  padding: 5px 20px;
}
.menu-item img {
  width: 40px;
  height: 40px;
}
.menu-item .name {
  display: block;
}
</style>
