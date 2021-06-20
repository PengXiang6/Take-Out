<template>
  <div id="app">
    <sell-header :sellerData="sellerData"></sell-header>
    <div class="titles">
      <div class="title-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="title-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="title-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue'
export default {
  components:{
    'sellHeader': Header,
  },
  data(){
    return {
      sellerData:{
      
      },
     
    }
  },
  methods:{

  },
  created(){
     this.sellerData = this.$store.getters.getSellerData
     
  }
}
</script>

<style lang="less">
    #app {
      height: 100%;
    }
  .titles {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    // padding: 10px 0;
    .title-item {
      height: 100%;
      flex: 1;
      a{
        display: block;
        width: 100%;
        height: 100%;
        color: rgb(77, 85, 93);
      }    
    }
  }

  .titles .title-item .active {
    color: rgb(240, 20, 20);
  }
</style>
