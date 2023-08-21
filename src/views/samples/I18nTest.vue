<template>
  <span>Test page</span>
  <div>
    {{$t("test.testName")}}
  </div>
  <div v-t="'test.testName'"></div>
</template>
<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'I18nTest',
  components: {
  },
  created() {
    const { t } = useI18n();
    console.log(t('header.home'));
  }
}

</script>
<style></style>