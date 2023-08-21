<template>
  <div id="app" @touchend="closeToggler($event)">
    <Header />
    <router-view class="infoPage" />
    <Footer />
  </div>
</template>

<script>
import '@/css/style.css'
import '@/css/fonts.css'
import _ from 'lodash'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: "App",
  components: { Header, Footer },
  data: function () {
    return {
      // 下記のパラメータをクリアして、プルダウンメニューを閉じらない
      ruleOutArr: ['nav_button_toggler', 'nav_li_dropdown', 'nav_li_span_dropdown', 'nav_li_a_dropdown'],
    };
  },
  created() {
    this.setUpFontFamily();
    this.fixedSize();
  },
  mounted() {
    this.setUpMenuCloseRule();
  },
  methods: {
    // fixed screen size
    fixedSize() {
      window.onload = function () {
        document.addEventListener('touchstart', function (event) {
          if (event.touches.length > 1) {
            event.preventDefault()
          }
        })
        document.addEventListener('gesturestart', function (event) {
          event.preventDefault()
        })
      }
    },
    setUpMenuCloseRule() {
      let languageList = document.getElementById('nav_li_dropdown').children[1].children;// 言語選択リスト(プルダウン)
      let addArr = this.ruleOutArr;
      _(languageList).forEach(function (item) {
        addArr.push(item.id);//li label
        addArr.push(item.children[0].id);// span label
      });
      this.ruleOutArr = addArr;
    },
    // フォントの初期化
    setUpFontFamily() {
      // ブラウザの言語を取得する
      const navLang = (navigator.language || 'ja').toLocaleLowerCase();
      // キャッシュより言語設定を取得し、取得できない場合、ブラウザの言語を使う
      const localLang = localStorage.getItem('lang') || navLang.split('-')[0];
      this.$util.setLanguage(localLang);//フォント設定Util
    },
    // スマホ側で、タッチした後、プルダウンメニューを閉じる
    closeToggler(e) {
      // プルダウンメニューが開いているのが判断
      let _opend = document.getElementById('navbarSupportedContent').classList.contains('show');

      // 下記のパラメータをクリックして、プルダウンメニューを閉じらない
      let closeFlg = true;
      this.ruleOutArr.forEach(item => {
        if (item === e.target.id) {
          closeFlg = false;
        }
      });
      // プルダウンメニューが開いている と タッチしているのはボタンではない時、閉じる
      if (_opend && closeFlg) {
        document.getElementById('nav_button_toggler').click();
      }
    },
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: 'Noto Sans JP', sans-serif; */
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; */
  width: 100vw;
  height: 100vh;
}
</style>
