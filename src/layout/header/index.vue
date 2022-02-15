<template>
  <div class="nav-container">

    <div class="xs">
      <div class="xs-nav">
        <div class="logo">logo</div>
        <div class="drawer-menu">drawer</div>
      </div>
    </div>

    <div class="sm-md">
      <div class="sm-md-nav">
        <div class="nav-logo">
          <img src="@/assets/logo.png" @click="goto('')" style="width: 30px;height: 30px">
        </div>
        <div style="width: 350px;">
          <el-menu
              :default-active="$route.meta.activeMenu ? $route.meta.activeMenu : $route.path"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
          >
            <el-menu-item
                v-for="(item,index) in navMenus"
                :index="item.path"
                :key="index"
                v-text="item.name"
            ></el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      navMenus: [{
        name: '文章',
        path: '/article'
      },{
        name: '分类',
        path: '/category'
      },{
        name: '时间轴',
        path: '/timeline'
      },{
        name: '关于',
        path: '/about'
      }]
    }
  },
  setup() {

  },
  methods: {
    goto(url: any) {
      console.log(url)
    }
  }
}
</script>

<style scoped>
.nav-container {
  background-color: #545c64;
  height: 60px;
}
.nav-logo {
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.sm-md-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 80%;
  margin: auto;
  background-color: #545c64;
}
.xs-nav {
  height: 60px;
  background-color: skyblue;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}

/*超小屏*/
@media screen and (max-width: 479px) {
  .xs {

  }
  .sm-md {
    display: none!important;
  }
}
/*xs->手机*/
@media screen and (min-width: 480px) and (max-width: 767px) {
  .xs {

  }
  .sm-md {
    display: none!important;
  }
}
/*sm->平板*/
@media screen and (min-width: 768px) and (max-width: 959px) {
  .xs {
    display: none!important;
  }
  .sm-md {
    width: 80%;
    margin: auto;
  }
}
/*md->桌面显示器*/
@media screen and (min-width: 960px) and (max-width: 1199px) {
  .xs {
    display: none!important;
  }
  .sm-md {
    width: 80%;
    margin: auto;
  }
}
/*lg->大屏*/
@media screen and (min-width: 1200px) and (max-width: 1919px) {
  .xs {
    display: none!important;
  }
  .sm-md {

  }
}
/*xl->大屏*/
@media screen and (min-width: 1920px) {
  .xs {
    display: none!important;
  }
  .sm-md {

  }
}
</style>