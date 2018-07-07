<template>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="gender">
      </div>
      <button @click.prevent="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          gender: ''
        },
        // 获取url上的id，默认为-1
        heroId: -1
      }
    },
    // 组建创建完毕
    created() {
      console.log(this.$route.params.id);
      this.heroId = this.$route.params.id;
      this.loadData();
    },
    methods: {
      // 根据id查询需要修改的英雄信息
      loadData() {
        this.$http
          .get(`heroes/${this.heroId}`)
          .then((res) => {
            if (res.status === 200) {
              this.formData = res.data;
              console.log(this.formData);
            } else {
              console.log('数据查找失败');
            }
          })
          .catch((err) => {
            console.log(err);
          })
        
      },
      handleEdit() {
        this.$http
          .put(`heroes/${this.heroId}`, this.formData)
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({name: 'heroes'});
            } else {
              console.log('数据修改失败');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style lang="">
  
</style>
