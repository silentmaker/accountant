<template>
  <ul class="dashboard-menu">
    <router-link tag="li" class="menu-item" :to="{ name: 'index' }">订单管理</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'troubles' }">问题件追踪</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'profit' }">返款明细</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'tool' }">表格工具</router-link>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.dashboard-menu {
  display: block;
  background-color: #333645;
  padding: 0;
  margin: 0;
  list-style: none;

  .menu-item {
    padding: 16px 0;
    color: #aaa;
    font-size: 14px;
    cursor: pointer;
    text-indent: 40px;
    transition: background-color .5s;

    &:hover {
      background-color: #202334;
    }
  }
  .router-link-active {
    color: #fff;
  }
}
</style>
