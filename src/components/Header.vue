<template>
  <div class="Header">
    <div class="wrapper">
      <div class="avatar">
        <img :src="sellerData.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          {{sellerData.name}}
        </div>
        <div class="description">
          <span>{{sellerData.description}}/{{sellerData.deliveryTime}}分钟送达</span>
        </div>
        <div class="support">
         <span style="fontsize : 13px" v-text="sellerData.supports[0].description"></span>
        </div>
      </div>
      <div class="seller-count">
        <span v-text="sellerData.supports.length+'个'"></span>
      </div>
    </div>

    <div class="bulletin-wrapper">
        <span class="bullet-title"></span>
        <span class="bullet-text" v-text="sellerData.bulletin"></span>
        <span></span>
    </div>

    <div class="background">
        <img :src="sellerData.avatar" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    sellerData:{
      type:Object,
    }
  },
  created(){
    console.log(this.sellerData);
  }
  
}
</script>

<style lang="less" scoped>
  .Header {
    position: relative;
  }
  .wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    padding: 24px 12px 16px 24px;
    .content {
      margin-left: 20px;
    }
  
    .avatar img {
      width: 64px;
      height: 64px;
    }
    .title {
      font-size: 18px;
      margin-top: 2px;
    }
    .description {
      font-size: 14px;
      margin-top: 8px;
    }
    .support {
      font-size: 12px;
      margin-top: 8px;
    }
  }
  .seller-count {
    position: absolute;
    bottom: 12px;
    right: 61px;
    padding: 7px 8px;
    line-height: 15px;
    height: 15px;
    font-size: 15px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.2);
    color: rgb(255, 255, 255);
    font-weight: 200;
  }

  .bulletin-wrapper {
      height: 28px;
      line-height: 28px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      padding: 0 10px 0 5px;
      background-color: rgba(7, 17, 27, 0.2);
      color: rgb(255, 255, 255);
  }
  .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
    -webkit-filter: blur(10px);
    img {
      width: 100%;
      height: 100%;
    }
    
  }
</style>