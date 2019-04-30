<template>
  <div class="session">
    <div class="session-left" :style="{'width':width}">
      <button class="login-btn" @click="login">登录账号</button>
      <div class="account">
        <AccountList></AccountList>
      </div>
    </div>
    <div class="session-right" :style="{'margin-left':width}">
      <Wechat></Wechat>
    </div>
  </div>
  </div>
</template>
<script>
import AccountList from '@/components/AccountList/AccountList'
import Wechat from '@/components/Wechat/Wechat'
export default {
  components: { AccountList, Wechat },
  data () {
    return {
      width: '30%'
    }
  },
  methods: {
    login () {}
  }
}
</script>
<style scoped>
.session {
}
.session-left,
.session-right {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  /* overflow-y: auto; */
  height: 100%;
  z-index: 12;
}
.session-left,
.session-right {
  width: 210px;
  background: #363f61;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
}
.login-btn {
  width: 100%;
  background-color: #535d80;
  color: #fff;
}
.account {
  max-height: calc(100% - 32px);
  overflow-y: scroll;
}
.account::-webkit-scrollbar {
  display: none;
}
/*  */
.session-right {
  width: 70%;
}
</style>
