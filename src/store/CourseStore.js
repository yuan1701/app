import axios from 'axios'

export default {
	state:{
		courses:[]
	},
	getters:{
		courses:state=>state.courses
	},
	mutations:{
		alterCourses:(state,data)=>{
			state.courses = data;
		}
	},
	actions:{
		saveCourse:(context,form)=>{
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.0.103:3000/course/save',form).then(function(result){
					//保存成功之后
					context.dispatch('findAllCourse');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		findAllCourse:(context)=>{
			axios.get('http://192.168.0.103:3000/course/findAll').then(function({data}){
				context.commit('alterCourses',data)
			})
		}
	}
}