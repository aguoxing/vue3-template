<template>
  <div class="comment-item-container">
    <!-- 评论 -->
    <div v-if="commentList.length === 0" class="w100">
      <el-empty description="暂无评论"></el-empty>
    </div>
    <div v-else class="comment-item" v-for="(item, index) in commentList" :key="index">
      <!-- 一级评论 -->
      <div class="comment-info">
        <div class="user-avatar"><el-avatar :src="item.userAvatar"></el-avatar></div>
        <div class="comment-content">
          <div class="user-name" v-text="item.createBy"></div>
          <div class="content-text" v-text="item.contentText"></div>
          <div class="button-item">
            <div
              style="font-size: 12px; color: #909399; margin-right: 10px"
              v-text="item.createTime"
            ></div>
            <el-button type="text" size="small">回复</el-button>
          </div>
        </div>
      </div>
      <!-- 子评论 -->
      <div class="children-item" v-for="(item, index) in item.children" :key="index">
        <div class="comment-children">
          <div class="user-avatar"><el-avatar :src="item.userAvatar"></el-avatar></div>
          <div class="comment-content">
            <div class="user-name" v-text="item.createBy"></div>
            <div class="content-text" v-text="item.contentText"></div>
            <div class="button-item">
              <div
                style="font-size: 12px; color: #909399; margin-right: 10px"
                v-text="item.createTime"
              ></div>
              <el-button type="text" size="small">回复</el-button>
            </div>
          </div>
        </div>
      </div>
      <!-- 子评论 -->
    </div>

    <!-- 分页按钮 -->
    <div class="page-btn">
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const commentList = reactive([
      {
        createBy: 'admin',
        userAvatar: 'circleUrl',
        children: [
          {
            createBy: 'admin',
            userAvatar: 'circleUrl',
            children: [],
            createTime: '2022-03-17',
            contentText: 'asd'
          },
          {
            createBy: 'admin',
            userAvatar: 'circleUrl',
            children: [],
            createTime: '2022-03-17',
            contentText: 'asd'
          }
        ],
        createTime: '2022-03-17',
        contentText: 'asd'
      },
      {
        createBy: 'admin',
        userAvatar: 'circleUrl',
        children: [
          {
            createBy: 'admin',
            userAvatar: 'circleUrl',
            children: [],
            createTime: '2022-03-17',
            contentText: 'asd'
          }
        ],
        createTime: '2022-03-17',
        contentText: 'asd'
      }
    ])
    const total = ref(100)
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    })
    const refData = toRefs(queryParams)

    const getCommentTree = () => {}

    const handleCurrentChange = (val: number) => {
      queryParams.pageNum = val
      console.log('asd')
    }

    return {
      commentList,
      total,
      queryParams,
      refData,
      getCommentTree,
      handleCurrentChange
    }
  }
})
</script>

<style scoped>
.comment-item-container {
  /*display: flex;*/
  /*flex-direction: row;*/
  margin: 10px 0;
}
.comment-content-container {
  display: flex;
  flex-direction: column;
}
.item-info {
  margin: 5px 0;
}

.comment-container {
  background-color: #fff;
  margin-top: 10px;
}
.comment-item {
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid #f0f2f5;
}
.children-item {
  font-size: 16px;
  padding: 10px;
}
.comment-info {
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
}
.comment-children {
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  margin-left: 50px;
}
.comment-content {
  display: flex;
  flex-direction: column;
}
.user-name {
  font-size: 18px;
  color: #606266;
}
.user-avatar {
  margin-right: 15px;
}
.button-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
}
.content-text {
  color: #909399;
}
.input-container {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.send-btn {
  margin-top: 10px;
}
.page-btn {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
