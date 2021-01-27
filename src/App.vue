<template>
  <div class="container">

    <header class="header">
      <h1 class="header__title">
        Регистрация
        </h1>
      <span class="header__subtitle">
        Уже есть аккаунт?
        </span>
      <a href="#" class="header__link">
        Войти
        </a>
    </header>

    <form class="main">

      <ui-input 
        class="main__name"
        label="Имя"
        placeholder="Введите Ваше имя"
        v-model="name"
      />

      <ui-input 
        class="main__email"
        label="Еmail"
        placeholder="Введите ваш email"
        v-model="email"
      />

      <ui-input 
        class="main__phone"
        label="Номер телефона"
        placeholder="Введите номер телефона"
        v-model="phone"
      />
      
      <ui-select 
        class="main__lang"
        label="Язык"
        placeholder="Язык"
        v-model="language"
        :items="languages"
      />

      <div class="main__check">
        <ui-checkbox />
        <span class="main__text">
          Принимаю 
        <a href="#" class="main__link">
          условия
        </a>
          использования
        </span>
      </div>

      <ui-button class="main__btn">
        Зарегистрироваться
      </ui-button>

    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      language: '',
      languages: [
        'Русский',
        'Английский',
        'Китайский',
        'Испанский',
      ],
    }
  }
}
</script>
