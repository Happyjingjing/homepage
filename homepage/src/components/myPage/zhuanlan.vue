<template>
  <div class="bj-item clearfix">
    <label><span style="color: red">*</span>专栏头图:</label>
    <div class="item-r">
      <div class="toubg"
           ref="toubg"
           :style="{'background-color':zhuanlan.colorp}">

        <ul class="topcen clearfix">
          <li class="weiboq sml">
            <div>
              <p class="wei-pc"
                 ref="colorp1"
                 :style="{'color':zhuanlan.colorp}">
                我的微博
                <em id="emweibo"
                    class="weibo-number"></em>
              </p>
            </div>
            <i></i>
          </li>
          <li class="touxiang">
            <img id="img222"
                 width="200"
                 height="200"
                 class="touxiangimg"
                 title=""
                 src="http://img1.lotour.net/mudidiplay/2016/0330/2016033013315115267.jpg          "></li>
          <li class="weixinq sml"><i></i>
            <div>
              <p class="wei-pc"
                 ref="colorp2"
                 :style="{'color':zhuanlan.colorp}">
                我的微信
                <em id="emweixin"
                    class="weixin-number">MXYAaron</em>
              </p>
            </div>
          </li>

        </ul>
      </div>

      <ul class="bgbtu clearfix">
        <li v-for="(item, index) in zhuanlan.tabList"
            :key="index"
            :class="[item.isChoose, item.tclass, {on:index == zhuanlan.current}]"
            @click="addon(index)">
          <p>{{item.ttext}}<i></i></p>
        </li>

      </ul>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    zhuanlan: {
      type: Object,
      deafalt () {
        return {}
      }
    }


  },
  data () {
    return {

    }
  },
  methods: {
    addon (index) {
      this.zhuanlan.current = index;
      this.zhuanlan.colorp = this.zhuanlan.tabList[index].background;
      // this.$refs.toubg.style.backgroundColor = this.tabList[index].background;
      // this.$refs.colorp1.style.color = this.tabList[index].background;
      // this.$refs.colorp2.style.color = this.tabList[index].background;
    },

  },
}
</script>
<style lang="less">
.toubg {
  width: 860px;
  height: 260px;
  background: #ec5e50;
  overflow: hidden;
  .topcen {
    margin: 56px auto 0;
    width: 209px;
    height: auto;
    li {
      float: left;
      &.sml {
        width: 54px;
        height: 45px;
        margin-top: 27px;
        div {
          float: left;
          width: 45px;
          height: 45px;
          border-radius: 100%;
          -moz-border-radius: 100%;
          -webkit-border-radius: 100%;
          background: #fff;
          opacity: 0.2;
          p {
            width: 60px;
            height: 24px;
            overflow: hidden;
            text-align: center;
            margin: 10px -7px;
            text-align: center;
            line-height: 12px;
            font-size: 6px;
            -webkit-transform: scale(0.6);
            color: #ec5e50;
            em {
              display: inline-block;
              width: 35px;
              height: 12px;
              overflow: hidden;
            }
          }
        }
        i {
          float: left;
          width: 9px;
          height: 1px;
          margin-top: 22.5px;
          background: url(http://img1.lotour.net/writer2/writer-article/heng.png)
            no-repeat center;
          background-size: cover;
        }
      }
      &.touxiang {
        width: 98px;
        height: 98px;
        border-radius: 100%;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        background: #fff;
        overflow: hidden;
        .touxiangimg {
          width: 94px;
          height: 94px;
          border: 2px solid #fff;
          border-radius: 100%;
          -moz-border-radius: 100%;
          -webkit-border-radius: 100%;
        }
      }
    }
  }
}
.bgbtu {
  width: 860px;
  height: auto;
  li {
    width: 20px;
    height: 20px;
    float: left;
    margin: 10px 10px 60px 0;
    p {
      display: none;
      margin-top: 30px;
      margin-left: -12px;
      width: 45px;
      height: 22px;
      text-align: center;
      color: #999;
      font: 12px/20px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 6px #c8c8c8;
      i {
        margin-top: -27px;
        margin-left: 17px;
        display: block;
        width: 8px;
        height: 7px;
        background: url(http://img1.lotour.net/writer/liho.png) no-repeat center;
      }
    }
    &.red {
      background-color: #ec5e50;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(250, 136, 125);
        p {
          display: block;
        }
      }
    }
    &.green {
      background-color: #31b399;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(44, 444, 186);
        p {
          display: block;
        }
      }
    }
    &.blue {
      background-color: #0b91b6;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(3, 172, 218);
        p {
          display: block;
        }
      }
    }
    &.pink {
      background-color: #b5495b;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(221, 89, 111);
        p {
          display: block;
        }
      }
    }
    &.pup {
      background-color: #363557;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(122, 120, 194);
        p {
          display: block;
        }
      }
    }
    &.black {
      background-color: #434343;
      border: 2px solid #fff;
      &:hover {
        border-color: rgb(141, 141, 141);
        p {
          display: block;
        }
      }
    }
    &.on {
      background-image: url(http://img1.lotour.net/writer/dui.png);
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
}
</style>