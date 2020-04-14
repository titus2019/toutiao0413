<template>
  <el-row type="flex" justify="space-between">
    <!-- 左侧内容 -->
    <el-col :span="6" class="left">
      <i class="el-icon-s-fold"></i>
      <span>江苏传智播客</span>
    </el-col>
    <!-- 右侧内容 -->
    <el-col :span="2" class="right">
      <!-- 头像 -->
      <img src="../assets/img/avatar.jpg" alt />
      <el-dropdown trigger="click">
        <span>小毛驴</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>qq</el-dropdown-item>
          <el-dropdown-item>ww</el-dropdown-item>
          <el-dropdown-item>ee</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.left {
  display: flex;
  align-items: center;
  i {
    font-size: 20px;
  }
}
span {
  margin-left: 4px;
}
.right {
  display: flex;
  align-items: center;
  img{
      border-radius: 50%;
  }
}
</style>
