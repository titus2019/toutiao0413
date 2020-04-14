<template>
  <!-- 整个布局 -->
  <el-container>
    <!-- 左右布局 -->
    <el-aside style="width:200px">
      <!-- 左侧菜单 -->
      <div class="logo">
        <img src="../../assets/img/logo_admin.png" alt />
      </div>
      <!-- 左侧菜单 -->
      <el-menu class="menuLeft" text-color="#adafb5" active-text-color="red" router>
        <!-- 一级菜单 -->
        <el-menu-item index='/'>首页</el-menu-item>
        <!-- 二级菜单 -->
        <el-submenu index='1'>
          <template slot="title">内容管理</template>
          <el-menu-item index='/publish'>发布文章</el-menu-item>
          <el-menu-item index='/article'>内容管理</el-menu-item>
          <el-menu-item>评论管理</el-menu-item>
          <el-menu-item index='/image'>素材管理</el-menu-item>
        </el-submenu>
        <!-- 二级菜单 -->
        <el-submenu index='2'>
          <template slot="title">粉丝管理</template>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
        </el-submenu>
        <!-- 一级菜单 -->
        <el-menu-item>账户信息</el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 大容器 -->
    <el-container>
      <!-- 头部内容 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <!-- 中间内容 -->
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutHeader from '../../components/layout-header.vue'
export default {
  components: {
    'layout-header': layoutHeader
  }
}
</script>

<style lang='less' scoped>
.logo {
  background-color: #2e2f32;
  padding: 10px 0;
  text-align: center;
  width: 199px;
  img {
    width: 100px;
  }
}
.menuLeft {
  background-color: #353b4e;
  height: 100vh;
}
</style>
