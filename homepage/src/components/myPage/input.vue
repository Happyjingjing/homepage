<template>
  <div class="bj-box">
    <div class="bj-item clearfix"
         v-for="(item, index) in inputList"
         :key="index">
      <label>{{item.label}}</label>
      <div class="item-r">
        <div :class="['inp-div', item.class]">
          <el-input type="text"
                    :placeholder="item.placeholder"
                    v-model="item.model"
                    :maxlength="item.maxlength"
                    show-word-limit>
          </el-input>
        </div>
      </div>
    </div>
    <!-- <p @click="clip">我是点击p</p> -->
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    inputList: {
      type: Array,
      default () {
        return []
      }
    },
  },


}
</script>
<style scoped>
</style>