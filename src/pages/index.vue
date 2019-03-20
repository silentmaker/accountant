<template>
  <section class="dashboard-content">
    <div class="form-section">
      <div>
        <span class="label" type="text">导入订单信息</span>
        <el-button size="small" @click="$refs.upload.click()">选择文件</el-button>
        <span class="remark" v-if="file">{{ file.name }}</span>
      </div>
      <div class="mt-m">
        <el-button size="small" type="primary" @click="uploadFile" :disabled="!file" v-if="isLoaded">确认导入</el-button>
        <el-button size="small" :loading="true" v-else>导入中</el-button>
        <span class="remark">新上传的订单如果以前上传过则以新上传的为准</span>
      </div>
      <input type="file" ref="upload" @change="chooseFile">
    </div>

    <div class="form-section">
      <label class="filter-label">
        <span class="label-content">订单ID</span>
        <el-input v-model="filter.id"></el-input>
      </label>
      <label class="filter-label">
        <span class="label-content">下单时间</span>
        <el-date-picker
          v-model="filter.date"
          type="daterange">
        </el-date-picker>
      </label>
      <label class="filter-label">
        <span class="label-content">姓名</span>
        <el-input v-model="filter.name"></el-input>
      </label>
      <label class="filter-label">
        <span class="label-content">手机号码</span>
        <el-input v-model="filter.phone"></el-input>
      </label>
      <label class="filter-label">
        <span class="label-content">订单状态</span>
        <el-select v-model="filter.account" placeholder="">
          <el-option label="全部" value="1"></el-option>
          <el-option label="待确认" value="2"></el-option>
          <el-option label="待发货" value="3"></el-option>
          <el-option label="已发货" value="4"></el-option>
          <el-option label="已签收" value="5"></el-option>
          <el-option label="已退货" value="6"></el-option>
        </el-select>
      </label>
      <label class="filter-label">
        <span class="label-content">快递公司</span>
        <el-select v-model="filter.account" placeholder="">
          <el-option label="全部快递" value="1"></el-option>
          <el-option label="德邦物流" value="2"></el-option>
          <el-option label="韵达快递" value="3"></el-option>
        </el-select>
      </label>
      <div>
        <el-button size="small" type="primary">筛选</el-button>
        <span class="remark">共{{ orders.length }}个订单</span>
      </div>
    </div>

    <el-table height="800" :data="orders">
      <el-table-column prop="订单ID" label="订单ID" />
      <el-table-column prop="订单状态" label="订单状态" />
      <el-table-column prop="姓名" label="姓名" />
      <el-table-column prop="手机号码" label="手机号码" />
      <el-table-column prop="下单时间" label="下单时间" />
      <el-table-column prop="省" label="省份" />
      <el-table-column label="操作" width="140">
        <template slot-scope="scope">
          <el-button plain type="info" size="small" @click="tagTrouble(scope.row)"
            v-if="!scope.row.isTrouble">标记问题件</el-button>
          <el-button plain type="danger" size="small" @click="trackTrouble(scope.row)"
            v-else>跟进</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div></div>
  </section>
</template>

<script>
import XLSX from 'xlsx';
import { mapState } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
      filter: {
        id: '',
        name: '',
        phone: '',
        date: '',
        status: '',
      },
      file: null,
      tableData: [],
      isLoaded: true,
    };
  },
  computed: {
    ...mapState([
      'orders',
    ]),
  },
  methods: {
    chooseFile(e) {
      this.file = e.target.files ? e.target.files[0] : null;
    },
    uploadFile() {
      const fileReader = new FileReader();
      this.isLoaded = false;
      fileReader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary', cellDates: true, cellStyles: true });
        const orders = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
        this.$store.dispatch('updateOrders', orders);
        this.$nextTick(() => {
          this.$message({ message: '导入成功', type: 'success' });
          this.file = null;
          this.isLoaded = true;
        });
      };
      fileReader.readAsBinaryString(this.file);
    },
    tagTrouble(order) {
      this.$store.dispatch('tagTrouble', order['订单ID']);
    },
    trackTrouble(order) {
      this.$router.push({ name: 'trouble-detail', params: { id: order['订单ID'] } });
    },
  },
};
</script>
