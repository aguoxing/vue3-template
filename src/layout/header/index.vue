<template>
  <el-affix>
    <div class="header-container">
      <div class="nav-container container">
        <div class="nav-logo">
          <img src="@/assets/logo.png" @click="goto('/home')" style="width: 30px;height: 30px" />
        </div>
        <div class="nav-menu">
          <div
              class="menu-item"
              v-for="(menu,index) in navMenus"
              v-text="menu.name"
              :class="{'menu-item-bgc' : currentPath === menu.path}"
              @click="goto(menu.path)"
          ></div>
        </div>
        <div class="nav-menu-mobile">
          <el-dropdown>
            <div class="menu-btn">menu</div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                    v-for="(menu,index) in navMenus"
                    @click="goto(menu.path)"
                >{{menu.name}}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-affix>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import {ref} from "vue";

const navMenus = [
  {name: '文章', path: '/blog/article'},
  {name: '分类', path: '/blog/category'},
  {name: '归档', path: '/blog/timeline'},
  {name: '关于', path: '/blog/about'}
]
const currentPath = ref('/blog/article')

const router = useRouter()

const goto = (url: string) => {
  currentPath.value = url
  router.push(url)
}
</script>

<style scoped>
.header-container {
  background-color: #ffffff;
  height: 50px;
  margin-bottom: 10px;
  border-bottom: 1px solid #dcdfe6;
  font-size: 14px;
}
.nav-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}
.nav-logo {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav-logo:hover {
  cursor: pointer;
}
.menu-item {
  margin: 0 10px;
}
.menu-item:hover {
  cursor: pointer;
  color: #42b983;
}
.menu-item-bgc {
  color: #42b983;
}
.nav-menu-item-mobile {
  background-color: skyblue;
}
</style>