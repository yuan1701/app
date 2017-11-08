<template>
  <div class="classInfo">
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
				      :data="classes"
				      style="width: 100%">
		      <el-table-column
		        prop="name"
		        label="班级名称"
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
		    <el-form-item label="班级名称" >
		      <el-input v-model="form.name" auto-complete="off"></el-input>
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
  name: 'classInfo',
  data () {
    return {
     	keywords:'',
     	dialogFormVisible:false,
     	form:{},
     	title:''
    }
  },
  created:function(){
  	// this.findAllStudent();
  	this.findAllClasses();
  },
  computed:{
  	// classes(){
  	// 	console.log("store",this.$store)
  	// 	console.log("store",this.$store.state)
  	// 	console.log("classes",this.$store.state.classes)
  	// }
  	 ...mapGetters(['classes'])
  },
  methods:{
  	handleSubmit(){
  		this.dialogFormVisible = false;
  		this.saveClass(this.form).then((result)=>{
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
  		this.title = '录入班级信息';
  		// this.form.gender = '女';
  	},
  	
  	...mapActions([
  		// 'findAllStudent',
  		'saveClass',
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
