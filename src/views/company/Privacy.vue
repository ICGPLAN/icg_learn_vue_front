<template>
  <div class="container">
    <!-- breadcrumb パンくずリスト 面包屑导航 -->
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <ol class="breadcrumb border-bottom">
        <li class="breadcrumb-item"><router-link :to="'/'">{{ $t('header.home') }}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $t('header.privacy') }}</li>
      </ol>
    </nav>

    <!-- space -->
    <!-- <div class="spacing"></div> -->
    <div>
      <div>
        <ol>
          <li>
            <h4>信息保护</h4>
            <p>我们承诺采取合理的安全措施来保护用户信息的安全性，并防止未经授权的访问、使用或泄露。</p>
          </li>
          <li>
            <h4>信息共享</h4>
            <p>我们不会未经用户许可将其个人信息出售、出租或交易给第三方。</p>
          </li>
          <li>
            <h4>Cookie 和追踪技术</h4>
            <p>我们可能会使用 cookie 和类似技术来改善用户体验和网站功能。用户可以根据个人偏好管理和控制这些技术。</p>
          </li>
          <li>
            <h4>第三方链接</h4>
            <p>我们的网站可能包含指向其他组织或第三方服务的链接，但我们对这些链接的隐私政策和做法不负责。用户在离开我们的网站后，请仔细阅读第三方网站的隐私政策。</p>
          </li>
          <li>
            <h4>用户权利</h4>
            <p>我们尊重用户的隐私权利，并尽力满足用户的相关要求，包括访问、更正或删除个人信息等。用户可以通过联系我们来行使这些权利。</p>
          </li>
          <li>
            <h4>隐私政策更新</h4>
            <p>我们保留随时修改隐私政策的权利。重要的政策变更将通过适当方式通知用户。</p>
          </li>
          <li>
            <h4>适用法律</h4>
            <p>我们将遵守适用的隐私和数据保护法律，并确保信息处理的合法性。</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import '@/css/views/company/privacy.css'
export default {

}
</script>

<style></style>