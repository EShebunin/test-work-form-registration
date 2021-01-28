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
        :error="errorName"
        errorText="Введено не корректное значение"
        v-model="name"
      />

      <ui-input 
        class="main__email"
        label="Еmail"
        placeholder="Введите ваш email"
        :error="errorEmail"
        errorText="Введено не корректное значение"
        v-model="email"
      />

      <ui-input 
        class="main__phone"
        label="Номер телефона"
        placeholder="Введите номер телефона"
        :error="errorPhone"
        errorText="Введено не корректное значение"
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
        <ui-checkbox v-model="checkAccept" />
        <span class="main__text">
          Принимаю 
        <a href="#" class="main__link">
          условия
        </a>
          использования
        </span>
      </div>

      <ui-button 
        :disabled="disableBtn" 
        type='submit'
        class="main__btn">
        Зарегистрироваться
      </ui-button>

    </form>
  </div>
</template>
<script>
/* eslint-disable no-useless-escape */
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
      checkAccept: false,
    }
  },
  computed: {
    errorName() {
      const pattern = /^[а-яёa-z]*[-.\s]*[а-яёa-z]*$/iu;

      return !pattern.test(this.name)
    },
    errorEmail() {
      const pattern = /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/;

      return !pattern.test(this.email);
    },
    errorPhone() {
      const pattern = /^\+?\d*[-.().\s]?\d*[-.().\s]?\d*[-.().\s]?\d*[-.().\s]?\d*$/u;
      const clearNumber = this.phone.replace(/\D/g, "");

      return (!pattern.test(this.phone) ||  clearNumber.length > 11)
    },
    disableBtn() {
      const isEmptyName = this.name.length === 0;
      const isEmptyEmail = this.email.length === 0;
      const isEmptyPhone = this.phone.length === 0;
      const isEmptyLanguage = this.language.length === 0;

      return (isEmptyName || this.errorName) 
            || (isEmptyEmail || this.errorEmail) 
            || (isEmptyPhone || this.errorPhone) 
            || isEmptyLanguage
            || !this.checkAccept;
    }
  }
}
</script>
