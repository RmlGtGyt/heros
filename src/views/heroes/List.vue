<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="#/heroes/add">Add</a> -->
    <router-link :to="{name: 'heroadd'}" class="btn btn-success">Add</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item, index) in list">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <router-link :to="{name: 'heroedit', params:{ id: item.id }}">edit</router-link>
              &nbsp;&nbsp;
              <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  // 导入axios模块
  import axios from 'axios';

  export default {
    data() {
      return {
        list: []
      };
    },
    created() {
      // 调用方法
      this.loadData();
    },
    methods: {
      // 加载英雄列表
      loadData() {
        // 发送请求获取英雄列表的数据
        axios
          .get('http://localhost:3000/heroes')
          .then((res) => {
            const { status, data } = res;
            if (status === 200) {
              this.list = data;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      },
      // 添加删除事件
      handleDelete(id) {
        // 删除提示
        if (!confirm('您确定要删除本条数据吗？')) {
          return;
        }
        // 发送请求删除数据
        axios
          .delete(`http://localhost:3000/heroes/${id}`)
          .then((res) => {
            if (res.status === 200) {
              // 删除成功，重新渲染页面
              this.loadData();
            } else {
              alert('数据删除失败');
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