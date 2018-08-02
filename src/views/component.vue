<template>
  <div class="component pt">
    <v-header title="组件" back></v-header>
    <div class="content">
      <!-- <component-b name="B"></component-b> -->
      <component-a ref="component-a" @say="fatherSay" :prop-name="name" :prop-say="fatherSay">
        <span slot="name1">来自父组件的name1</span>
        <span slot="name2">来自父组件的name2</span>
      </component-a>
      <br/>
      <button @click="$refs['component-a'].childSay(name)">父组件调用子组件的方法</button>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  // Vue.component('componentB', {
  //   template: `<div>父组件通过prop传递数据给子组件{{name}}</div>`,
  //   props: {
  //     name: String
  //   }
  // });

  let componentA = {
    template: `
      <div style="background-color:green;">父组件通过prop传递数据给子组件的数据：{{propName}}
        <br/><button @click="$emit('say', name)">子组件emit父组件</button>
        <br/><button @click="propSay(name)">子组件通过prop调用父组件方法</button>
        <br/><button @click="$parent.fatherSay(name)">子组件直接调用父组件方法</button>
        <slot name="name1"></slot>
        <slot name="name2"></slot>
      </div>
    `,
    props: {
      'prop-say': Function,
      'prop-name': {
        type: String,
        required: true,
        default: '',
        validator: (val) => {
          //自定义验证
          return val === 'CCC';
        }
      }
    },
    data() {
      return {
        name: 'AAA'
      };
    },
    created() {
      // this.propName = '222'; //不要试图修改prop的值，否则会报错
    },
    methods: {
      childSay(val) {
        alert('[子组件]从父组件获取的数据:' + val);
      }
    }
  };

  export default {
    data() {
      return {
        name: 'CCC'
      };
    },
    components: {
      componentA
    },
    methods: {
      fatherSay(val) {
        alert('[父组件]从子组件获取的数据:' + val);
      }
    }
  };
</script>

<style lang="less" scoped>
</style>
