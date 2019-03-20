<template>
  <section class="dashboard-content">
    <div class="form-section">
      <div class="section-title">发货关联运单号</div>
      <div class="mt-m">
        <span class="label" type="text">1. 上传快递发货表: </span>
        <el-button size="small" @click="$refs.uploadSource.click()">选择文件</el-button>
        <span class="remark" v-if="source">{{ source.name }}</span>
      </div>
      <div class="mt-m">
        <span class="label" type="text">2. 上传枫页订单表: </span>
        <el-button size="small" @click="$refs.uploadTarget.click()">选择文件</el-button>
        <span class="remark" v-if="target">{{ target.name }}</span>
      </div>
      <div class="mt-m">
        <span class="label" type="text">3. 选择快递公司: </span>
        <el-select size="small" v-model="sourceType" placeholder="请选择">
          <el-option
            v-for="item in sourceOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="mt-l">
        <el-button size="small" type="primary" @click="mergeFile" :disabled="disabled">确认合并</el-button>
        <span class="remark">在发货表里找不到运单号的订单，快递公司会变成未知，快递单号会变成空</span>
      </div>
      <input type="file" ref="uploadSource" @change="chooseSource">
      <input type="file" ref="uploadTarget" @change="chooseTarget">
    </div>
    <div class="form-section">
      <div class="section-title mb-m">常用平台帐号</div>
      <el-button size="small" type="primary" icon="el-icon-view" plain @click="gotoDoc">查看文档</el-button>
    </div>
  </section>
</template>

<script>
import XLSX from 'xlsx';

export default {
  name: 'Tool',
  data() {
    return {
      sourceType: 'debang',
      sourceOption: [
        { label: '德邦物流', value: 'debang' },
        { label: '韵达快递', value: 'yunda' },
      ],
      source: null,
      target: null,
      sourceList: [],
      targetList: [],
    };
  },
  computed: {
    disabled() {
      if (this.source && this.target) return false;
      return true;
    },
    sourceName() {
      const index = this.sourceOption.findIndex(item => item.value === this.sourceType);
      return this.sourceOption[index].label;
    },
  },
  methods: {
    chooseSource(e) {
      this.source = e.target.files ? e.target.files[0] : null;
    },
    chooseTarget(e) {
      this.target = e.target.files ? e.target.files[0] : null;
    },
    encryptNubmer(num) {
      if (this.sourceType === 'debang') return `${num.substr(0, 4)}*****${num.substr(9)}`;
      return num;
    },
    readFile(type) {
      return new Promise((resolve) => {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
          const workbook = XLSX.read(e.target.result, { type: 'binary', codepage: 936, cellDates: true, cellStyles: true });
          const orders = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          this[`${type}List`] = orders;
          resolve();
        };
        fileReader.readAsBinaryString(this[type]);
      });
    },
    mergeFile() {
      Promise.all([this.readFile('source'), this.readFile('target')]).then(() => {
        this.targetList.forEach((target) => {
          const index = this.sourceList.findIndex((source) => {
            if (this.sourceType === 'debang') return source['收件人姓名'] === target['姓名'] && source['收件人手机'] === this.encryptNubmer(target['手机号码']);
            return source['订单号'].trim() === target['订单ID'];
          });
          target['快递单号'] = index !== -1 ? `${this.sourceList[index]['运单号']}` : '';
          target['快递公司'] = index !== -1 ? this.sourceName : '未知';
        });
        const sheet = XLSX.utils.json_to_sheet(this.targetList, { header: ['订单ID', '页面名称', '套餐明细',
          '数量', '套餐单价', '总价', '姓名', '手机号码', '省', '市', '地区', '收件地址', '下单IP', '下单时间',
          '订单状态', '快递公司', '快递单号', '留言', '备注', '详情页URL', '广告id', '广告名称', '投放账户', '身份证'] });
        const book = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(book, sheet, 'Sheet1');
        XLSX.writeFile(book, '枫页关联运单号列表.xls');
      });
    },
    gotoDoc() {
      window.open('https://docs.qq.com/sheet/DYWZTdVRSS3BIam1U');
    },
  },
};
</script>
