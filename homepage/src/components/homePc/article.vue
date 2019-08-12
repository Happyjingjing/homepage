<template>
  <div class='article'>
    <div :class="['boxbg', 'clearfix', index%2 == 0 ? '' : 'fafafa']"
         v-for="(item, index) in articleList"
         :key="index">

      <div class="box clearfix">
        <div class="txt-pc">
          <h1 class="h1one">
            <a :href="item.Url"
               target="_blank">{{item.Title}}</a>
          </h1>
          <p>{{item.Contents}}
            <a :href="item.RegionUrl"
               target="_blank">[详细]</a>
          </p>
          <a :href="item.Url"
             target="_blank">
            <img :src="item.HeadPic"></a>
          <a :href="item.Url"
             target="_blank">
            <img :src="item.PilotPic4"
                 class="imgRight"></a>
        </div>
      </div>
    </div>
    <div class="more"
         v-show="nomore">没有更多了</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      scroll: true, //设置一个开关避免重复请求数据
      pagenum: 1, //当前页数
      totalnum: 3, //总页数
      articleList: [], //页面数据数组
      nomore: false
    }
  },
  created () {
    this.getSpecialData();
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getSpecialData () {
      let pageNum = this.pagenum; //当前页数
      let arturl = 'https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/';
      // let arturl = 'https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/article02';
      if (pageNum) {
        arturl = arturl + 'article0' + pageNum
      } //url拼接页数
      // console.log(arturl);
      axios.get(arturl).then(res => {
        console.log(arturl, res.data.data)
        if (this.pagenum === 1) {
          this.articleList = res.data.data.list; // 数据数组
          this.pagenum = res.data.data.pageNum; //当前页数
          this.totalnum = res.data.data.pages; //总页数
        } else {
          this.articleList = [  // 当前数据与第二页数据合并到一个数组中
            ...this.articleList,
            ...res.data.data.list
          ]
          this.scroll = true;
          // console.log(this.articleList)
        }
        ++this.pagenum
      }).catch(err => {
        console.log(err)
      })
    },
    handleScroll () { //滚动事件监听处理
      //是否滚动到底部的判断
      if ((document.documentElement.scrollTop + window.innerHeight) == document.body.offsetHeight & this.scroll) {
        if (this.pagenum > this.totalnum) { //如果大于总页数停止请求数据
          this.nomore = true;
        } else {
          this.getSpecialData();
          this.scroll = false;
          console.log('jiazai')
        }
      }
    }
  },
  // props: {
  //   articleList: {
  //     // type: Array,
  //     default () {
  //       return []
  //     }
  //   }

  // }
}
</script>
<style scoped lang="less">
.more {
  width: 100%;
  font-size: 14px;
  color: #ccc;
  line-height: 100px;
  text-align: center;
  // border-top: 1px solid #ccc;
}
.boxbg {
  &.fafafa {
    background: #fafafa;
  }
  width: 100%;
  height: auto;
  .box {
    width: 1200px;
    margin: 0 auto;
    .h1one {
      margin-top: 120px;
      text-align: center;
      font: 32px/33px \5fae\8f6f\96c5\9ed1;
      color: #000;
      margin-bottom: 16px;
      a {
        text-decoration: none;
        color: #000;
      }
    }
    p {
      width: 920px;
      margin: 0 auto 35px;
      font: 16px/24px \5fae\8f6f\96c5\9ed1;
      color: #666;
      a {
        color: #ff860d;
      }
    }
    img {
      width: 590px;
      height: 380px;
      border: 0 none;
      float: left;
      border-radius: 5px;
      &.imgRight {
        margin-left: 20px;
      }
    }
  }
}
</style>