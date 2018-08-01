<template>
  <div class="render pb pt">
    <v-header></v-header>
    <div class="content">
      <p>1. v-show 显示隐藏 display:none;</p>
      <span v-show="vshow">{{hello}}</span>
      <button @click="vshow = !vshow">v-show</button>
      <p>2. v-if v-else-if v-else 会触发组建重新渲染 为false时，不触发渲染</p>
      <span v-if="vif" v-html="world"></span>
      <button @click="vif = !vif">v-if</button>
      <p>3. 在template可以让一组元素显示隐藏而不会渲染出额外的元素</p>
      <template>
        <span>1</span>
        <span>2</span>
      </template>
      <p>4. v-for 和v-if一起使用时，先循环，然后再每个子元素作判断。key可以让v-for循环提供性能
      </p>
      <ul>
        <li v-for="(item, index) in list" v-if="item.display" :key="index">{{item.text}}</li>
      </ul>
      <p>5. 两个模板使用了相同的元素,不会触发重新渲染</p>
      <input v-if="pwdDisplay" type="password" v-model="password">
      <input v-else type="text" v-model="password">
      <button @click="pwdDisplay = !pwdDisplay">显示/隐藏</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hello: 'hello',
        world: `<span style="color:red">world</span>`,
        vshow: true,
        vif: true,
        password: '',
        pwdDisplay: false,
        list: [
          { text: 'text1', display: true },
          { text: 'text2', display: true },
          { text: 'text3', display: false },
          { text: 'text4', display: true }
        ]
      };
    },
    methods: {

    }
  };
</script>

<style lang="less" scoped></style>
