<template>
  <div class="student">
		{{msg}}
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      msg: '学生管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
