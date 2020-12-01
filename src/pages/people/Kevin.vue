<template>
  <q-page class="bg column items-center justify-start">
    <div class="holder q-gutter-y-md q-mr-xl q-pal-md">
      <p>
        To Jenna, Happy Birthday short stuff. Everyday I grow more thankful for the friendship that we have and how
        close we have come to be. Its been a gift to have such an amazing person to call my Best Friend and knowing
        I can just ring ya at anytime and chat about whatever the fuck is going on if its ya big ass forehead or my
        dumbass breaking into Epcot w/e life brings I know I have a friend for the rest of it in you. So on this joyous
        occasion of celebrating ya you getting closer to 30 and joining the boomer world I wish you a happy birfday
        and dont forget you just built differently 🤣
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
export default class Kevin extends Vue {
  timer: NodeJS.Timeout | undefined = undefined;

  confirm() {
    this.$store.commit('example/setPageTrue', 'kevin')
    this.$q.notify('Completed Kevin\'s message!')
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
  background: url('/bg/5.jpg') center center no-repeat;
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
