<template>
  <div class="app-container">
  <!--  <el-input v-model="filename" placeholder="请输入公共类型名称" style="width:300px;" prefix-icon="el-icon-document" />
    <el-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="document" @click="handleDownload">
      搜索
    </el-button>-->
    <el-button :loading="downloadLoading" style="margin-bottom:20px;float: right;" type="primary" icon="el-icon-edit" @click="handleDownload">
      添加
    </el-button>
    <el-table
      :data="tableData"
      style="width: 100%;">
      <el-table-column
        prop="id"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="com"
        label="摘要"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
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
        <el-col :span="5" class="lr">所属类型：</el-col>
        <el-col class="lr" :span="19">
          <el-select v-model="value" placeholder="请选择" v-if="!li" style="width: 100%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--<el-input  v-model="contentdata.name" placeholder="类型名称"></el-input>-->
          <div style="text-align: left"  v-else>{{contentdata.type}}</div>
        </el-col>
        <el-col :span="5" class="lr">标题：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.type" placeholder="请输入标题"></el-input>
          <div style="text-align: left" v-else>{{contentdata.title}}</div>
        </el-col>
        <el-col :span="5" class="lr">摘要：</el-col>
        <el-col class="lr" :span="19">
          <el-input v-if="!li" v-model="contentdata.com" placeholder="请输入摘要"></el-input>
          <div style="text-align: left" v-else>{{contentdata.center}}</div>
        </el-col>
        <el-col :span="5" class="lr">附件上传：</el-col>
        <el-col class="lr" :span="19">
          <el-upload
            v-if="!li"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div style="text-align: left" v-else>{{contentdata.local}}</div>
        </el-col>
        <el-col :span="5" class="lr">基本描述：</el-col>
        <el-col class="lr" :span="19" style="text-align: left">
         <!-- <tinymce-editor  v-if="!li" ref="editor"
                          v-model="msg"
                          :disabled="disabled"
                          @onClick="onClick">
          </tinymce-editor>-->
            <div ref="editorElem" v-if="!li" id="editor" style="height: 300px"></div>
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
  import E from "wangeditor";
  export default {
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
        content: '',
        editorOption: {},
        contentdata:{},
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        tableData: [{
          id:1,
          name:'admin',
          type: '公告',
          title:'防火演练',
          com:'进行一次防火演练',
          createTime: '2019-11-26 ',
        },{
          id:2,
          name:'admin',
          type: '操作',
          title:'关于系统的操作使用说明',
          com:'关于系统的操作使用说明，即系统使用说明',
          createTime: '2019-11-26 ',
        }],
        editor: '',
        editorContent: '',
        options: [{
          value: '选项1',
          label: '公告'
        }, {
          value: '选项2',
          label: '操作'
        }, {
          value: '选项3',
          label: '公示'
        }],
        value: ''
      }
    },
    methods: {
      //鼠标单击的事件
      onClick(e, editor) {
        console.log('Element clicked')
        console.log(e)
        console.log(editor)
      },
      //清空内容
      clear() {
        this.$refs.editor.clear()
      },

      get(data){
    return new Promise(function(resolve, reject){
      if(data>5){
        resolve(data)
      }else{
        reject('数据都是不大于5')
      }
    });
  },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
  function3(){
    this.editor = editor
  },
      handleDownload(){
        this.dialogVisible = true
        this.li = false
        console.log(this.editor)
        var data
        if(this.editor === ''){
         data = 6
        }else{
          data = 2
        }
        // this.editor.destroy()
        var editor = new E("#editor")
        this.get(data).then(function(num) {
            editor.customConfig.uploadImgShowBase64 = true
            // editor.customConfig.uploadImgServer = '/upload'
            editor.customConfig.showLinkImg = false
            editor.create(); // 创建富文本实例
            editor.txt.html();
        })
        this.editor = editor
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
            this.editor.destroy();
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
  .upload-demo{
    text-align: left;
  }
</style>
