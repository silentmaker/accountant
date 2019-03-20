<template>
  <section class="dashboard-content">
    <div class="form-section">
      <div class="section-title mb-s">退件登记</div>
      <label class="filter-label">
        <span class="label-content">快递单号</span>
        <el-input v-model="orderId"></el-input>
      </label>
      <div>
        <el-button size="small" type="primary" :disabled="!orderId">确定</el-button>
      </div>
    </div>
    <div class="form-section">
      <div class="section-title">全部退件明细</div>
      <div class="mt-s">
        <span class="label" type="text">生成拒收未退件明细表</span>
      </div>
      <div class="mt-m">
        <el-button size="small" type="primary" v-if="true">确认生成</el-button>
        <el-button size="small" :loading="true" v-else>生成中</el-button>
        <span class="remark">生成未返款明细表主要用于韵达返款及对账</span>
      </div>
    </div>
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
    return {
      orderId: '',
      isLoaded: false,
    };
  },
  computed: {
    ...mapGetters([
      'troubles',
    ]),
  },
};
</script>
