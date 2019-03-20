<template>
  <section class="dashboard-content">
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'Profit',
  data() {
    const item = {
      date: '2016-05-02',
      name: 'abc',
      address: 'absdfasdfad',
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>
