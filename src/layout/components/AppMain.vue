<template>
  <div class="app-main">
    <app-header></app-header>
    <router-view class="container" />
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}
</style>
