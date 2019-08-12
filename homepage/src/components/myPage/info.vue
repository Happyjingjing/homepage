<template>
  <div class='bj-main'>
    <h1 class="set-info">信息设置</h1>
    <h2 class="bj-tit"><a class="on"
         href="javascript:void(0)"
         title="">个人信息</a>
      <!-- <a href="/Mind/CardInfo"
         title="">银行卡信息</a> -->
    </h2>
    <div class="bj-item clearfix">
      <label><span>*</span>头像:</label>
      <div class="item-r clearfix">
        <div class="touxkuang"
             v-if="!modetxt.imageUrl"></div>
        <img v-else
             id="headSculpture"
             class="bj-tx"
             :src="modetxt.imageUrl"
             width="120"
             height="120"
             alt="">
        <div class="eo_pic">
          <div class="btn_photo">
            <span>添加照片</span>
            <input type="file"
                   @change="selectImgs($event)"
                   ref="file">
          </div>
        </div>
        <!-- <el-upload class="avatar-uploader"
                   action="https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/photoposts"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload">
          <img v-if="modetxt.imageUrl"
               :src="modetxt.imageUrl"
               class="avatar">
          <i v-else
             class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload> -->
        <!-- <p class="tp_zs">请上传大于310*310，大小100k以内的图片</p> -->
      </div>
    </div>

    <div class="bj-item clearfix">
      <label><span>*</span>昵称:</label>
      <div class="item-r">
        <el-input class="bj_name"
                  v-model="modetxt.username"
                  placeholder="请输入您的昵称，不超过8字"
                  :maxlength="8">
        </el-input>
      </div>
    </div>
    <div class="city-ts">
      <p>准确填写常住城市，获得该城市信息推送～</p>
    </div>
    <div class="bj-item clearfix">
      <label><span>*</span>常住城市:</label>
      <div class="item-r">
        <div class="inp-div">
          <el-select v-model="modetxt.sel01"
                     placeholder="请选择"
                     @change="changezhou($event)">
            <el-option v-for="(item, index) in optionszhou"
                       :key="index"
                       :label="item.BriefName"
                       :value="item.Id">
            </el-option>
          </el-select>

        </div>
        <div class="inp-div">
          <el-select v-model="modetxt.sel02"
                     placeholder="请选择"
                     @change="changeprovince($event)"
                     ref="province">
            <el-option v-for="(item, index) in optionsProvince"
                       :key="index"
                       :label="item.BriefName"
                       :value="item.Id">
            </el-option>
          </el-select>
        </div>
        <div class="inp-div">
          <el-select v-model="modetxt.sel03"
                     placeholder="请选择"
                     ref="city03">
            <el-option v-for="(item, index) in optionsCity"
                       :key="index"
                       :label="item.BriefName"
                       :value="item.Id">
            </el-option>
          </el-select>

        </div>
      </div>
    </div>
    <div class="bj-item clearfix">
      <label>稿费:</label>
      <div class="item-r">
        <div class="inp-div moneyinp">
          <el-input type="text"
                    placeholder="请输入您的稿费"
                    v-model="modetxt.money"
                    maxlength="5"
                    show-word-limit>
          </el-input>
        </div>
        <div class="inp-div inp-div5">
          <div class="floor_1"><span>元 / 篇</span></div>
          <div class="floor_2"
               @mouseover="payshow"
               @mouseleave="payhide"><img src="http://img1.lotour.net/zhuanlan/ruanwen/btn_3.jpg"
                 alt=""></div>
          <div class="pay"
               v-show="ispay">
            <p>稿费设置成功后，我们将把您推荐给想要约稿的机构，他们会通过您留下的手机号联系您～</p>
          </div>
        </div>
      </div>
    </div>

    <m-input :inputList="inputList" />

    <div class="bj-item clearfix">
      <label>
        <span style="color: red">*</span>
        个人简介:
      </label>
      <div class="item-r">
        <div class="inp_area">
          <el-input type="textarea"
                    :rows="5"
                    placeholder="请输入内容"
                    v-model="modetxt.textarea">
          </el-input>
        </div>

      </div>
    </div>

    <zhuan-lan :zhuanlan="zhuanlan" />

    <div class="bj-item clearfix">
      <div class="item-r last-item-r">
        <input id="btnSave"
               class="inp-bc"
               name=""
               type="button"
               value="保存"
               @click="saveinfo">
      </div>
    </div>

  </div>
</template>

