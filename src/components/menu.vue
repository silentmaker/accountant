<template>
  <ul class="dashboard-menu">
    <router-link tag="li" class="menu-item" :to="{ name: 'index' }"><i class="el-icon-document"></i>订单</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'return' }"><i class="el-icon-goods"></i>退件</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'trouble' }"><i class="el-icon-service"></i>问题件</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'profit' }"><i class="el-icon-date"></i>返款</router-link>
    <router-link tag="li" class="menu-item" :to="{ name: 'tool' }"><i class="el-icon-printer"></i>表格</router-link>
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
