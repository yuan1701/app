<template>
  <div class="course">
		{{msg}}
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'course',
  data () {
    return {
      msg: '课程管理'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
