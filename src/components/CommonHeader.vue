<template>
  <el-header>
    <div class="l-content">
      <!-- 图标的展示 -->
      <el-button size="small" @click="handleCollapse">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="getImageUrl('user-default')" alt="" class="user" />
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<script>
// import { url } from 'inspector'
import { computed, defineComponent } from "vue-demi";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let store = useStore();
    // 动态资源的引入
    const getImageUrl = (user) => {
      console.log(
        new URL(`../assets/images/${user}.png`, import.meta.url).href
      );
      return new URL(`../assets/images/${user}.png`, import.meta.url).href;
    };
    // 调用vuex中的mutations
    let handleCollapse = () => {
      store.commit("updateIsCollapse");
      console.log(store.state.isCollapse);
    };
    return {
      getImageUrl,
      handleCollapse,
    };
  },
});
</script>
<style lang="less" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #333;
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    color: #fff;
  }
}
</style>
