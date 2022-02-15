<template>
  <div>
    <h1>{{store.helloWorld}}</h1>
    <br/>
    <h1>{{helloWorld}}</h1>
  </div>
</template>

<script lang="ts" setup>
import { mainStore } from '@/store/index'
import { storeToRefs } from 'pinia'
const store = mainStore()
const { helloWorld } = storeToRefs(store)
</script>

<style scoped>

</style>