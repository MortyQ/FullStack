<template>
  <el-form
    @submit.native.prevent="onSubmit"
    :model="controls"
    :rules="rules"
    ref="form"

  >
    <h1>Регистрация пользователя</h1>

    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>
    <el-form-item>
      <el-form-item label="Пароль" prop="password"  >
        <el-input
          type='password'
          v-model.trim="controls.password"
        />
      </el-form-item>

      <el-button :style="{margin: '20px 0'}" :loading='loading' class="custom__btn--form" type="primary" round native-type="submit">
        Создать
      </el-button>
    </el-form-item>
  </el-form>
</template>



<script>
export default {
  layout: 'admin',
  middleware:['admin-auth'],
  data(){
    return{
      loading:false,
      controls: {
        login: '',
        password: '',
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Введите логин',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur',
          },
          {
            min:6, message: 'Пороль должен быть не менее 6 симвлдлв', trigger: 'blur'
          }
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if(valid){
          this.loading = true

          try{
            const formData = {
              login: this.controls.login,
              password: this.controls.password

            }

            await this.$store.dispatch('auth/CREATE_USER', formData)
            this.$message.success('Пользователь Создан')
            this.controls.login = ''
            this.controls.password = ''
            this.loading = false

          } catch (e){
            this.loading = false
          }
        }
      })

    }
  }
}
</script>

<style lang='scss' scoped >
    form{
      width: 50%;
    }
</style>
