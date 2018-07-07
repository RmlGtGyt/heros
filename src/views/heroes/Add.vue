<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="gender">
      </div>
      <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  // 导入axios
  import axios from 'axios';
  // 1. 绑定文本框
  // 2. 添加注册事件
  // 3. 发送请求

  export default {
    data() {
      return {
        // 绑定表单元素
        formData: {
          name: '',
          gender: ''
        }
      }
    },
    methods: {
      // 处理注册逻辑
      handleAdd() {
        axios
          .post('http://localhost:3000/heroes', this.formData)
          .then((res) => {
            if (res.status === 201) {
              // console.log(this);
              this.$router.push({name: 'heroes'});
            } else {
              alert('注册失败');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>

<style lang="">
  
</style>