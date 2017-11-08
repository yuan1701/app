<template>
  <div class="studentInfo">
		<el-row class='searchBar'>
			<el-col :span="6">
				<el-input
				  placeholder="请输入关键字"
				  icon="search"
				  v-model="keywords">

				  
				</el-input>
			</el-col>
			<el-col :span='18' style='text-align:right'>
				<el-button type="text" @click='handleSingleImport'>单个导入</el-button>
				<el-button type="text">批量导入</el-button>
			</el-col>
		</el-row>
		
		<el-row>
			<el-col :span="24">
				<el-table
      :data="students"
      style="width: 100%">
		      <el-table-column
		        prop="name"
		        label="姓名"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="gender"
		        label="性别"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="birth"
		        label="生日"
		        :formatter='dateFormat'
		        >
		      </el-table-column>
		      <el-table-column
		        prop="class.name"
		        label="班级"
		        >
		      </el-table-column>
		      <el-table-column label="操作" width="180">
			      <template slot-scope="scope">
			        <el-button
			          size="small"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="small"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
		    </el-table>
			</el-col>
		</el-row>
		
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="学生姓名" >
		      <el-input v-model="form.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="学生密码" >
		      <el-input v-model="form.password" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="性别" >
		      <el-radio class="radio" v-model="form.gender" label="男">男</el-radio>
  				<el-radio class="radio" v-model="form.gender" label="女">女</el-radio>
		    </el-form-item>
		    <el-form-item label="出生日期" >
		      <el-date-picker
			      v-model="form.birth"
			      type="date"
			      placeholder="选择日期">
			    </el-date-picker>
		    </el-form-item>
				<el-form-item label="班级" >
		      <el-select v-model="form.class_id" placeholder="请选择">
				    <el-option
				      v-for="item in classes"
				      :key="item.id"
				      :label="item.name"
				      :value="item.id">
				    </el-option>
				  </el-select>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="handleSubmit">确 定</el-button>
		  </div>
		</el-dialog>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import moment from 'moment';

export default {
  name: 'studentInfo',
  data () {
    return {
     	keywords:'',
     	dialogFormVisible:false,
     	form:{},
     	title:''
    }
  },
  created:function(){
  	this.findAllStudent();
  	this.findAllClasses();
  },
  computed:{
  	...mapGetters(['students','classes'])
  },
  methods:{
  	handleSubmit(){
  		this.dialogFormVisible = false;
  		this.saveStudent(this.form).then((result)=>{
  			this.$message({
          type: 'success',
          message: `操作成功`
        });
  		}).catch((error)=>{
  			this.$message({
          type: 'error',
          message: `操作失败`
        });
  		});
  	},
  	handleSingleImport(){
  		this.dialogFormVisible = true;
  		this.title = '录入学生信息';
  		this.form.gender = '女';
  	},
  	dateFormat:function(row, column) {  
      var date = row[column.property];  
      if (date == undefined) {  
        return "";  
      }  
      return moment(date).format("YYYY-MM-DD");  
    },
  	...mapActions([
  		'findAllStudent',
  		'saveStudent',
  		'findAllClasses'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.searchBar{
		margin: 10px 0;
	}
</style>
