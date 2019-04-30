<template>
  <div class="menu clearfix">
    <div class="menu-item" :class="{'active': $route.name == menu.router}" v-for="menu in list" :key="menu.id" @click="goRouter(menu.router)">
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
  mounted () {
    // console.log(this.$route)
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
  cursor: pointer;
}
.menu-item img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.menu-item .name {
  display: block;
}
.active {
  color: #fff;
  background: #2d8cf0;
  background: linear-gradient(
      58deg,
      hsla(204.91, 99.66%, 65.81%, 1) 0%,
      hsla(204.91, 99.66%, 65.81%, 0) 65%
    ),
    linear-gradient(
      245deg,
      hsla(210.77, 86.67%, 55.88%, 1) 100%,
      hsla(210.77, 86.67%, 55.88%, 0) 70%
    );
}
</style>
