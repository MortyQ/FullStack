<template>
    <div>
      <el-breadcrumb separator="/" class='mb' >
        <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
        <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
      </el-breadcrumb>

      <el-form
        @submit.native.prevent="onSubmit"
        :model="controls"
        :rules="rules"
        ref="form"
      >
<!--        <h1>Панель Администратора</h1>-->

        <el-form-item label="Текс в формате .md или .html" prop="text">
          <el-input type='textarea' v-model.trim="controls.text"
            resize='none'
                    :rows='10'
          />
        </el-form-item>

        <div class='mb' >
          <small>
          <i class='el-icon-time' ></i>
          <span style='margin-left: 10px' > {{ new Date(post.date).toLocaleString() }} </span>
          </small>
          <small>
          <i class='el-icon-view' ></i>
          <span style='margin-left: 10px' > {{ post.views }} </span>
          </small>
        </div>


        <el-form-item>


          <el-button :style="{margin: '20px 0'}" :loading='loading' class="custom__btn--form" type="primary" round native-type="submit">
            Обновить
          </el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware:['admin-auth'],
    head(){
      return{
        title: `Пост | ${this.post.title}`
      }
    },
    validate({params}){
        return Boolean(params.id)
    },
    async asyncData({store, params}){
      const post = await store.dispatch('post/FETCH_ADMIN_BY_ID', params.id )
      return {post}
    },
    data(){
      return{
        loading:false,
        controls: {
          text: '',

        },
        rules: {
          text: [
            {
              required: true,
              message: 'Текс не должен быть пустым',
              trigger: 'blur',
            },
          ],
        },
      }
    },
    methods: {
      onSubmit(){
        this.$refs.form.validate(async valid =>{
          if(valid){
            this.loading = true

            const formData = {
              text: this.controls.text,
              id: this.post._id
            }

            try{
              await this.$store.dispatch('post/UPDATE', formData)
              this.$message.success('Пост обновлен')
              this.loading = false
            } catch (e) {

              this.loading = false

            }



          }
        })
      }
    }
  }
</script>
