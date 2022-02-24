<template>
  <div>
    <markdown :text="text"/>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from "vue-router"

const router = useRouter()
const articleId = router.currentRoute.value.params.id

const text = '# 示例' +
  '\n' +
  '## 请求参数' +
  '\n' +
  '### test'
  '\n' +
  '> test'


</script>

<style scoped>

</style>
