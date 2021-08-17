<template>
      <div>
          Очищаем данные
      </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware:['admin-auth'],
  beforeCreate() {
    this.$store.dispatch('auth/LOGOUT')
    this.$router.push('/admin/login?message=logout')
  }
}
</script>
