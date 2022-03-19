<template>
  <div class="content-container">
    <div class="m10">
      <md-editor :markdownContent="text" />
    </div>
    <div class="m10">
      <article-comment />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const articleId = router.currentRoute.value.params.id

const text = ref('')

const getArticleDetail = () => {
  text.value = `
  # 示例1
- one

## 示例2
+ two

### 示例3
asd

#### 示例4

##### 示例5

> hello world
~~删除~~

**big**

  `
}

onMounted(() => {
  getArticleDetail()
})
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
</style>
