<template>
  <div class="clazz">
		{{msg}}
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'clazz',
  data () {
    return {
      msg: '班级管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
