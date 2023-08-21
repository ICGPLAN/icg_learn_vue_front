<template>
  <div class="container">
    <!-- breadcrumb パンくずリスト 面包屑导航 -->
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <ol class="breadcrumb border-bottom">
        <li class="breadcrumb-item"><router-link :to="'/'">{{ $t('header.home') }}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $t('header.about') }}</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-md-8">
        <b>
          <h4>成分</h4>
          <p>围观群众。</p>
          <p>开发爱好者。</p>
          <br>
          <h4>我们在做的</h4>
          <p>帮助其他想在日本做IT、或需要转职的小伙伴可持续发展。</p>
          <p>主打的就是一个RUN。</p>
          <p>后续会开通赴日IT避坑板块。</p>
          <p>如果你有任何关于日本IT圈的情报，都可以与我们联系。</p>
        </b>
      </div>
    </div>
  </div>
</template>
<script></script>
<style></style>
