<template>
    <section class="error">
            <h2 style="color:red;" >Страница не найдена</h2>
            <hr/>
            <nuxt-link to="/" >Вернутся на главную</nuxt-link>
    </section>
</template>


<style lang="scss" scoped>
    .error{
      max-width: 700px;
      height: 300px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    hr{
      width: 35%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
</style>
