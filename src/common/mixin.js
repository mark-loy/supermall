export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300) //回到给定的坐标0，0 用时500ms
    },
    backTopPosition(position) {
      //是否显示返回顶部图标
      this.isShow = (-position.y) > 1000
    }
  }
}
