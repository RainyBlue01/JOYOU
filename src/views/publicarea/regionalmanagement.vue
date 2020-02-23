<template>
  <div class="app-container">
    <el-input v-model="filename" placeholder="请输入公共类型名称" style="width:300px;" prefix-icon="el-icon-document" />
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
        prop="name"
        label="公共区域名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="公共区域类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="center"
        label="所属控制中心"
        width="180">
      </el-table-column>
      <el-table-column
        prop="local"
        label="位置"
        width="180">
      </el-table-column>
      <el-table-column
        prop="des"
        label="基本描述"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="修改时间">
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
        <el-col :span="5" class="lr">区域名称：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.name" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.name}}</div>
        </el-col>
        <el-col :span="5" class="lr">区域类型：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="选择区域类型"></el-input>
          <div style="text-align: left" v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">控制中心：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.center" placeholder="选择控制中心"></el-input>
          <div style="text-align: left" v-else>{{contentdata.center}}</div>
        </el-col>
        <el-col :span="5" class="lr">详细位置：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.local" placeholder="详细位置"></el-input>
          <div style="text-align: left" v-else>{{contentdata.local}}</div>
        </el-col>
        <el-col :span="5" class="lr">基本描述：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.des" type="textarea" :rows="5" placeholder="基本描述"></el-input>
          <div style="text-align: left" v-else>{{contentdata.des}}</div>
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
        input:'',
        li:false,
        contentdata:{},
        tableData: [{
          name:'成渝变电站',
          type: '变电站',
          center:'成渝路分控中心',
          local:'成渝路中段1号',
          des: '变电站',
          createTime: '2019-11-26 ',
          updateTime: '2019-12-26 '
        },{
          name:'汉州分控中心',
          type: '分控中心',
          center:'成都总控中心',
          local:'',
          des: '',
          createTime: '2019-11-26',
          updateTime: '2019-12-26 '
        }]
      }
    },
    methods: {
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
