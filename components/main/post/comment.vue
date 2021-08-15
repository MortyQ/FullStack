<template>
  <el-card class="comment">
    <div class="comment-header">
      <span> Person Name </span>
      <small>
        <i class="el-icon-time"></i> {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, velit.
    </div>
  </el-card>
</template>

<script>
export default {
  props: ['comment'],
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  span {
    font-size: 16px;
    border-bottom: 1px solid #e6e6e6;
  }
}

.comment-text {
  white-space: pre-line;
}
</style>
