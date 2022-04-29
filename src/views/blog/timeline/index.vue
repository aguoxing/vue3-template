<template>
  <div class="content-container">
    <div class="m10">
      <div v-for="(item, index) in timeLineList" :key="index">
        <div class="mb10">
          <el-divider content-position="left" border-style="dashed">
            <div v-text="item.dateTimeStr + '(' + item.totalCount + ')'"></div>
          </el-divider>
        </div>
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in item.articleList"
            :key="index"
            :timestamp="item.createTime"
            placement="top"
          >
            <div class="timeline-title" v-text="item.title" @click="goto(item.id)"></div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { listArticleTimeLine } from '@/api/blog'

const timeLineList = ref([])

const getArticleTimeLine = () => {
  listArticleTimeLine().then((res) => {
    timeLineList.value = res.data
  })
}

const router = useRouter()
const goto = (val: string) => {
  router.push('/blog/article/detail/' + val)
}

onMounted(() => {
  getArticleTimeLine()
})
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
.timeline-title {
  cursor: pointer;
}
.timeline-title:hover {
  color: #42b983;
}
</style>
