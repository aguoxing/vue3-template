<template>
  <div class="content-container">
    <div class="m10">
      <div
        class="item-container"
        v-for="(article, index) in 10"
        :key="index"
        @click="goto(article)"
      >
        <div class="item-title">标题-{{ article }}</div>
        <div class="item-summary">摘要-{{ article }}</div>
        <div class="item-tags">
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
          <el-tag size="small" class="item-tag" type="info">标签</el-tag>
        </div>
        <div class="item-footer">
          <div class="footer-item"><svg-icon icon-class="author"></svg-icon>admin</div>
          <div class="footer-item"><svg-icon icon-class="date01"></svg-icon>2022-02-21</div>
          <div class="footer-item"><svg-icon icon-class="category"></svg-icon>测试</div>
        </div>
        <div class="horizontal-divider"></div>
      </div>
      <div class="pagination-container">
        <el-pagination
          :currentPage="queryParams.pageNum"
          :page-size="queryParams.pageSize"
          :page-count="8"
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

<script lang="ts" setup>
import { reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const articleList = reactive([])
const total = ref(100)
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
