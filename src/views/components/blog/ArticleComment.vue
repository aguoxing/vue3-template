<template>
  <div class="content-container">
    <div class="comment-header">
      <div>0评论</div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link"> 未登录用户 </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Github登录</el-dropdown-item>
              <el-dropdown-item>Gitee登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="horizontal-divider"></div>
    <MdComment />
    <div class="comment-btn">
      <el-button>Comment</el-button>
    </div>
    <div class="horizontal-divider"></div>
    <CommentItem />
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
}
.comment-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.comment-btn {
  margin: 10px 0;
}
</style>
