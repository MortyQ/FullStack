<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post Title</h3>

      <small> <i class="el-icon-time" ></i>  {{ new Date().toLocaleString() }}</small>
    </header>

    <div class="post-body">
      <img
        src="https://www.auto-13.top/wp-content/uploads/2020/05/auto-3298890_640.jpg"
        alt="post img"
        class="post-img"
      />
    </div>

    <footer class="post-footer">
      <el-button round @click="openPost"> Открыть </el-button>
      <span>
        <i class="el-icon-chat-round"> 12</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test_id'
      this.$router.push(`/post/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.post-img {
  width: 100%;
  height: auto;
}

.post-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

}


</style>
