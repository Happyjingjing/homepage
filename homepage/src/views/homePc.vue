<template>
  <div class='homepc'>
    <topcen :articleList="articleList" />

    <myarticle :articleList="articleList" />
  </div>
</template>

<script>
import topcen from '@/components/homePc/topcen'
import myarticle from '@/components/homePc/article'
import axios from 'axios'
export default {
  components: {
    topcen,
    myarticle
  },
  data () {
    return {
      articleList: []
    }
  },
  created () {
    axios.get('https://www.easy-mock.com/mock/5d4b77e1df3ead4c90c93ce6/homePage/article').then(res => {
      this.articleList = res.data.data;
      // console.log(this.articleList.splice(0, 1));
    })
  },
}
</script>
<style scoped>
</style>