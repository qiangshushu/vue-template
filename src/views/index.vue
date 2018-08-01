<template>
  <div class="index pt">
    <v-header></v-header>
    <div class="content">
      <ul>
        <router-link v-for="(item, index) in catalog" tag="li" :to="{name: item.path}" :key="index">{{index + 1}} - {{item.title}}</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        catalog: [{
          title: '介绍',
          path: 'introduction'
        },
        {
          title: '生命周期',
          path: 'lifecycle'
        },
        {
          title: '渲染',
          path: 'render'
        }]
      };
    }
  };
</script>

<style lang="less" scoped>
  ul {
    padding: 20px;
    li {
      padding: 20px 0;
    }
  }
</style>

