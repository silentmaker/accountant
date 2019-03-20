<template>
  <main class="dashboard">
    <Menu></Menu>
    <router-view></router-view>
  </main>
</template>

<script>
import Menu from '@/components/menu.vue';

export default {
  name: 'App',
  components: { Menu },
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
.mb-m { margin-bottom: 16px; }
.ml-m { margin-left: 16px; }
.mr-m { margin-right: 16px; }
.dashboard {
  display: flex;
  .dashboard-menu {
    width: 240px;
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
      padding: 10px 0;
      font-size: 20px;
      &::before {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 4px;
        height: 10px;
        margin-right: 10px;
        background-color: #2c3e50;
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
