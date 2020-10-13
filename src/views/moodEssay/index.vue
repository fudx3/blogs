<template>
  <div class="l_boxf_l">
    <div class="topnews">
      <h2>心情随笔</h2>
      <div class="mood">
        <span class="tutime">2020-10-12</span>
        <p>出来混早晚要还的</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      data:""
    }
  }
}
</script>
<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
  .l_boxf_l{
    width: 670px;
    .topnews{
      margin: 20px 0;
      .mood{
        width: 570px;
        background: #fafafa;
        border: 1px solid #e0e0e0;
        color: #4d4d4d;
        line-height: 22px;
        padding-top: 21px;
        padding-left: 20px;
        padding-right: 77px;
        padding-bottom: 27px;
        margin-bottom: 10px;
        border-radius: 5px;
        .tutime{
          background: url('../../../public/images/datepng.png') no-repeat left center;
          padding-left: 24px;
          font-size: 14px;
        }
        p{
          // word-break: break-all;
          text-indent: 20px;
          font-size: 14px;
        }
      }
    }
  }
</style>