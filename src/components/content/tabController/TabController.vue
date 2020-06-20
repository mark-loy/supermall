<template>
  <div class="tabController">
    <div v-for="(item, index) in title"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabController",
    props: {
      title: Array,
      default() {
        return []
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tabController {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #ffffff;
    z-index: 2;
  }

  .tabController div {
    flex: 1;
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
