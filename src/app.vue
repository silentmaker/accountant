<template>
  <main class="dashboard">
    <Logo></Logo>
    <Menu></Menu>
    <router-view></router-view>
  </main>
</template>

<script>
import Logo from '@/components/logo.vue';
import Menu from '@/components/menu.vue';

export default {
  name: 'App',
  components: { Logo, Menu },
};
</script>

<style lang="less">
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Helvetica Neue',Helvetica,Tahoma,Arial,
    'Microsoft YaHei','PingFang SC','Hiragino Sans GB',
    'Heiti SC','WenQuanYi Micro Hei',sans-serif;
  color: #2c3e50;
}
input[type=file] {
  display: none;
  visibility: hidden;
  opacity: 0;
}
.mt-s { margin-top: 8px; }
.mt-m { margin-top: 16px; }
.mt-l { margin-top: 24px; }
.mb-s { margin-bottom: 8px; }
.mb-m { margin-bottom: 16px; }
.mb-l { margin-bottom: 24px; }
.ml-s { margin-left: 8px; }
.ml-m { margin-left: 16px; }
.ml-l { margin-left: 24px; }
.mr-s { margin-right: 8px; }
.mr-m { margin-right: 16px; }
.mr-l { margin-right: 24px; }
.platform-logo {
  position: fixed;
  box-sizing: border-box;
  border-radius: 4px;
  overflow: hidden;
  width: 50px;
  height: 50px;
  top: 15px;
  left: 15px;
  img {
    display: block;
    width: 100%;
  }
}
.dashboard {
  display: flex;
  .dashboard-menu {
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #333645;
    padding: 0;
    margin: 0;
    list-style: none;

    .menu-item {
      padding: 20px 0;
      color: #aaa;
      font-size: 14px;
      text-align: center;
      cursor: pointer;
      transition: background-color .5s;
      i {
        display: block;
        margin-bottom: 6px;
        font-size: 32px;
        color: #aaa;
      }
      &:hover {
        background-color: #202334;
      }
    }
    .router-link-active {
      background-color: #202334;
      color: #fff;
      i {
        color: #fff;
      }
    }
  }
  .dashboard-content {
    flex: 1 1 0;
    height: 100vh;
    padding: 0 20px;
    overflow-y: scroll;
  }
  .form-section {
    border-bottom: solid 1px #f1f2f3;
    padding: 20px 0;

    .section-title {
      padding: 5px 0;
      font-size: 20px;
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0px;
        height: 0px;
        margin: 0 5px;
        border: solid 6px transparent;
        border-left-color: #2c3e50;
      }
    }
    .filter-label {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      margin: 0 20px 16px 0;
      padding-top: 10px;
      .label-content {
        display: block;
        position: absolute;
        top: 0px;
        left: 10px;
        padding: 0 4px;
        font-size: 12px;
        color: #666;
        background-color: #fff;
        z-index: 1;
      }
    }
  }
  .label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    color: #666;
    font-size: 14px;
  }
  .remark {
    display: inline-block;
    vertical-align: middle;
    margin: 0 20px 0 10px;
    color: #999;
    font-size: 12px;
  }
}
</style>
