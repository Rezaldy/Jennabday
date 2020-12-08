<template>
  <q-page class="row items-center justify-evenly bg">
    <div v-if="new Date().setHours(0,0,0,0) >= new Date('2020-01-05 00:00:00')" class="holder text-center">
      <h2>
        JENNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!
      </h2>
      <p>
        WELCOME BAAAAAAAAAACK ♥
      </p>
    </div>
    <div v-else class="holder text-center">
      <flip-countdown deadline="2021-01-05 00:00:00"></flip-countdown>
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
