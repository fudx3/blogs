<template>
  <div id="app">
    <nav>
      <ul class="nav">
        <li
          v-for="(item,index) in navData"
          :key="index"
          @click="navClick(item,index)"
          class="fs18 li_element"
          :class="{'li--active':index==activeIndex}"
        >{{item}}</li>
      </ul>
    </nav>
    <article class="box_wrap">
      <router-view class="box_c" />
      <div class="box_r">
        <div class="title01">
          <h3>最新文章</h3>
          <ul class="smile_rank">
            <li v-for="(item,index) in newArticleList" :key="index" class="fs12">{{item.name}}</li>
          </ul>
        </div>
        <div class="hotTags">
          <h3>热门标签</h3>
          <ul class="hotTags_ul">
            <li v-for="(item,index) in hotTagsList" :key="index" class="fs12">{{item.name}}</li>
          </ul>
        </div>
        <div class="links">
          <h3>友情链接</h3>
          <ul class="links_ul">
            <li v-for="(item,index) in linksList" :key="index" class="fs12">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navData: [
        "首页",
        "技术博客",
        "个人归档",
        "文章分类",
        "心情笔记",
        "关于我"
      ],
      newArticleList: [
        {
          name: "给王先生的一封信",
          id: "001"
        },
        {
          name: "云上班体验",
          id: "002"
        },
        {
          name: "在疫情期间肆虐，做好防护，不要心存侥幸",
          id: "003"
        },
        {
          name: "凌晨四点的洛杉矶,你再也看不见了",
          id: "004"
        },
        {
          name: "又是一年小高中",
          id: "005"
        }
      ],
      linksList: [
        {
          name: "react官网",
          url: "wwww"
        },
        {
          name: "vue官网",
          url: "wwww"
        },
        {
          name: "node官网",
          url: "www"
        }
      ],
      hotTagsList: [
        {
          name: "node",
          url: "123"
        },
        {
          name: "http协议",
          url: "123"
        },
        {
          name: "css",
          url: "123"
        },
        {
          name: "html",
          url: "123"
        },
        {
          name: "webpack",
          url: "123"
        },
        {
          name: "javascript",
          url: "123"
        },
        {
          name: "工程化",
          url: "123"
        },
        {
          name: "PWA",
          url: "123"
        },
        {
          name: "serviceWorks",
          url: "123"
        },
        {
          name: "微前端",
          url: "123"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    navClick(item, index) {
      this.activeIndex = index;
      switch (item) {
        case "心情笔记":
          this.$router.push("/moodEassay");
          break;
        case '技术博客':
          this.$router.push("/artBlogs");
          break;
        case '关于我':
          this.$router.push("/aboutMe");
          break;
        case '个人归档':
          this.$router.push("/placeOnfile");
          break;
        case "首页":
          this.$router.push("/");
        default:
          break;
      }
      console.log(item);
    }
  }
};
</script>
<style lang="less">
html,
body,
h3,
p,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  cursor: pointer;
}
body {
  background-color: #fffbf0;
}
.fs12 {
  font-size: 12px;
}
.fs14 {
  font-size: 14px;
}
.fs16 {
  font-size: 16px;
}
.fs18 {
  font-size: 18px;
}
.box_wrap {
  width: 1000px;
  margin: 20px auto;
  .box_c {
    width: 670px;
    float: left;
  }
  .box_r {
    float: right;
    width: 300px;
    .hotTags {
      h3 {
        line-height: 40px;
        color: #38485a;
        font-size: 18px;
        border-bottom: 1px solid #e6e6e6;
        height: 40px;
        margin-bottom: 20px;
      }
      .hotTags_ul {
        overflow: hidden;
        padding: 10px;
        li {
          float: left;
          padding: 5px 8px;
        }
      }
    }
    .links {
      h3 {
        line-height: 40px;
        color: #38485a;
        font-size: 18px;
        border-bottom: 1px solid #e6e6e6;
        height: 40px;
        margin-bottom: 20px;
      }
      .links_ul {
        background: #fff;
        padding: 10px;
        overflow: hidden;
        border: #e9e9e9 1px solid;
        li {
          float: left;
          padding: 5px 8px;
        }
      }
    }
    .title01 {
      h3 {
        line-height: 40px;
        color: #38485a;
        font-size: 18px;
        border-bottom: 1px solid #e6e6e6;
        height: 40px;
      }
      .smile_rank {
        margin: 10px 0;
        li {
          height: 25px;
          line-height: 25px;
          clear: both;
          overflow: hidden;
          padding-left: 15px;
          list-style: inside;
        }
      }
    }
  }
}

nav {
  height: 50px;
  background: #bfab86;
  .nav {
    width: 1000px;
    height: 50px;
    line-height: 47px;
    margin: 0 auto;
    background: #bfab86;
    li {
      border-top: 3px solid transparent;
      float: left;
      padding: 0 20px;
      margin: 0 1px;
      color: #fff;
      cursor: pointer;
    }
    & {
      li:hover {
        background: #fffbf0;
        border-top: 3px solid #f77825;
        color: #000;
      }
    }
    li.li--active {
      background: #fffbf0;
      border-top: 3px solid #f77825;
      color: #000;
    }
  }
}
</style>
