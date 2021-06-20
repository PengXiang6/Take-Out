<template>
 <div>
   <!-- 购物车区域 -->
   <div class="shopcar" v-if="isShowCar">
     <div class="car-item" v-for="(item,index) in productArray" :key="index">   
      <div class="food-name">
        {{item.name}}
      </div>
      <div class="currentfood-price">
        {{item.price * item.count}}
      </div>
      <div class="change-goods-number">              
              <div class="minus" v-show="item.count > 0"  @click="cutfood(item.id)">
                <span>-</span>
              </div>
              <span class="food-count" v-show="item.count > 0" v-text="item.count"></span>
              <div class="add" @click="addfood(item.id)">
                <span>+</span>
              </div>
      </div>
   </div>
    </div>
   <!-- 底部区域 -->
  <div class="bottom">
    <div class="item1">
      <div class="shopping-car-box" @click="toggleCarShow">
        <div class="shoping-car-warpper" :class="isShowCar?'blue-car':'blcak-car'">
          <van-icon name="shopping-cart-o" color="#80858A"  size="30px" />
        </div>
      </div>
    </div>
    
    <div class="item2">
      <span class="total-price" >
       ￥{{getTotalMoney}}
      </span>
      <span class="total-remark"> 
        另需配送费￥4元
      </span>
    </div>
    <div class="item3">
      <button class="submit-order">结账</button>
    </div>
  </div>

   </div>
</template>

<script>
export default {
  data(){
    return {
      isShowCar:false,
      productArray:[]
    }
  },
  methods:{
    //控制购物车弹出和下去
    toggleCarShow(){
    this.$store.commit('ChangeshopCarShow')
    this.isShowCar = this.$store.getters.getShopCarShow
    
  },

  addfood(id){
    let food = this.$store.getters.getProductById(id)
    if(food){
      food.count++
      this.$store.commit('setProductArray',food)
       this.$store.commit('CalcTotalMoney')
    }else {
      this.$store.commit('setProductArray',{
        id:id,
        name:food.name,
        price:food.price,
        count:1
      })
       this.$store.commit('CalcTotalMoney')
    }
  },

  cutfood(id){
    let food = this.$store.getters.getProductById(id)
    if(food){
      food.count--
      this.$store.commit('setProductArray',food)
       this.$store.commit('CalcTotalMoney')
    }
  }

  
  
  },
  //获取总价格
  computed:{
    getTotalMoney(){
    return this.$store.getters.getTotalMoney  
  }
  },
  created(){
    this.productArray = this.$store.getters.getProductArray;
  }
}
</script>

<style lang="less" scoped>
.bottom {
    display: flex;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #141C27;

  .item1 {
    width: 20%;
    height: 45px;
    position: relative;
    .shopping-car-box {

      width: 44px;
      height: 44px;
      border-radius: 100%;
      position: absolute;
      top: -8px;
      left: 20px;
      background-color: #141C27;
      text-align: center;

      .shoping-car-warpper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 38px;
        height: 38px;
        top: 5px;
        left: 3px;       
        border-radius: 100%;
        background-color: #2B343C; 
      }
      .blue-car {
        background-color: rgb(0,160,220);
        color:rgb(255,255,255);
      }
     

      
    }
  }

  .item2 {
    width: 55%;
    align-self: center;

    .total-price{
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
    .total-remark{
      margin-left: 13px;
      font-size: 16px;
      color: #919396;
    }
  }

  .item3 {
    width: 25%;
    .submit-order {
      border: 0;
      width: 100%;
      height: 100%;
      background-color: rgb(0,160,220);
      font-weight: 700;
      color: #fff;
    }
  }

}
@keyframes toggleShopcar {
  from {
    height: 0;
  }
  to {
    height: 300px;
  }
}


.shopcar {
  background-color: #fff;
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  bottom: 45px;
  animation: toggleShopcar .3s;
  overflow-y: auto;

  .car-item {
    display: flex;
    position: relative;
    height: 48px;
    align-items: center;
    margin: 10px 18px;
    border-bottom: 1px solid black;

    .food-name {
      flex: 1;
    }

    .currentfood-price {
      flex: 1;
    }

    .change-goods-number {
      flex: 1;
    } 
  }
}


.change-goods-number {
        display: flex;
        position: absolute;
        right: 12px;
        bottom: 9px;
        align-items: center;
        .add {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background-color:green;
          span {
            font-size: 35px;
            position: relative;
            top: -5px;
            left: 2px;
            color: #fff;
          
            
          };
        }

          .minus {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          background-color:green;
          span {
            font-size: 35px;
            position: relative;
            top: -7px;
            left: 7px;
            color: #fff;
            
          };
        }

        .food-count {
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          margin: 0 9px
        }
       
      }
</style>