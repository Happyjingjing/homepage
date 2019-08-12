<template>
  <div class='color-bg'
       :style="{'background':article.color}">
    <div v-for="(item, index) in articleList"
         v-if="index < 1"
         :key="index">
      <ul class="topcen">
        <li id="liweibo"
            :class="['weibo','sml', article.weibo ? '' : 'hidd']">
          <div>

            <p :style="{'color':article.color}"
               class="wei-pc">我的微博 <em class="weibo-number">{{article.weibo}}</em>
            </p>
          </div>
          <i></i>
        </li>
        <li class="touxiang">
          <img class="weixinimg"
               v-if="weixinimg"
               title=""
               src="https://open.weixin.qq.com/qr/code?username=MXYAaron">
          <img v-else
               class="touxiangimg"
               title=""
               :src="item.AuthorPhoto">

        </li>
        <li id="liweixin"
            :class="['weixin', 'sml', article.weixin ? '' : 'hidd']"
            @mouseover="overli"
            @mouseout="outli">
          <i></i>
          <div>
            <p :style="{'color':article.color}"
               class="wei-pc">我的微信 <em class="weixin-number">{{article.weixin}}</em></p>
          </div>
        </li>
      </ul>
      <div class="arttxt clearfix">
        <h1>{{item.Author}}</h1>
        <p>{{item.AuthorIntroduction}}</p>
        <div class="dy_wrap">
          <img src="http://img1.lotour.net/inspiration/dingyue/dy+w.png"
               class="dy_pic"
               style=" margin-top: -5px; margin-right: 5px;"><i class="dy">订阅</i>
        </div>
        <p class="num">{{article.seenum}}</p>
        <p class="liulan-number">浏览量</p>
      </div>

      <div class="icon">
        <div class="nav">
          <span>文章(<em class="altnumber">10</em>)</span>
          <div class="triangle_border_down"
               style="border-color:#b5495b transparent transparent"></div>
        </div>
        <div class="ia-share-con">
          <a title=""
             href="javascript:void(0)"
             class="toCode">
            <div class="code-con">
              <img src="http://api.lotour.net/brandhome/api/ShowPic?url=http://zhuanlan.lotour.com/1497"
                   width="104"
                   height="104"
                   alt=""><i></i>
            </div>
          </a>

          <a title="分享到新浪微博"
             href="javascript: eval(sns_share_show('wb_tinfo_1', '如果不出去走走，你会以为这就是世界！T行走在梦想路上的专栏主页，为旅游而生！T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想@乐途旅游网官方微博', '', 'http://zhuanlan.lotour.com/1497/', '','1497')); void 0;"
             class="toSina"></a>
          <a title="分享到QQ"
             href="javascript: eval(sns_share_show('qq_tinfo_1', 'T行走在梦想路上的专栏主页，为旅游而生！T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想', '', 'http://zhuanlan.lotour.com/1497/', '','1497')); void 0;"
             class="toDouban"></a>
          <a title="分享到QQ空间"
             href="javascript: eval(sns_share_show('qz_tinfo_1', 'T行走在梦想路上的专栏主页，为旅游而生！T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想路上T行走在梦想@乐途旅游网', '', 'http://zhuanlan.lotour.com/1497/', '','1497')); void 0;"
             class="toQzone"></a>
          <a title="复制网址"
             href="javascript:;"
             class="toTqq"
             onclick="getUrl()"></a><input class="wangzhi"
                 value="">
        </div>
      </div>
      <div class="wangzhiTan">
        复制成功，去粘贴吧
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    articleList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      weixinimg: false,
      article: {
        color: '#b5495b',
        weibo: '',
        weixin: '幻羽惊鸿z',
        seenum: '4095'
      }
    }
  },

  methods: {
    overli () {
      this.weixinimg = true
    },
    outli () {
      this.weixinimg = false
    }
  }
}
</script>
<style scoped lang="less">
.color-bg {
  width: 100%;
  height: auto;
  background: #ec5e50;
  .topcen {
    width: 465px;
    height: auto;
    margin: 0 auto;
    padding-top: 120px;
    margin-bottom: 20px;
    overflow: hidden;
    li {
      float: left;
      &.hidd {
        visibility: hidden;
      }
      &.sml {
        width: 123px;
        height: 98px;
        margin-top: 50px;
        div {
          float: left;
          width: 98px;
          height: 98px;
          border-radius: 100%;
          background: #fff;
          opacity: 0.2;
          p {
            height: auto;
            margin: 27px 0;
            font: 14px/20px \5fae\8f6f\96c5\9ed1;
            color: #ec5e50;
            text-align: center;
            em {
              display: inline-block;
              width: 80px;
              max-height: 26px;
              font: 12px/13px \5fae\8f6f\96c5\9ed1;
              text-align: center;
              margin-top: 2px;
              overflow: hidden;
              word-wrap: break-word;
              word-break: normal;
            }
          }
        }
        i {
          float: left;
          width: 25px;
          height: 1px;
          margin-top: 49px;
          background: url(http://img1.lotour.com/writer2/writer-article/heng.png)
            no-repeat center;
          background-size: cover;
        }
      }
      &.touxiang {
        position: relative;
        width: 213px;
        height: 213px;
        border-radius: 100%;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        background: #fff;
        overflow: visible;
        .touxiangimg {
          width: 196px;
          height: 196px;
          margin: 5px;
          border: 3px solid #fff;
          border-radius: 100%;
        }
        .weixinimg {
          width: 142px;
          height: 142px;
          margin: 37px;
        }
      }
    }
  }
  .arttxt {
    width: 100%;
    margin-top: 0;
    overflow: hidden;
    h1 {
      clear: both;
      color: #fff;
      font: 28px/30px \5fae\8f6f\96c5\9ed1;
      text-align: center;
      margin-bottom: 7px;
    }
    p {
      width: 430px;
      max-height: 70px;
      margin: 0 auto;
      color: #fff;
      font: 14px/18px \5fae\8f6f\96c5\9ed1;
      text-align: center;
      overflow: hidden;
    }
    .dy_wrap {
      width: 75px;
      height: 26px;
      line-height: 26px;
      color: #fff;
      margin: 0 auto;
      border: 1px solid #fff;
      border-radius: 5px;
      text-align: center;
      margin-top: 30px;
      cursor: pointer;
      img {
        margin: -5px 5px 0 0;
      }
      .dy {
        font: 10px/26px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
        font-style: normal;
      }
    }

    p {
      width: 430px;
      max-height: 70px;
      margin: 0 auto;
      color: #fff;
      font: 14px/18px \5fae\8f6f\96c5\9ed1;
      text-align: center;
      overflow: hidden;
      &.num {
        margin-top: 60px;
        font: 20px/20px \5fae\8f6f\96c5\9ed1;
      }
      &.liulan-number {
        line-height: 30px;
      }
    }
  }
  .icon {
    width: 1200px;
    margin: 80px auto 0;
    height: 60px;
    margin-top: 0;
    .nav {
      position: relative;
      width: auto;
      height: auto;
      float: left;
      span {
        display: block;
        float: left;
        margin-top: 5px;
        color: #fff;
        font: 20px/40px \5fae\8f6f\96c5\9ed1;
        margin-right: 36px;
      }
      .triangle_border_down {
        width: 0;
        height: 0;
        border-width: 15px 15px 0;
        border-style: solid;
        border-color: #ec5e50 transparent transparent;
        position: absolute;
        left: 15px;
        bottom: -30px;
      }
    }

    .ia-share-con {
      float: right;
      position: relative;
      text-align: center;
      a {
        display: inline-block;
        width: 44px;
        height: 45px;
        margin: 0 3px 0 0;
        background: url(http://img1.lotour.com/writer2/writer-article/writer-share2.png)
          no-repeat 0 0;
        transition: all 0.3s ease-in-out 0.1s;
        .code-con {
          display: none;
          position: absolute;
          left: -55px;
          top: -150px;
          width: 140px;
          height: 140px;
          background: #fff;
          border-radius: 10px;
          img {
            position: relative;
            width: 104px;
            height: 104px;
            margin: 18px;
          }
        }
        &.toCode {
          background-position: 0 0;
        }
        &.toCode:hover {
          background-position: 0 -45px;
          .code-con {
            display: block;
          }
        }
        &.toSina {
          background-position: -54px 0;
        }
        &.toSina:hover {
          background-position: -54px -45px;
        }
        &.toDouban {
          background-position: -109px 0;
        }
        &.toDouban:hover {
          background-position: -109px -45px;
        }
        &.toQzone {
          background-position: -162px 0;
        }
        &.toQzone:hover {
          background-position: -162px -45px;
        }
        &.toTqq {
          background-position: -217px 0;
          margin-right: 0;
        }
        &.toTqq:hover {
          background-position: -217px -45px;
        }
      }
      .wangzhi {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
      }
    }
  }
  .wangzhiTan {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 208px;
    height: 94px;
    background: url(http://img1.lotour.net/xingqunew/fuzhiTan.png) no-repeat;
    background-size: 100% 100%;
    margin-left: -104px;
    margin-top: -47px;
    display: none;
    color: #fff;
    font-size: 14px;
    line-height: 145px;
    text-align: center;
    z-index: 99999;
  }
}
</style>