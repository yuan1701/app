import axios from 'axios'

export default {
	state:{
		classes:[]
	},
	getters:{
		classes:state=>state.classes
	},
	mutations:{
		alterClasses:(state,data)=>{
			state.classes = data;
		}
	},
	actions:{
		saveClass:(context,form)=>{
			return new Promise((resolve,reject)=>{
				axios.post('http://192.168.0.103:3000/clazz/save',form).then(function(result){
					//保存成功之后
					context.dispatch('findAllClasses');
					resolve(result);
				}).catch((error)=>{
					reject(error)
				})
			})
		},
		findAllClasses:(context)=>{
			axios.get('http://192.168.0.103:3000/clazz/findAll:3000/clazz/findAll').then(function({data}){
				context.commit('alterClasses',data)
			})
		}
	}
}