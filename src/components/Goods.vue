<template>
  <div class="good">
    <sell-goods class="food-list"></sell-goods>
    <shopping-car class="shoping-car"></shopping-car>
  </div>
</template>

<script>

import goodsList from '../components/goodsList.vue'
import shoppingCar from '../components/bottom.vue'
export default {
  components:{
    'sellGoods':goodsList,
    'shoppingCar':shoppingCar
  }
}
</script>

<style scoped>


</style>