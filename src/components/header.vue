<template>
  <mt-header title="固定在顶部">
    <router-link to="/" slot="left">
      <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
      <!-- <mt-button>关闭</mt-button> -->
    </router-link>
    <mt-button icon="more" slot="right">分享</mt-button>
  </mt-header>
</template>

<script>
  export default {};
</script>