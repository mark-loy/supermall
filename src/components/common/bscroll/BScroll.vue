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
      imageLoad() {
        this.scroll && this.scroll.refresh()
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      })
      this.scroll.on('scroll', position => {
        this.$emit('isShowBackTop', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style scoped>

</style>