<script>
import mInput from './input'
import zhuanLan from './zhuanlan'
import api from '@/api/mypage'

import axios from 'axios'

export default {

  components: {
    mInput,
    zhuanLan
  },
  data () {
    return {
      modetxt: {
        imageUrl: '',
        // usertx: '',
        username: '',
        sel01: '',
        sel02: '',
        sel03: '',
        money: '',
        telephone: '',
        weixingong: '',
        weixin: '',
        weibo: '',
        textarea: '',
        selecolor: '',
      },
      ispay: false,
      model4: '',
      textarea: '',
      inputList: [{
        class: 'telephone',
        label: '手机号码:',
        placeholder: '请输入您的手机号码',
        maxlength: '11',
      }, {
        class: 'weixin',
        label: '微信公众号:',
        placeholder: '请输入您的公众号（选填）',
        maxlength: '20',
      }, {
        class: 'weixin',
        label: '个人微信:',
        placeholder: '请输入您的微信号（选填）',
        maxlength: '20',
      }, {
        class: 'weibo',
        label: '新浪微博:',
        placeholder: '请输入您的个人微博（选填）',
        maxlength: '30',
      }],
      optionszhou: [],
      optionsProvince: [],
      optionsCity: [],
      zhuanlan: {
        colorp: '#ec5e50',
        current: 0,
        tabList: [{
          tclass: 'red',
          ttext: '活力橙',
          background: '#ec5e50',
        }, {
          tclass: 'green',
          ttext: '清新绿',
          background: '#31b399',
        }, {
          tclass: 'blue',
          ttext: '明朗蓝',
          background: '#0b91b6',
        }, {
          tclass: 'pink',
          ttext: '忧郁粉',
          background: '#b5495b',
        }, {
          tclass: 'pup',
          ttext: '文艺紫',
          background: '#363557',
        }, {
          tclass: 'black',
          ttext: '高级灰',
          background: '#434343',
        }]
      }
    }
  },
  created () {
    api.getcountry().then(res => {
      this.optionszhou = res.data.data;
      // console.log(res.data.data)
    })
    api.getProvince().then(res => {
      this.optionsProvince = res.data.data;
    })
  },
  methods: {
    selectImgs (e) {
      let file = e.target.files[0];
      if (file) {
        this.file = file;
        let reader = new FileReader();
        let that = this;
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          // console.log(this.result)
          that.modetxt.imageUrl = this.result
        }
      }

    },

    // handleAvatarSuccess (res, file) {
    //   this.modetxt.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === 'image/jpeg';
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!');
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!');
    //   }
    //   return isJPG && isLt2M;
    // },

    changeprovince (event) {
      this.modetxt.sel03 = '';
      if (event == '2') {
        api.getHeilongjiang().then(res => {
          this.optionsCity = res.data.data;
        })
      } else if (event == '13') {
        api.getBeiJing().then(res => {
          this.optionsCity = res.data.data;
          // console.log(res.data.data)
        })
      } else if (event == '295') {
        api.getBaLin().then(res => {
          this.optionsCity = res.data.data;
        })
      }

      // console.log(this.$refs.city03.label);
    },
    changezhou (event) {
      this.modetxt.sel02 = '';
      this.modetxt.sel03 = '';
      if (event == '1') {
        api.getProvince().then(res => {
          this.optionsProvince = res.data.data;
        })
      } else if (event == '290') {
        api.getyazhou().then(res => {
          this.optionsProvince = res.data.data;
          // console.log(res.data.data)
        })
      } else if (event == '500') {
        api.getouzhou().then(res => {
          this.optionsProvince = res.data.data;
          // console.log(res.data.data)
        })
      }

      // if (this.$refs.province.label == null) {
      //   this.$refs.province.label = '请选择'
      //   console.log(this.$refs.province.label);
      // }

    },
    payshow () {
      this.ispay = true
    },
    payhide () {
      this.ispay = false
    },
    saveinfo () {
      if (this.modetxt.username == '' || this.modetxt.sel01 == '' || this.modetxt.textarea == '') {
        alert('请补充完整信息');
        return false
      }
      this.modetxt.telephone = this.inputList[0].model;
      this.modetxt.weixingong = this.inputList[1].model;
      this.modetxt.weixin = this.inputList[2].model;
      this.modetxt.weibo = this.inputList[3].model;
      this.modetxt.selecolor = this.zhuanlan.current;

      // console.log(this.modetxt);
      axios.post('https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/userinfo').then(res => {

        res.data.data = this.modetxt
        console.log(res.data.data);
      })

    }
  },
}
</script>
<style lang="less">
.touxkuang {
  width: 120px;
  height: 120px;
  border: 1px dashed #ccc;
  float: left;
  border-radius: 100%;
  margin-right: 40px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px !important;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
input {
  outline: none;
}
.bj-main {
  width: 980px;
  height: auto;
  margin: 0 auto;
  .set-info {
    color: #666;
    font-size: 36px;
    font-weight: normal;
    text-align: center;
    margin-top: 40px;
    // margin-bottom: -50px;
  }
  .bj-tit {
    font: normal 16px/36px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
    color: #666;
    padding: 90px 0 0 0;
    border-bottom: 2px solid #666;
    margin-bottom: 20px;
    a {
      position: relative;
      display: inline-block;
      height: 36px;
      margin-bottom: -2px;
      margin-right: 20px;
      padding: 0 5px;
      border-bottom: 2px solid #666;
      color: #666;
      box-sizing: content-box;
      &.on {
        border-color: #ff9900;
        cursor: default;
      }
    }
  }
  .bj-item {
    width: 980px;
    height: auto;
    margin-bottom: 20px;
    label {
      float: left;
      width: 110px;
      height: 35px;
      float: left;
      text-align: right;
      font: normal 16px/35px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
      color: #333;
      margin-top: 15px;
      span {
        color: red;
      }
    }
    .item-r {
      float: left;
      margin: 10px 0 0px 10px;
      display: inline-block;
      width: 860px;
      .bj-tx {
        width: 120px;
        height: 120px;
        float: left;
        border-radius: 100%;
        margin-right: 40px;
      }
      .eo_pic {
        float: left;
        padding-top: 45px;
        .btn_photo {
          position: relative;
          display: inline-block;
          width: 125px;
          height: 30px;
          border: 1px solid #ff860d;
          font: 18px/25px \5fae\8f6f\96c5\9ed1;
          border-radius: 4px;
          cursor: pointer;
          span {
            color: #ff860d;
            text-align: center;
            width: 100%;
            height: 100%;
            display: inline-block;
            line-height: 28px;
          }
          input {
            opacity: 0;
            z-index: 1;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
          }
        }
      }
      .tp_zs {
        float: left;
        margin-left: 15px;
        font: normal 12px/22px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
        color: #666;
        display: inline-block;
        margin-top: 50px;
      }
      .bj_name {
        width: 298px;
        height: 46px;
        // border: 1px solid #c1c1c1;
        font: normal 16px/46px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
        color: #333;
        // text-indent: 10px;
      }
      .inp-div {
        width: 120px;
        position: relative;
        float: left;
        margin-right: 10px;
        margin-top: 5px;
      }
      .moneyinp {
        width: 200px;
      }
      .telephone {
        width: 285px;
      }
      .weixin {
        width: 400px;
      }
      .weibo {
        width: 550px;
      }
      .inp-div5 {
        padding-left: 12px;
        width: 600px;
        height: 38px;
        position: relative;
        text-align: center;
        .floor_1 {
          float: left;
          margin-right: 5px;
          span {
            font: normal 16px/35px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
            color: #333;
          }
        }
        .floor_2 {
          float: left;
          margin-right: 5px;
          margin-top: 6px;
          cursor: pointer;
        }
        .pay {
          float: left;
          margin-right: 5px;
          margin-top: 6px;
          p {
            width: 100%;
            height: 100%;
            line-height: 24px;
            text-align: center;
            font-size: 12px;
            color: #999;
            border-radius: 5px;
            background-color: #ffc;
          }
        }
      }
      .inp_area {
        width: 620px;
      }
    }
    .last-item-r {
      margin-left: 120px;
      .inp-bc {
        width: 140px;
        height: 45px;
        float: left;
        text-align: center;
        font: normal 18px/45px \5fae\8f6f\96c5\9ed1, "Microsoft YaHei";
        color: #fff;
        border: none;
        background: #ff860d;
        border-radius: 4px;
        margin-top: 45px;
        cursor: pointer;
        margin-top: 0;
      }
    }
  }
  .city-ts {
    margin-left: 30px;
    width: 247px;
    height: 24px;
    p {
      width: 100%;
      height: 100%;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: #999;
      border-radius: 5px;
      background-color: #ffc;
    }
  }
}
</style>