<template>
  <div class="home-container">
    <div @click="goto('/blog')" v-text="'blog'"></div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter()

const goto = (url: any) => {
  router.push(url)
}
</script>

<style lang="scss">
.home-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
}
</style>