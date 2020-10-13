<template>
  <div>
    <div class="blogs" v-for="(item,index) in obj.dataList" :key="index">
      <figure>
        <a :href="item.aObj.url">
          <img :src="item.aObj.img" alt />
        </a>
      </figure>
      <ul>
        <h3>{{item.aObj.artObj}}</h3>
        <p>
          {{item.artObj.content}}
          <br />
          <a :href="item.artObj.detailUrl" class="blogs_detail">[详情]</a>
        </p>
        <p class="autor">
          <span class="autor_left">
            <span class="autor_lm1">{{item.autorObj.type}}</span>
            <span class="autor_lm2">{{item.autorObj.time}}</span>
          </span>
          <span class="autor_right">
            <span class="autor_rm1">{{item.autorObj.comment}}</span>
            <span class="autor_rm2">{{item.autorObj.see}}</span>
            <span class="autor_rm3">{{item.autorObj.raiseHands}}</span>
          </span>
        </p>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      required: false,
      default: {
        dataList: [
          {
            aObj: {
              url: "123",
              img: require('../../public/images/信鸽.jpg')
            },
            artObj: {
              title: "给王先生的一封信",
              content: ` 和王先生在一起已经十个年头。
              2010年确立恋爱关系
              2012年开启北漂生涯
              2016年领证结婚，迈入婚姻殿堂
              2018年有了豌豆豆
              2019年辞职在家育儿
              在这十年期间，每个情人...`,
              detailUrl: "123"
            },
            autorObj: {
              type: "技术博客",
              time: "2020-02-14",
              comment: 21,
              see: "7.2k",
              raiseHands: "186"
            }
          }
        ]
      }
    }
  },
  data() {
    return {
      // obj: {
      //   // type: Object,
      //   // required: false,
      //   // default: {
      //     dataList: [
      //       {
      //         aObj: {
      //           url: "123",
      //           img: require('../../public/images/信鸽.jpg')
      //         },
      //         artObj: {
      //           title: "给王先生的一封信",
      //           content: ` 和王先生在一起已经十个年头。
      //         2010年确立恋爱关系
      //         2012年开启北漂生涯
      //         2016年领证结婚，迈入婚姻殿堂
      //         2018年有了豌豆豆
      //         2019年辞职在家育儿
      //         在这十年期间，每个情人...`,
      //           detailUrl: "123"
      //         },
      //         autorObj: {
      //           type: "技术博客",
      //           time: "2020-02-14",
      //           comment: 21,
      //           see: "7.2k",
      //           raiseHands: "186"
      //         }
      //       }
      //     ]
      //   // }
      // }
    };
  }
};
</script>
<style lang="less">
.blogs {
  overflow: hidden;
  cursor: pointer;
  figure {
    float: left;
    width: 25%;
    margin: 0;
    a {
      img {
        width: 167.5px;
        height: 137px;
        display: block;
      }
    }
  }
  > ul {
    float: right;
    line-height: 22px;
    width: 72%;
    color: #777;
    h3 {
      font-size: 16px;
      font-weight: bold;
      transition: all 0.5s;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      .blogs_detail {
        color: #759b08;
        padding-left: 5px;
      }
    }
    .autor {
      overflow: hidden;
      clear: both;
      margin: 10px 0;
      display: inline-block;
      color: #999;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .autor_left {
        span {
          margin: 0 10px 0 0;
          padding-left: 20px;
        }
        .autor_lm1 {
          background: url("../../public/images/icon.png") no-repeat center;
          background-position: 0px 2px;
        }
        .autor_lm2 {
          background: url("../../public/images/icon.png") no-repeat center;
          background-position: 0px -48px;
        }
      }
      .autor_right {
        span {
          margin: 0 10px 0 0;
          padding-left: 20px;
        }
        .autor_rm1 {
          background: url(../../public/images/icon.png) no-repeat center;
          background-position: 0px -23px;
        }
        .autor_rm2 {
          background: url(../../public/images/icon.png) no-repeat center;
          background-position: 0px -73px;
        }
        .autor_rm3 {
          background: url("../../public/images/list_icon.png") no-repeat -47px -297px;
        }
      }
    }
  }
}
</style>