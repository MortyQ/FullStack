<template>
    <el-card
    shadow='always'
    :style='{width:"500px"}'
    >
      <el-form
        @submit.native.prevent="onSubmit"
        :model="controls"
        :rules="rules"
        ref="form"
      >
        <h1>Панель Администратора</h1>

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
            Войти
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
</template>

<script>
  export default {
    layout: 'empty',
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
    mounted() {
      const {message} = this.$route.query

      switch (message){
        case 'login':
          this.$message.info('Для начала войдите в систему')
          break
        case 'logout':
          this.$message.success('Успешный выход с системы')
          break
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

             await this.$store.dispatch('auth/LOGIN', formData)
              this.$router.push('/admin')

            } catch (e){
              this.loading = false
            }
          }
        })

      }
    }

  }
</script>
