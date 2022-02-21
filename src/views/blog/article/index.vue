<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
        <div class="left-container">
          <div class="index-loop"></div>
          <div class="content-container">
            <ArticleList/>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
        <div class="right-container">asdsdf</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import ArticleList from '@/views/components/blog/ArticleList.vue'
</script>

<style scoped>
.left-container {
  margin-bottom: 10px;
}
.right-container {
  background-color: seagreen;
}
</style>
