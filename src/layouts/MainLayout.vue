<template>
  <q-layout view="lHh Lpr lFf">
    <q-dialog v-model="dialog" :position="position">
      <q-card style="width: 350px">
        <q-card-section class="row items-center no-wrap">
          <div class="full-width">
            <div class="text-center text-weight-bold full-width">No Jenna.</div>
            <div class="text-center text-grey full-width">You're not.</div>
            <img class="full-width" src="https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif"/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialog2" :position="position">
      <q-card style="width: 700px">
        <q-card-section class="row items-center no-wrap">
          <div class="full-width">
            <h3 class="text-center text-weight-bold full-width">So.. Jenna.</h3>
            <div class="text-center text-grey full-width">
              <p>
                You actually managed to get through our messages.<br/>
                You know that means only one thing remains for a birthday right?
              </p>
              <p>
                We have all spent a lot of time on Discord with you. We have all spent a lot of time watching you stream,
                doing your thang in your own silly way. But throughout these times you have always had to compensate.
                You would ask why stuff isn't going your way with any game you play. Y'know, fuck Shadow.tech, am I right?
              </p>
              <p>
                So, rather than playing your games <span class="text-italic">through the cloud</span> to be able to bear
                the disruptions, we figured it would be cool if you could.. Have your PC run like a cloud.
              </p>
              <p>
                The gang got together and got you some of that smooth un-cloudy business.
              </p>
              <p>
                Happy birthday, Jenna. Let's make this a great one.
              </p>
              <img class="full-width" src="https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif"/><br/><br/>
              <h3>What we got you</h3>
              <p>
                In order for you to game with us, we figured you wanted some of the <span class="text-italic">Crème de la Cream.</span>
              </p>
              <h4 class="text-black">AMD Ryzen 5 5600X 3.7 Ghz 6-Core Processor</h4>
              <img class="full-width" src="https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg"/>
              <h4 class="text-black">Corsair H100i RGB PLATINUM SE 63 CFM Liquid CPU Cooler</h4>
              <img class="full-width" src="https://images-eu.ssl-images-amazon.com/images/I/41lsp86eeWL.jpg"/>
              <h4 class="text-black">Asus PRIME X570-P ATX AM4 Motherboard</h4>
              <img class="full-width" src="https://cdna.pcpartpicker.com/static/forever/images/product/cf0f88544a7b30210f03e1670b4392c5.1600.jpg"/>
              <h4 class="text-black">Corsair Vengeance RGB Pro 32 GB (2 x 16 GB) DDR4-3200 CL16 Memory</h4>
              <img class="full-width" src="https://images-eu.ssl-images-amazon.com/images/I/41la0SiBH6L.jpg"/>
              <h4 class="text-black">Samsung 970 Evo Plus 1 TB M.2-2280 NVME Solid State Drive (TWICE!)</h4>
              <img class="full-width" src="https://images-eu.ssl-images-amazon.com/images/I/31%2BrkXdQL8L.jpg"/>
              <h4 class="text-black">NZXT H510i ATX Mid Tower Case</h4>
              <img class="full-width" src="https://cdna.pcpartpicker.com/static/forever/images/product/6f63c51bf729ea9d12da08b83e11be22.1600.jpg"/>
              <h4 class="text-black">Corsair RMx (2018) 850 W 80+ Gold Certified Fully Modular ATX Power Supply</h4>
              <img class="full-width" src="https://images-na.ssl-images-amazon.com/images/I/51lUqysCuDL.jpg"/>
              <h4 class="text-black">Corsair LL120 63 CFM 120 mm Fan (TWICE!)</h4>
              <img class="full-width" src="https://cdna.pcpartpicker.com/static/forever/images/product/8f7cb28d220d09149a2c960d3253c780.1600.jpg"/>
              <p><span class="text-italic">
                Oh and.. Amy was in on this. That trip to London? Part of it all.
                You were actually picking up part of your present.
              </span>😉</p>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title
          v-if="new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')">
          Happy Birthday Jenna!
        </q-toolbar-title>
        <transition v-if="progress === 100  && new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')" appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div>
            <q-btn
              flat
              dense
              round
              icon="grade"
              aria-label="Final"
              @click="final('top')"
            />
            YOU'Z A STAR, CLICK THE STAR!
          </div>
        </transition>
        <q-linear-progress transition-show="fade" transition-hide="fade" v-else-if="progress < 100 && new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')" class="progress" stripe size="20px" :value="progress / 100" style="width:150px">
          <div class="absolute-full flex flex-center">
            <q-badge color="white" text-color="accent" :label="progress + '%'" />
          </div>
        </q-linear-progress>
        <div
          v-if="new Date().setHours(0,0,0,0) >= new Date('2020-12-10 00:00:00')"
          class="lost cursor-pointer" @click="lost('top')">I'm lost</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links
        </q-item-label>
        <EssentialLink
          key="home"
          title="Home"
          caption="Go to the beginning!"
          icon="home"
          route="home"
        />
      </q-list>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          VIPs
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          :title="link.title"
          :caption="link.caption"
          :icon="link.icon"
          :route="link.route"
        />
      </q-list>
      <q-list :hidden="true">
        <q-item-label
          header
          class="text-grey-8"
        >
          VIPs
        </q-item-label>
        <EssentialLink
          key="Bonus!"
          title="Bonus"
          caption="Click me!"
          icon="favorite"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <transition
        leave-active-class="animated fadeOut"
        enter-active-class="animated fadeIn"
        appear
        :duration="1000"
      >
        <router-view/>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'

import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {EssentialLink}
})
export default class MainLayout extends Vue {

  leftDrawerOpen = false;

  dialog = false;
  dialog2 = false;
  position = 'top';

  lost(position: string) {
    this.position = position;
    this.dialog = true;
  }

  final(position: string) {
    this.position = position;
    this.dialog2 = true;
  }

  checkIcon(name: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const progress: { [name: string]: boolean } = this.$store.getters['example/getPages'];
    return progress[name] ? 'bookmark' : 'bookmark_border';
  }

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

  get essentialLinks(): {
    title: string,
    caption: string,
    icon: string,
    route: string,
  }[] {
    return [
      {
        title: 'Oscar',
        caption: 'Hey dumbass',
        icon: this.checkIcon('oscar'),
        route: 'page.oscar'
      },
      {
        title: 'Rizky',
        caption: 'Hewwo',
        icon: this.checkIcon('rizky'),
        route: 'page.rizky'
      },
      {
        title: 'Kevin',
        caption: 'Hey queen',
        icon: this.checkIcon('kevin'),
        route: 'page.kevin'
      },
      {
        title: 'Evan',
        caption: 'Hey dejennarate',
        icon: this.checkIcon('evan'),
        route: 'page.evan'
      },
      {
        title: 'Kho',
        caption: 'Howdy!',
        icon: this.checkIcon('kho'),
        route: 'page.kho'
      }
    ]
  }
}
</script>

<style lang="scss">
.lost {
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
}

.progress {
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.45);
}

@font-face {
  font-family: 'Waltography';
  src: url(/fonts/Waltograph42.otf);
}

h1, h2, h3, h4, h5, h6 {
  font-family: Waltography;
}

@font-face {
  font-family: 'OpenSans';
  src: url(/fonts/OpenSans-Light.ttf);
}

* {
  font-family: OpenSans
}
</style>
