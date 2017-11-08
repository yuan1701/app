import Vue from 'vue'
import Vuex from 'vuex'
import StudentStore from './StudentStore'
import CourseStore from './CourseStore'
import ClassStore from './ClassStore'
//必须在创建Store之前调用use函数
Vue.use(Vuex)
export default new Vuex.Store({
	modules:{
		StudentStore,
		CourseStore,
		ClassStore
	}
})