<template>
  <div class="toast" v-show="isOpenToast">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isOpenToast: false
      }
    },
    methods: {
      openToast(message = '', time = 2000) {
        this.message = message
        this.isOpenToast = true

        setTimeout(() => {
          this.message = ''
          this.isOpenToast = false
        }, time)

      }
    }
  }
</script>

<style scoped>
 .toast {
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   padding: 10px 12px;

   border-radius: 6px;

   color: #cccccc;
   background-color: rgba(0, 0, 0, .7);

   z-index: 999;
 }

</style>
