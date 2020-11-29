<template>
  <q-page class="bg row items-center justify-end">
    <div class="holder q-gutter-y-md q-mr-xl q-pal-md">
      <p>
        Jenna, wow congrats, you are ancient now! How does it feel?
        It is insane how I’ve been able to put up with you for almost the past 4 years.
        I am glad to have met you as I’ve had a bunch of laughs and frustrating moments from you but honestly has been entirely worth it.
        Knowing everything you have gone through over these past few years has been tough for you but seeing you still get back up has been motivating and wonderful to see.
        I know this year with human malware has been a rough one both physically and mentally but next year will be much better and remember, never stop learning or growing.
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
export default class Oscar extends Vue {
  timer: NodeJS.Timeout | undefined = undefined;

  confirm() {
    this.$store.commit('example/setPageTrue', 'oscar')
    this.$q.notify('Completed Oscar\'s message!')
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
  background: url('/bg/3.jpg') center center no-repeat;
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
