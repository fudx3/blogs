<template>
  <div>
    <div class="topnews">
      <h2>
        <b>技术博客</b>
      </h2>
      <div class="blogs">
        <figure>
          <a href="www.baidu.com">
            <img src="../../../public/images/信鸽.jpg" alt />
          </a>
        </figure>
        <ul>
          <h3>给王先生的一封信</h3>
          <p>
            和王先生在一起已经十个年头。
            2010年确立恋爱关系
            2012年开启北漂生涯
            2016年领证结婚，迈入婚姻殿堂
            2018年有了豌豆豆
            2019年辞职在家育儿
            在这十年期间，每个情人...
            <br />
            <a href="www.baidu.com" class="blogs_detail">[详情]</a>
          </p>
          <p class="autor">
            <span class="autor_left">
              <span class="autor_lm1">技术博客</span>
              <span class="autor_lm2">2020-02-14</span>
            </span>
            <span class="autor_right">
              <span class="autor_rm1">21</span>
              <span class="autor_rm2">7.2k</span>
              <span class="autor_rm3">186</span>
            </span>
          </p>
        </ul>
      </div>
      <!-- <my-blogs></my-blogs> -->
      <my-blogs></my-blogs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.topnews {
  h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
    color: #333;
    border-bottom: #db6d4c 4px solid;
  }
}
</style>