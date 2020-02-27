<template>
  <div class="app-container">
    <el-select v-model="value" placeholder="选择工程" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="filename" placeholder="请输入类型名字" style="width:300px;" prefix-icon="el-icon-document" />
    <el-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="document" @click="handleDownload">
      搜索
    </el-button>
    <el-button :loading="downloadLoading" style="margin-bottom:20px;float: right;" type="primary" icon="el-icon-edit" @click="handleDownload">
      添加
    </el-button>
    <el-table
      :data="tableData"
      style="width: 100%;">
      <el-table-column
        prop="type"
        label="类型名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="子系统名称"
      >
      </el-table-column>
      <el-table-column
        prop="com"
        label="所属工程"
      >
      </el-table-column>
      <el-table-column
        prop="num"
        label="类型代号">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleUpdate(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDle(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      <el-row>
        <el-col :span="5" class="lr">所属工程 ：</el-col>
        <el-col class="lr" :span="19">
           <el-select style="width:100%" v-model="contentdata.com" placeholder="选择工程" v-if="!li">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">子系统：</el-col>
        <el-col class="lr" :span="19">
         <el-select style="width:100%" v-model="contentdata.name" placeholder="子系统" v-if="!li">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
          <div style="text-align: left" v-else>{{contentdata.name}}</div>
        </el-col>
        <el-col :span="5" class="lr">类型名称 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">类型代号 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.num" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
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
          type: '出入线孔',
          name: '管线引入与地面设施',
          com: '土建工程',
          num:'123123',
        },{
         type: '多功能探照',
          name: '照明系统',
          com: '附属工程',
          num:'100',
        }],
        options: [{
          value: '选项1',
          label: '土建工程'
        }, {
          value: '选项2',
          label: '附属工程'
        }],
        value: ''
      }
    },
    methods: {
       handleCurrentChange(){

      },
      handleCurrentChange(){

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
