<template>
  <q-item
    clickable
    tag="a"
    @click="navigate(route)"
    :key="route"
    :active="active"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, default: '' }) readonly caption!: string;
  @Prop({ type: String, default: 'home' }) readonly route!: string;
  @Prop({ type: String, default: ''}) readonly icon!: string;

  navigate(route: string) {
    if (this.$router.currentRoute.name !== route) {
      this.$router.push({name: route})
        .catch(err => console.error(err));
    }
  }

  get active(): boolean {
    return this.route === this.$route.name;
  }
}
</script>
