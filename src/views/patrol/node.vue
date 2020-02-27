<template>
  <div class="app-container">
    <el-select v-model="value" placeholder="请选择打卡类型" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-input v-model="filename" placeholder="标识符" style="width:300px;" prefix-icon="el-icon-document" />
    <el-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="document" @click="handleDownload">
      搜索
    </el-button>
    <el-button :loading="downloadLoading" style="margin-bottom:20px;float: right;" type="primary" icon="el-icon-edit" @click="handleDownload">
      打卡
    </el-button>
    <el-table
      :data="tableData"
      style="width: 100%;">
      <el-table-column
        prop="name"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="名称"
      >
      </el-table-column>
      <el-table-column
        prop="user"
        label="标识符">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="所属管廊">
      </el-table-column>
      <el-table-column
        prop="comname"
        label="所属段">
      </el-table-column>
      <el-table-column
        prop="complete"
        label="所属仓">
      </el-table-column>
      <el-table-column
        prop="createDate"
        label="创建时间">
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
        <el-col :span="5" class="lr">单位名称 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">单位类型：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.des"  placeholder="基本描述"></el-input>
          <div style="text-align: left" v-else>{{contentdata.des}}</div>
        </el-col>
        <el-col :span="5" class="lr">成立时间 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">法人信息 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">资质信息 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">联系方式 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col><el-col :span="5" class="lr">参与项目名称 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col><el-col :span="5" class="lr">主要负责内容 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col><el-col :span="5" class="lr">主要参与者 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col><el-col :span="5" class="lr">项目时间 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col><el-col :span="5" class="lr">项目完成情况 ：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="类型名称"></el-input>
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
          label: '设备打卡'
        }, {
          value: '选项2',
          label: '地点打卡'
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
