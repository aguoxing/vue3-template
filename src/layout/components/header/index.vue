<template>
  <el-affix>
    <div class="header-container border-b">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="@/assets/logo.png" @click="goto('/home')" style="width: 30px; height: 30px" />
        </div>
        <div class="nav-menu">
          <div
            class="menu-item"
            v-for="(menu, index) in navMenus"
            :key="index"
            v-text="menu.name"
            :class="{ 'menu-item-bgc': currentPath === menu.path }"
            @click="goto(menu.path)"
          ></div>
        </div>
        <div class="nav-menu-mobile">
          <el-dropdown>
            <div class="menu-btn">
              <svg-icon icon-class="menu"></svg-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(menu, index) in navMenus"
                  :key="index"
                  @click="goto(menu.path)"
                  >{{ menu.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-affix>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const navMenus = [
  { name: '首页', path: '/home' },
  { name: '博客', path: '/blog' }
]
const router = useRouter()

const currentPath = ref(router.currentRoute.value.path)

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
  font-size: 14px;
  border-color: #e5e7eb;
}
.nav-container {
  width: 85%;
  margin: 0 auto;
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
</style>
