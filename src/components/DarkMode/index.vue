<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>

<template>
  <div>
    <ep:moon v-if="isDark" @click.stop="toggleDark()" class="switch" />
    <ep:sunny v-else @click.stop="toggleDark()" class="switch" />
  </div>
</template>

<style lang="scss" scoped>
.switch {
  color: #afafaf;
  cursor: pointer;
}
</style>
