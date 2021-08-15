<template>
  <el-form
    @submit.native.prevent="onSubmit"
    :model="controls"
    :rules="rules"
    ref="form"
  >
    <h1>Добавить Комментарий</h1>

    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>
    <el-form-item>
      <el-form-item label="Ваш комменарий" prop="text">
        <el-input
          type="textarea"
          v-model.trim="controls.text"
          resize="none"
          :rows="2"
        />
      </el-form-item>

      <el-button class="custom__btn--form" type="primary" round native-type="submit">
        Добавить комментарий
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      controls: {
        name: '',
        text: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Поле не может быть пустым',
            trigger: 'blur',
          },
        ],
        text: [
          {
            required: true,
            message: 'Введите ваш комментарий',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('Valid OK')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
  .custom__btn--form{
    margin-top: 1.5rem;
  }
</style>
