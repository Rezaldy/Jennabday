<template>
  <q-page class="bg row items-center justify-start">
    <div class="q-ml-lg holder q-gutter-y-md q-mr-xl q-pal-md">
      <h3 class="text-center">
        Hai Jennanananana
      </h3>
      <p>
        You've really been a blessing to me. I've often wondered where I would be if it weren't for having you to talk to.
        Thank you for being there for me. I hope you truly have an amazing birthday, and that we may often be equally leveled
        crackheads in the years to come!
      </p>
      <img class="full-width rounded-borders" src="https://media1.tenor.com/images/35d9e940ed280c71eda6da7b8d30ec6e/tenor.gif?itemid=12121266"/>
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
export default class Rizky extends Vue {
  timer: NodeJS.Timeout | undefined = undefined;

  confirm() {
    this.$store.commit('example/setPageTrue', 'rizky')
    this.$q.notify('Completed Rizky\'s message!')
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
  background: url('/bg/4.jpg') center center no-repeat;
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
