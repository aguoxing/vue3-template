<template>
  <div class="content-container">
    <div class="m10">
      <div
        class="item-container"
        v-for="(article, index) in articleList"
        :key="index"
        @click="goto(article.id)"
      >
        <div class="item-title" v-text="article.title"></div>
        <div class="item-summary" v-text="article.summary"></div>
        <div class="item-tags">
          <el-tag
            v-for="(tag, idx) in article.tags"
            :key="idx"
            size="small"
            class="item-tag"
            type="info"
            >{{ tag }}</el-tag
          >
        </div>
        <div class="item-footer">
          <div class="footer-item">
            <svg-icon icon-class="author"></svg-icon>{{ article.author }}
          </div>
          <div class="footer-item">
            <svg-icon icon-class="date01"></svg-icon>{{ article.createTime }}
          </div>
          <div class="footer-item">
            <svg-icon icon-class="category"></svg-icon>{{ article.categoryName }}
          </div>
        </div>
        <div class="horizontal-divider"></div>
      </div>
      <div class="pagination-container">
        <el-pagination
          :current-page="queryParams.pageNum"
          :page-size="queryParams.pageSize"
          layout="pager"
          :background="true"
          :hide-on-single-page="true"
          :total="total"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { listArticle } from '@/api/blog'

export default defineComponent({
  setup() {
    const articleList = ref([])
    const total = ref(0)
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    })
    const refData = toRefs(queryParams)

    const handleCurrentChange = (val: number) => {
      queryParams.pageNum = val
    }

    const router = useRouter()
    const goto = (val: string) => {
      router.push('/blog/article/detail/' + val)
    }

    const getArticleList = () => {
      listArticle(queryParams).then((res) => {
        articleList.value = res.rows
        total.value = res.total
      })
    }

    onMounted(() => {
      getArticleList()
    })

    return {
      articleList,
      total,
      queryParams,
      ...refData,
      handleCurrentChange,
      goto
    }
  }
})
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
.item-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.item-container:hover {
  cursor: pointer;
}
.item-title {
  font-size: 18px;
  color: #333333;
}
.item-title:hover {
  color: #42b983;
}
.item-summary {
  font-size: 14px;
  margin: 5px 0;
  color: #71717a;
}
.item-tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item-tag {
  margin: 2px 2px 0 2px;
}
.item-footer {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
  color: #64748b;
  flex-wrap: wrap;
}
.footer-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
}
.pagination-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
