<template>
  <div class="content-container">
    <div class="m10">
      <markdown :text="text" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const articleId = router.currentRoute.value.params.id

const text = '# 示例' + '\n' + '## 请求参数' + '\n' + '### test'
'\n' + '> test'
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
</style>
