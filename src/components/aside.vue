<template>
  <div class="list">  
    <ul class="list-ul">
      <li class="list-item" v-for="(item,index) in goods" :key="index" @click="clickItem(index)" :class="currentIndex ==index?'active':''">
        <a  href="javascript:void(0)" v-text="item.name"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goods:[],
      currentIndex:0
    }
  },
  
  created(){
    this.goods = this.$store.getters.getGoods
    
  },
  methods:{
    clickItem(index){
      
      this.currentIndex = index
    }
  }
}
</script >

<style lang="less"  scoped>
  
</style>