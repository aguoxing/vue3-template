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
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const timeLineList = reactive([
  {
    dateTimeStr: '2022',
    totalCount: '3',
    articleList: [
      { createTime: '2022-01-01', title: 'hello world' },
      { createTime: '2022-02-01', title: 'hello world 1' },
      { createTime: '2022-03-01', title: 'hello world 2' }
    ]
  },
  {
    dateTimeStr: '2021',
    totalCount: '2',
    articleList: [
      { createTime: '2021-01-01', title: 'hello world' },
      { createTime: '2021-02-01', title: 'hello world 1' }
    ]
  },
  {
    dateTimeStr: '2020',
    totalCount: '1',
    articleList: [{ createTime: '2020-01-01', title: 'hello world' }]
  }
])

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
.timeline-title {
  cursor: pointer;
}
.timeline-title:hover {
  color: #42b983;
}
</style>
