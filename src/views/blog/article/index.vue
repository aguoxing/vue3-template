<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="left-container">
          <div class="index-loop"></div>
          <div class="content-container"></div>
          <div class="pagination-container">
            <el-pagination
                v-model:currentPage="queryParams.pageNum"
                :page-size="queryParams.pageSize"
                small="small"
                layout="prev, pager, next"
                :total="total"
                @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <div class="right-container">
          asdsdf
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive,toRefs } from 'vue'

const total = ref(100)
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10
})
const refData = toRefs(queryParams)

const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val
}
</script>

<style scoped>
.left-container {
  background-color: skyblue;
  margin-bottom: 10px;
}
.right-container {
  background-color: seagreen;
}
.pagination-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>