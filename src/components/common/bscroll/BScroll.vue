<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BScroll",
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      scrollTo(x, y,time=500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      scrollUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scroll_Y() {
        return this.scroll ? this.scroll.y : 0
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,  //3：全过程监听位置信息  2：只在滑动过程中监听位置信息
        click: true,
        pullUpLoad: this.pullUpLoad,//true开启下拉加载
      })
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>

</style>
