<template>
  <div class="good-list">

    <div class="list">  
    <ul class="list-ul">
      <li class="list-item" v-for="(item,index) in goods" :key="index"  @click="clickItem('class'+index,index)" :class="currentIndex ==index?'active':''">
        <a  href="javascript:void(0)" v-text="item.name"></a>
      </li>
    </ul>
  </div>


  <div id="good" @scroll="onScroll">
    <!-- 分类 -->
    <div class="good-item" v-for="(item1,index1) in goods" :key="index1" :id="'class'+index1">
      <h3>{{item1.name}}</h3>

    <!-- 商品列表 -->
    <ul class="foods-list">
      <li v-for="(item2,index2) in item1.foods" :key="index2">
        <div class="food-icon">
          <img :src="item2.icon" alt="">
        </div>
        <div class="food-content">
          <p class="food-title">{{item2.name}}</p>
          <p class="food-decription">{{item2.description}}</p>
          <div class="food-decription">   
            <span>月售:{{item2.sellCount}}</span> &nbsp;&nbsp;&nbsp;
            <span>好评率:{{item2.rating}}%</span>
          </div>
          <!-- 商品价格 -->
          <div class="food-price">
            <span class="price">￥ {{item2.price}}</span>
            <span class="old-price">{{item2.oldPrice}}</span>
          </div>
          <!-- 加减food按钮 -->
          <div class="change-goods-number">      
         
            <div class="minus" v-show="getFoodNum(index1+'-'+index2) > 0"  @click="cutfood(index1+'-'+index2)">
              <span>-</span>
            </div>
            <span class="food-count" v-show="getFoodNum(index1+'-'+index2) > 0" v-text="getFoodNum(index1+'-'+index2)"></span>
            <div class="add" @click="addfood(index1+'-'+index2,item2)">
              <span>+</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    </div>

  </div>   
  </div>
</template>

<script>
export default {
  data(){
    return {
      //商品数据
      goods:'',
      currentIndex:0,
    }
  },
  created(){
    this.goods = this.$store.getters.getGoods
  },
  methods:{

    //给每一个item 设置一个id 点击侧边栏传入id
    //点击侧边栏 颜色变化 并用scrollIntoView(true)让每个item滚动到容器顶部
    
     clickItem(id,index){
      this.currentIndex = index

      this.$nextTick(() => {
        document.querySelector('#'+id).scrollIntoView({
            // behavior: "smooth", // 平滑过渡  这里使用有bug
            block: "start" // 上边框与视窗顶部平齐。默认值
          })

      })
    },
    //滚动并给对应锚点添加class  判断卷去的scroll是否大于 各个item的offsetTop (此处的offsetTop跟body对应 因为父元素没有定位)
    onScroll(e){  
      let scrollItems = document.querySelectorAll('.good-item')
      for(let i = 0;i < scrollItems.length;i ++){
        let judg = e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop -100    
        if(judg)
        this.currentIndex = i          
      }
      
    },
    //添加食品到购物车
    addfood(id,item){
      
      let food = this.$store.getters.getProductById(id)
      
      if(!food){
        this.$store.commit('setProductArray',{
         id:id,
         name:item.name,
         price:item.price,
         count:1
        })
        this.$store.commit('CalcTotalMoney')
      }else{
        food.count++
        this.$store.commit('setProductArray',food)
        this.$store.commit('CalcTotalMoney')
      }
     
    }
    ,
    //减少商品
    cutfood(id){
      let food = this.$store.getters.getProductById(id)
      if(food){
        food.count--
        this.$store.commit('setProductArray',food)
        this.$store.commit('CalcTotalMoney')
      }
      
    },
    //获取每个商品预购的数量
     getFoodNum(id){
       let food = this.$store.getters.getProductById(id)     
       if(food) {
         return food.count
       }
       
       return 0    
       }
  },
  mounted(){
    document.body.scrollTop = 1200;
  }

}
</script>

<style lang="less" scoped>

#good {
  height:calc(100vh - 220px);
  overflow-y: scroll;
  flex: 1;
}
.list {   
    width: 25%;    
    word-break: break-all;
    white-space: normal;
    background-color: #fff;
    
  }
  .list-ul .list-item {       
        display: block;
        background-color: #f3f5f7;
        padding: 15px 20px;

        a{        
           font-size: 12px;
           color: rgb(121, 124, 128);
        }
  }

  .list .list-ul .active {
          background-color: #fff;      
         a{
            color: red;
         }
        }

.good-list {
  
  width: 100%;
   display: flex;
  .good-item{

    h3 {
      padding: 10px 0px 10px 18px; 
      color: rgb(147, 153, 159);
      background-color: #f3f5f7;
    }
  }

  .foods-list{
    li {
      display: flex;
      position: relative;
      border-bottom: 1px solid black;
      margin: 0px 18px 18px 18px;
      padding-bottom: 10px;
    }
   .food-icon {
    
      img {
      width: 80px;
      height: 80px;
      
    }
   }
    .food-title {
      font-size: 18px;
      color: rgb(7, 17, 27);
    }
    .food-content {
      
      margin-left: 10px;
      .food-decription{
        margin-top: 8px;
        font-size: 12px;
        color: rgb(147, 153, 159);
      }
      .food-price{
        margin-top: 12px;
        .price {
          color: red;
          margin-top: 8px;
        }
      .old-price {
        font-size: 12px;
        color: rgb(147, 153, 159);
        text-decoration: line-through;
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
    }
  }
}
</style>