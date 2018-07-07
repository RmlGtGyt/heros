<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <router-link tag="li" to="/heroes" active-class="active">
        <a>英雄列表</a>
      </router-link>
      <router-link tag="li" to="/weapons" active-class="active">
        <a>武器列表</a>
      </router-link>
      <router-link tag="li" to="/equips" active-class="active">
        <a>装备列表</a>
      </router-link>
      
    </ul>
  </div>
</template>

<script>
  // 导出侧边栏
  export default {
    data() {
      return {

      };
    }
  };
</script>

<style lang="">
  
</style>