<template>

  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eeeeee;
  }

  .recommenditem {
    flex: 1;
  }

  .recommend img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
