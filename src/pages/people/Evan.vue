<template>
  <q-page class="bg row items-center justify-center">
    <div class="holder q-gutter-y-md q-mr-xl q-pal-md">
      <p>
        Happy birthday Jenna, hope you have an amazing day!!!
        Thanks for always being there when I need to talk, and for never failing to make me laugh.
        I really value you as a friend, getting you know you better has been one of the absolute highlights of 2020.
        Forever the best duo partner, always carrying me 😊
        Happy birthday again!!!!
      </p>
      <div class="q-pa-md text-center">
        <q-btn @click="confirm" class="glossy" rounded style="background: #f7b2b7; color: white" label="CLICK HERE AFTER READING" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {  }
})
export default class Evan extends Vue {
  timer: NodeJS.Timeout | undefined = undefined;

  confirm() {
    this.$store.commit('example/setPageTrue', 'evan')
    this.$q.notify('Completed Evan\'s message!')
  }

  mounted() {
    this.$q.loading.show()

    // hiding in 2s
    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 1000)
  }

  beforeDestroy () {
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  position: relative;
  z-index: 1;
}
.bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .7;
  z-index: -1;
  background: url('/bg/1.jpg') center center no-repeat;
  background-size:cover;
}

.holder {
  max-width:500px;
  background-color: rgba(255, 255, 255, .7);
  padding:10px;
  border-radius:15px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
}
</style>
