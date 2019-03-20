<template>
  <header class="dashboard-header">
    <div class="header-logo">盛美诚品</div>
    <div class="header-title">订单统计系统</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="less" scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, .1);

  .header-logo {
    width: 240px;
    padding: 24px 0;
    text-align: center;
    color: #fff;
    background-color: #01a2d3;
  }
  .header-title {
    background: #fff;
    margin-left: 30px;
    color: #999;
    font-size: 18px;
  }
}
</style>
