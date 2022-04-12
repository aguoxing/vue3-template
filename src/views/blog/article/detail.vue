<template>
  <div class="content-container">
    <div class="m10">
      <ArticleMarkdownPreview :markdownContent="articleInfo.data.content" />
    </div>
    <div class="m10">
      <ArticleComment />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getArticle } from '@/api/blog/article'

const router = useRouter()
const articleId = router.currentRoute.value.params.id

const articleInfo = reactive({ data: {} })

const getArticleDetail = () => {
  getArticle(articleId).then((res) => {
    articleInfo.data = res.data
  })
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
