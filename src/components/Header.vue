<template>
  <header class="navigation navbar navbar-fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg" style="width:100%;">

        <!-- ICG画像 -->
        <router-link class="navbar-brand" :to="'/'" style="width:45%;">
          <img style="width: 60px; height: 60px;" :src="require('../assets/logo.png')" :fit="'fill'" alt="ICGプラン" />
        </router-link>

        <!-- プルダウンメニュー -->
        <button id="nav_button_toggler" class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span id="nav_span_toggler" class="navbar-toggler-icon"></span>
        </button>

        <!-- ヘッダーメニュー -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="(item, index) in navbarArr" :key="index" :index="index">
              <router-link class="nav-link" :to="item.path"><b v-t="item.name"></b></router-link>
            </li>

            <!-- 言語選択 -->
            <li class="nav-item dropdown" id="nav_li_dropdown">
              <a class="nav-link dropdown-toggle" id="nav_li_a_dropdown" href="#" role="button" data-bs-toggle="dropdown">
                <span id="nav_li_span_dropdown">{{ $t('local.language') }}</span></a>
              <ul class="dropdown-menu" id="nav_li_ul_dropdown">
                <li class="dropdown-item" :id="'nav_ul_li_' + index" v-for="(lang, index) in langArr" :key="index"
                  @click="changeLanguage(lang.lang)">
                  <span :id="'nav_ul_li_span_' + index">{{ lang.name }}</span>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
// import 'animate'
import '@/css/components/header.css'
import i18n from '@/locals'

export default {
  name: 'Header',
  data: function () {
    return {
      langArr: [], // 言語リスト
      navbarArr: [{ path: '/', name: 'header.home' },
      //  {path:'/developExample',name:'header.developExample'},
      { path: '/about', name: 'header.about' },
      { path: '/contact', name: 'header.contact' },
      { path: '/privacy', name: 'header.privacy' },
      ], // ヘッダーメニューリスト
      disabled: false,
    };
  },
  components: {
  },
  created() {
    //TODO TEST
    window.data = this;
    this.setUp();
    window.addEventListener('scroll', this.handleScroll, true);
  },
  mounted() {
  },
  methods: {
    // 初期化
    setUp() {
      // 環境変数で言語取得
      const langJson = JSON.parse(process.env.VUE_APP_LANG);
      this.langArr = _.clone(langJson);//シャローコピー
    },
    // 言語変更
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('lang', lang);// キャッシュに言語設定
      window.document.title = i18n.global.t('title.home');
    },
    // ヘッダー部色を変える
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
      var header = document.querySelector('header');
      // ボタン色変更
      var toggler = document.getElementsByClassName('navbar-toggler');
      if (scrollTop > 50) {
        header.classList.add('sticky-header');
        toggler[0].classList.remove('navbar-dark');
        toggler[0].classList.add('navbar-light');
      } else {
        header.classList.remove('sticky-header');
        toggler[0].classList.remove('navbar-light');
        toggler[0].classList.add('navbar-dark');
      }
    },
  },
  watch: {
    language(newValue, oldValue) {
      this.$util.setLanguage(newValue);
    }
  },
}
</script>