<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    // message: {
    //   type: String,
    //   default: 'hhhhhh'
    // },
    // isShow: {
    //   type: Boolean,
    //   default: false
    // }
  },
  methods: {
    show(message="默认文字", duration=1000) {
    //  duration = duration || 2000
      this.message = message;
      this.isShow =  true;

      setTimeout(() => {
         this.message = '';
         this.isShow = false
      },duration)
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

  z-index: 999;

  border-radius: 6px;
  padding: 8px 12px;

  font-size: 15px;
  color: #fff;
  background-color: rgba(0, 0, 0, .7);
}

</style>