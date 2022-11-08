<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div>
    <el-switch v-model="isDark" inline-prompt active-icon="ep:moon" inactive-icon="ep:sunny" @change="toggleDark" />
  </div>
</template>

<style lang="scss" scoped>
.switch {
  color: #afafaf;
  cursor: pointer;
}
</style>
