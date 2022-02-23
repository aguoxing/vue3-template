<template>
  <div class="content-container">
    <div class="list-container">
      <div
        class="item-container"
        v-for="(article,index) in 10"
        :key="index"
        @click="goto(article)"
      >
        <div class="item-title">
          标题-{{article}}
        </div>
        <div class="item-summary">
          摘要-{{article}}
        </div>
        <div class="item-footer">
          <div class="footer-item">admin</div>
          <div class="footer-item">2022-02-21</div>
          <div class="footer-item">测试</div>
        </div>
        <div class="horizontal-divider"></div>
      </div>
      <div class="pagination-container">
        <el-pagination
          v-model:currentPage="queryParams.pageNum"
          :page-size="queryParams.pageSize"
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive, ref, toRefs} from 'vue'
import {useRouter} from "vue-router"

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
  router.push('/blog/article/detail/'+val)
}

</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
.list-container {
  margin: 0 10px;
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
}
.item-title:hover {
  color: #42b983;
}
.item-summary {
  font-size: 14px;
  margin: 3px 0;
}
.item-footer {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
}
.footer-item {
  margin-right: 5px;
}
.pagination-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
