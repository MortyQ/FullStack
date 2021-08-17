<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i> {{ new Date().toLocaleString() }}</small
        >
        <small>
          <i class="el-icon-view">47</i>
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://www.auto-13.top/wp-content/uploads/2020/05/auto-3298890_640.jpg"
          alt="post image"
        />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima porro
        possimus, odio sapiente accusantium pariatur voluptatem, at tempore
        libero amet quae dignissimos perspiciatis sint reprehenderit ea error
        numquam quo incidunt itaque expedita voluptate, ducimus et? Qui aliquid
        impedit quisquam rem molestias? Rerum tempore, doloremque, culpa aliquid
        omnis quos id itaque eius, quae vero eum! Omnis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima porro
        possimus, odio sapiente accusantium pariatur voluptatem, at tempore
        libero amet quae dignissimos perspiciatis sint reprehenderit ea error
        numquam quo incidunt itaque expedita voluptate, ducimus et? Qui aliquid
        impedit quisquam rem molestias? Rerum tempore, doloremque, culpa aliquid
        omnis quos id itaque eius, quae vero eum! Omnis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima porro
        possimus, odio sapiente accusantium pariatur voluptatem, at tempore
        libero amet quae dignissimos perspiciatis sint reprehenderit ea error
        numquam quo incidunt itaque expedita voluptate, ducimus et? Qui aliquid
        impedit quisquam rem molestias? Rerum tempore, doloremque, culpa aliquid
        omnis quos id itaque eius, quae vero eum! Omnis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima porro
        possimus, odio sapiente accusantium pariatur voluptatem, at tempore
        libero amet quae dignissimos perspiciatis sint reprehenderit ea error
        numquam quo incidunt itaque expedita voluptate, ducimus et? Qui aliquid
        impedit quisquam rem molestias? Rerum tempore, doloremque, culpa aliquid
        omnis quos id itaque eius, quae vero eum! Omnis?
      </p>
    </main>
    <footer>

        <app-comment-form
          v-if='canAddComment'
        @created='createCommentHandler'
        />
      <div class="comments" v-if="true">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/post/comment.vue'
import AppCommentForm from '@/components/main/post/comment-form.vue'
export default {
  components: { AppComment, AppCommentForm },
  validate({ params }) {
    return !!params.id
  },
  data(){
    return {
      canAddComment: true,
    }
  },
  methods:{
    createCommentHandler(){
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
}

.post-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  align-items: center;
}

.post-image img {
  width: 100%;
  height: auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-content {
  margin-bottom: 2rem;
}
</style>
