<template>
  <div class="app-container">
    值班人员：
    <el-select v-model="value" multiple  placeholder="请选择" style="width:90%">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    name: "typemanagement",
    data() {
      return {
        filename: '',
        dialogVisible: false,
        listLoading: true,
        downloadLoading: false,
        currentPage4:1,
        pagesize:1,
        total:2,
        li:false,
        contentdata:{},
        tableData: [{
          type: '施工单位',
          des: '公式相关内容',
          date: '2019-11-26',
          name:'施工单位5',
          user:'王大',
          phone:'18408284863',
          createDate:'2019-11-26',
          comname:'项目施工',
          complete:'S',
        },{
          type: '施工单位',
          des: '公式相关内容',
          date: '2019-11-26',
          name:'施工单位1',
          user:'王大',
          phone:'18408284863',
          createDate:'2019-11-26',
          comname:'项目施工',
          complete:'S',
        }],
        options: [{
          value: '选项1',
          label: '监理单位'
        }, {
          value: '选项2',
          label: '建设单位'
        }, {
          value: '选项3',
          label: '设计单位'
        }, {
          value: '选项4',
          label: '施工单位'
        }, {
          value: '选项5',
          label: '运维单位'
        }],
        value: ''
      }
    },
    methods: {
       handleCurrentChange(){

      },
      handleSizeChange(){

      },
      handleDownload(){
        this.dialogVisible = true
        this.li = false
      },
      handleClick(row){
        this.contentdata=row
        this.dialogVisible = true
        this.li = true
      },
      handleUpdate(row){
        this.contentdata=row
        this.dialogVisible = true
        this.li = false
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            this.li = true
          })
          .catch(_ => {});
      },
      handleDle(row){
        this.$confirm('确认删除？')
          .then(_ => {
            console.log(row)
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>
  .lr{
    text-align: right;
    line-height: 40px;
    margin-bottom: 20px;
  }
</style>
