<template>
  <q-page class="row items-center justify-evenly bg">
    <div v-if="new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')" class="holder text-center">
      <h2>
        Hey Jenna!
      </h2>
      <p>
        'Tis the season to be happy, it's your cake day! 🎂
      </p>
      <p>
        We figured it'd be nice to give you a <i>piece of our mind</i>.<br>
        Make sure you don't miss anything! Read through all of our messages and make sure all of the icons in the sidebar are filled in. <br>
        Click the menu icon <q-icon name="menu"/> in the top left of this page to start!
      </p>

      <q-linear-progress class="progress" stripe size="20px" :value="progress / 100">
        <div class="absolute-full flex flex-center">
          <q-badge color="white" text-color="accent" :label="progress + '%'" />
        </div>
      </q-linear-progress>
    </div>
    <div v-else class="holder text-center">
      <flip-countdown deadline="2020-12-10 00:00:00"></flip-countdown>
    </div>
  </q-page>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import FlipCountdown from 'vue2-flip-countdown';

@Component({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  components: {FlipCountdown}
})
export default class PageIndex extends Vue {
  timer: NodeJS.Timeout | undefined = undefined;

  get progress(): number {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const totalStatus: {
      totalPages: number,
      donePages: number,
      donePercentage: number,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    } = this.$store.getters['example/getTotalStatus'];
    return totalStatus.donePercentage;
  }

  mounted() {
    this.$q.loading.show()

    // hiding in 2s
    this.timer = setTimeout(() => {
      this.$q.loading.hide()
      this.timer = void 0
    }, 1000)
  }
};
</script>

<style lang="scss">
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
  background: url('/bg/gifbg.gif') center center no-repeat;
  background-size:cover;
}

.holder {
  background-color: rgba(255, 255, 255, 0.6);
  padding:10px;
  border-radius:15px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
  -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.45);
}
</style>
