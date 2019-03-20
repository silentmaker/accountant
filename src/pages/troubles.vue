<template>
  <section class="dashboard-content">
    <el-table height="800" :data="troubles">
      <el-table-column prop="订单ID" label="订单ID" />
      <el-table-column prop="下单时间" label="下单时间" />
      <el-table-column prop="页面名称" label="页面名称" />
      <el-table-column prop="姓名" label="姓名" />
      <el-table-column prop="手机号码" label="手机号码" />
      <el-table-column prop="省" label="省份" />
      <el-table-column prop="订单状态" label="订单状态" />
      <el-table-column prop="投放账户" label="投放账户" />
    </el-table>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Troubles',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'troubles',
    ]),
  },
};
</script>
