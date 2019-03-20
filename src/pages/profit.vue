<template>
  <section class="dashboard-content">
    <div class="form-section">
      <div class="section-title">更新返款明细</div>
      <div class="mt-m">
        <span class="label" type="text">导入明细表</span>
        <el-button size="small" @click="$refs.upload.click()">选择文件</el-button>
        <span class="remark" v-if="file">{{ file.name }}</span>
      </div>
      <div class="mt-m">
        <el-button size="small" type="primary" @click="uploadFile" :disabled="!file" v-if="isLoaded">确认导入</el-button>
        <el-button size="small" :loading="true" v-else>导入中</el-button>
        <span class="remark">重复的返款记录以新上传的为准</span>
      </div>
      <input type="file" ref="upload" @change="chooseFile">
    </div>
    <div class="form-section">
      <div class="section-title">全部返款明细</div>
      <div class="mt-s">
        <span class="label" type="text">生成未返款明细表</span>
      </div>
      <div class="mt-m">
        <el-button size="small" type="primary" v-if="isLoaded">确认生成</el-button>
        <el-button size="small" :loading="true" v-else>生成中</el-button>
        <span class="remark">生成未返款明细表主要用于韵达返款及对账</span>
      </div>
    </div>
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="单号" width="120">
      </el-table-column>
      <el-table-column prop="address" label="金额">
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'Profit',
  data() {
    return {
      file: null,
      tableData: [],
      isLoaded: true,
    };
  },
  methods: {
    chooseFile(e) {
      this.file = e.target.files ? e.target.files[0] : null;
    },
    uploadFile() {
    },
  },
};
</script>
