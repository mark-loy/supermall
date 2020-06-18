<template>
  <div class="tab-bar-item" @click="tabbarClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        //isActive: true,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      isActiveColor() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      tabbarClick() {
        this.$router.push(this.path)
      }
    },

  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item div {
    font-size: 15px;
  }
  .tab-bar-item img {
    width: 23px;
    height: 23px;
    vertical-align: middle;
    margin-top: 3px;
  }

</style>
