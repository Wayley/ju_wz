<template>
  <div class="account-list">
    <div class="account-item" :class="{'active':curAccount.id == account.id}" v-for="(account,index) in accountList" :key="index" >
      <img class="avatar" :src="account.avatar" alt="">
      {{account.name}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      accountList: [
        {
          id: 1,
          avatar: 'https://avatars3.githubusercontent.com/u/23481263',
          name: '扬尼斯·阿德托昆博'
        },
        {
          id: 2,
          avatar: 'https://avatars3.githubusercontent.com/u/23481223',
          name: 'Afsf'
        },
        {
          id: 3,
          avatar: 'https://avatars3.githubusercontent.com/u/23481233',
          name: 'xiao嚒'
        },
        {
          id: 4,
          avatar: 'https://avatars3.githubusercontent.com/u/23481243',
          name: '尼古拉斯·赵四'
        },
        {
          id: 3,
          avatar: 'https://avatars3.githubusercontent.com/u/23481233',
          name: 'xiao嚒'
        },
        {
          id: 4,
          avatar: 'https://avatars3.githubusercontent.com/u/23481243',
          name: '尼古拉斯·赵四'
        },
        {
          id: 3,
          avatar: 'https://avatars3.githubusercontent.com/u/23481233',
          name: 'xiao嚒'
        },
        {
          id: 4,
          avatar: 'https://avatars3.githubusercontent.com/u/23481243',
          name: '尼古拉斯·赵四'
        },
        {
          id: 3,
          avatar: 'https://avatars3.githubusercontent.com/u/23481233',
          name: 'xiao嚒'
        },
        {
          id: 4,
          avatar: 'https://avatars3.githubusercontent.com/u/23481243',
          name: '尼古拉斯·赵四'
        }
      ],
      curAccount: {
        id: 2,
        avatar: 'https://avatars3.githubusercontent.com/u/23481223',
        name: 'Afsf'
      }
    }
  },
  methods: {}
}
</script>
<style scoped>
.account-list {
  color: #eee;
  background: #6b7390;
  padding-top: 12px;
}
.account-item {
  padding: 10px;
  font-size: 14px;
  overflow: hidden; /*超出部分隐藏*/
  white-space: nowrap; /*不换行*/
  text-overflow: ellipsis; /*超出部分文字以...显示*/
  cursor: pointer;
}
.account-item img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  margin-right: 10px;
}
.account-item.active {
  background: #c8c8c9;
  color: #000;
}
</style>
