<template>
  <div class="container">
    <!-- breadcrumb パンくずリスト 面包屑导航 -->
    <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <ol class="breadcrumb border-bottom">
        <li class="breadcrumb-item"><router-link :to="'/'">{{ $t('header.home') }}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ $t('header.contact') }}</li>
      </ol>
    </nav>

    <div class="row">
      <div>
        <p style="color:red;" v-for="error in errors" :key="error">{{ error }}</p>
      </div>
      <!-- 問い合わせフォーム -->
      <div class="col-md-8">
        <!-- 姓名 -->
        <div class="row mb-4">
          <label for="name" class="col-sm-4 col-form-label">{{ $t(textArr[0].t) }}
            &nbsp;<span style="border:1px solid red; color:red;">{{ $t(textArr[6].t) }}</span>
          </label>
          <div class="col-sm-8">
            <input type="text" v-model="name" id="name" class="form-control">
          </div>
        </div>

        <!-- 問い合わせ件名 inquirySubject -->
        <div class="row mb-4">
          <label for="inquirySubject" class="col-sm-4 col-form-label">{{ $t(textArr[1].t) }}
            &nbsp;<span style="border:1px solid red; color:red;">{{ $t(textArr[6].t) }}</span>
          </label>
          <div class="col-sm-8">
            <input type="text" v-model="inquirySubject" id="inquirySubject" class="form-control">
          </div>
        </div>

        <!-- Email -->
        <div class="row mb-4">
          <label for="email" class="col-sm-4 col-form-label">{{ $t(textArr[2].t) }}</label>
          <div class="col-sm-8">
            <input type="text" v-model="email" id="email" class="form-control">
          </div>
        </div>

        <!-- 内容 content -->
        <div class="row mb-4">
          <label for="content" class="col-sm-4 col-form-label">{{ $t(textArr[3].t) }}
            &nbsp;<span style="border:1px solid red; color:red;">{{ $t(textArr[6].t) }}</span>
          </label>
          <div class="col-sm-8">
            <textarea v-model="content" class="form-control" id="content" rows="4"
              :placeholder="$t(textArr[4].t)"></textarea>
          </div>
        </div>

        <button type="button" @click="showSlide" class="btn btn-outline-dark btn-lg" style="margin-bottom: 1rem;"
          :disabled="submittingFlg" data-bs-toggle="modal" data-bs-target="#subFormBackdrop">{{ $t(textArr[5].t)
          }}</button>
      </div>

      <div class="col-md-4">
        <h4>{{ $t(textArr[7].t) }}</h4>
        <h5>icgplancontact@gmail.com</h5>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" ref="modalRef" id="subFormBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
      tabindex="-1" aria-labelledby="subFormBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <slideVerify ref="refreshSlider" @onSuccess="subForm"></slideVerify>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            <div v-show="submittingFlg" class="loading-spinner">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Api from '@/js/api'
import ContactForm from '@/js/models/contact.data'
import slideVerify from '@/components/Slider.vue'

export default {
  name: 'Contact',
  components: { slideVerify },
  data: function () {
    return {
      textArr: [
        { t: 'contact.name' },
        { t: 'contact.inquirySubject' },
        { t: 'contact.email' },
        { t: 'contact.content' },
        { t: 'contact.contentPlaceHolder' },
        { t: 'contact.subButton' },
        { t: 'contact.must' },
        { t: 'contact.contact' },
      ],
      name: '',
      inquirySubject: '',
      email: '',
      content: '',
      submittingFlg: false,
      errors: [],
    };
  },
  mounted() {
  },
  methods: {
    subForm() {
      this.submittingFlg = true;
      const contact = new ContactForm();
      contact.name = this.name;
      contact.inquirySubject = this.inquirySubject;
      contact.email = this.email;
      contact.content = this.content;

      Api.contact(contact).then(res => {
        if (res.result == "success") {
          this.name = '';
          this.inquirySubject = '';
          this.email = '';
          this.content = '';
          this.errors = [];
          alert(res.message);
        } else {
          this.errors = _.assign([], res.errors);
        }
      }).catch((e) => {
        console.log(e);
      }).finally(() => {
        this.submittingFlg = false;
        this.closeModal();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    },
    closeModal() {
      setTimeout(() => {
        const modalElement = this.$refs.modalRef;
        const dismissButton = modalElement.querySelector('[data-bs-dismiss="modal"]');
        if (dismissButton instanceof HTMLElement) {
          dismissButton.click();
        }
      }, 1000);
      setTimeout(() => {
        this.$refs.refreshSlider.resetSlider();
      }, 1500);
    },
  }
}
</script>
<style>
.btn-close {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
}

.loading-spinner {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
