import Vue from 'vue'
import Vuex from 'vuex'
import data from '../../data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data,
    productArray:[],
    shopCarShow:false,
    TotalMoney:0
  },
  mutations: {
    //从购物车取出或加入商品
    setProductArray(state,food){   
      let index = -1
      for(let i = 0;i < state.productArray.length;i++){     
        let item = state.productArray[i]
        console.log("food.id"+food.id+"item.id"+item.id);
        if(food.id == item.id){
          index = i        
          break;
        }         
         
      }
      //如果
      if(index >= 0){
        if(food.count <= 0){
          state.productArray.splice(index,1)
        }else{
          state.productArray[index] = food
          // console.log(state.productArray[index]);
        }
        
      }else{
        state.productArray.push(food)
        console.log(state.productArray);
        
      }
    },
    //点击购物车图标弹出购物车和变色
    ChangeshopCarShow(state){
      state.shopCarShow = !state.shopCarShow
      
    },
    CalcTotalMoney(state){
      let total = 0
      for(let i = 0;i < state.productArray.length;i ++){
      total += state.productArray[i].price * state.productArray[i].count
    }
      console.log(total);
      return state.TotalMoney = total
    }
  },
  getters:{
    //获取data的商品信息
    getGoods(state){
      if(state.data)
      return state.data.goods
    },
    //获取data的商家信息
    getSellerData(state) {
      if (state.data) {
          return state.data.seller;
      }
      return {};
  },
  //根据id 判断购物车添加还是已经有了
  getProductById:state => id => {
    for(let i = 0;i < state.productArray.length;i++){
      let item = state.productArray[i]
      if(item.id == id)
        return item
    }
    return false
  },
  getShopCarShow(state){

    return state.shopCarShow
  },
  // 计算总价
  getTotalMoney(state){
    return state.TotalMoney
  },
  getProductArray(state){
    return state.productArray
  }
  },
  actions: {
  },
  modules: {
  }
})
