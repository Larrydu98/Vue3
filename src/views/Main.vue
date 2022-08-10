<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <!-- 侧边栏 -->
      <common-aside></common-aside>
      <el-container class="r-container">
        <!-- 头部区域 -->
        <common-header />
        <!-- 主题区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonAside from "../components/CommonAside.vue";
export default defineComponent({
  components: {
    CommonHeader,
    CommonAside,
  },
});
</script>
<style lang="less" scoped>
.el-container {
  flex-wrap: wrap;
  align-items: flex-start;
}
.common-layout {
  .lay-container {
    flex-wrap: nowrap;
  }
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background: #545c64;
    }
  }
}
</style>
