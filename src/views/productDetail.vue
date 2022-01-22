
<template>
  <div class="slider-ban slider-area">
    <div class="slick-tract" style="opacity: 1; min-height: 400px;">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-xl-6 col-lg-7 col-md-8">
            <div class="hero-caption" style="margin-top: 100px;margin-left: 36px;">
              <h1 style="font-size: 78px">Our Products Detail</h1>
            </div>
          </div>
        </div>/
      </div>
    </div>
  </div>
  <div class="container pt-5 pb-5">
    <div class="row" v-if="Prod">
      <div class="col-6">
        <img
          :src="require('../assets/images/' + Prod.images)"
          alt
          style="width: 100%; height: 500px"
        />
      </div>
      <div class="col-6">
        <div class="pro-text" style="width: 100%; padding-top: 29px;">
          <h3>{{ Prod.name }}</h3>
          <p>Price: $ {{ Prod.price }}</p>
          <p>{{ Prod.description }}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, officiis optio ipsum cupiditate ducimus deserunt, perferendis voluptates accusantium necessitatibus id totam unde, veniam accusamus sapiente eos vel rem.</p>
          <p>Veniam, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt cupiditate, animi hic autem, quibusdam voluptates quis sed beatae officiis delectus ipsam eligendi deserunt? Reiciendis quae eius laudantium deserunt cum soluta!</p>
          <div class="d-flex">
            <div class="pt-3">
              <p class="d-flex pt-1">
                <button
                  type="submit"
                  style=" width: 50px; margin-right: 25px; background:#f04506; border-color: #f04506; color: #ffff;font-size: 23px;border-radius: 50%;height: 50px;"
                  v-on:click="onCountMinus()"
                >-</button>
                <input
                  type="text"
                  v-bind:value="`${count}`"
                  style="width: 50px; text-align: center;"
                />

                <button
                  type="submit"
                  style=" width: 50px;margin-left: 25px; background:#f04506; border-color: #f04506;color: #ffff;font-size: 23px;border-radius: 50%;height: 50px;"
                  v-on:click="onCount()"
                >+</button>
              </p>
            </div>
            <div style="margin-top: 21px;" class="text-add-cart">
              <a href class="btn-header" style="margin-left: 60px;">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container pt-3 pb-5">
    <div v-if="Prod">
      <tabs
        :options="{ useUrlFragment: false }"
        @clicked="tabClicked"
        @changed="tabChanged"
        nav-item-class="nav-item"
      >
        <tab name="Description">
          <h3>Description</h3>
          {{ Prod.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni aliquam possimus magnam et placeat cupiditate facilis. Odio, ea cum excepturi fuga, voluptatibus aut provident magnam perspiciatis voluptatum expedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus aperiam architecto laudantium perferendis aliquid asperiores, nulla aut voluptate magnam commodi? Rerum repellendus doloribus nulla dignissimos laudantium accusantium consequuntur, alias minima!
        </tab>
        <tab name="Review">
          <h5>Your email address will not be published. Required fields are marked *</h5>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="review">Your Review*</label>
              <textarea
                cols="30"
                rows="6"
                style="width: 100%"
                v-model="quiz.review"
                :class="{ error: errorReview.status, success: successReview.status }"
              ></textarea>
              <p class="text-error" v-if="errorReview.status">{{ errorReview.text }}</p>
              <p class="success-text" v-if="successReview.status">{{ successReview.text }}</p>
            </div>
            <div class="form-group">
              <label for="name">Name*</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder
                name="name"
                :class="{ error: nameError.status, success: successName.status }"
                v-model="quiz.name"
              />
              <p class="text-error" v-if="nameError.status">{{ nameError.text }}</p>
              <p class="success-text" v-if="successName.status">{{ successName.text }}</p>
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <input
                type="text"
                class="form-control"
                id="pwd"
                :class="{ error: error.status, success: successEmail.status }"
                placeholder
                name="pswd"
                v-model="quiz.email"
              />
              <p class="text-error" v-if="error.status">{{ error.text }}</p>
              <p class="success-text" v-if="successEmail.status">{{ successEmail.text }}</p>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              style="background: #f55d05;font-size: 14px;font-weight: 600;padding: 12px 45px; border: orange;"
            >Submit</button>
          </form>
        </tab>
      </tabs>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Tabs, Tab } from 'vue3-tabs-component';
export default {
  data() {
    return {
      Prod: null,
      errors: null,
      count: 1,
      quiz: {
        name: "",
        email: "",
        review: "",
      },
      nameError: {
        text: "",
        status: false,
      },
      error: {
        text: "",
        status: false,
      },
      successName: {
        text: "",
        status: false,
      },
      successEmail: {
        text: "",
        status: false,
      },
      errorReview: {
        text: "",
        status: false,
      },
      successReview: {
        text: "",
        status: false,
      },
    }
  },
  components: {
    Tabs,
    Tab
  },
  methods: {
    tabClicked(selectedTab) {
      console.log('Current tab re-clicked:' + selectedTab.tab.name)
    },
    tabChanged(selectedTab) {
      console.log('Tab changed to:' + selectedTab.tab.name)
    },
    onCount() {
      this.count += 1
    },
    onCountMinus() {
      if (this.count > 0) {
        this.count -= 1
      }
    },
    onSubmit() {
      console.log(this.quiz)
      if (this.quiz.name.length == 0) {
        this.nameError = {
          text: "Tên không được để trống",
          status: true
        }
      }
      else if (this.quiz.name.length < 6 || this.quiz.name.length > 18) {
        this.nameError = {
          text: "Tên phải từ 6 đến 18 kí tự.",
          status: true
        }


      } else if (this.quiz.name.length > 5 && this.quiz.name.length < 19) {
        this.successName = {
          text: "Thành công!",
          status: true
        }
      } else {
        this.nameError = {
          text: "",
          status: false
        }
      }
      const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
      if (this.quiz.email.length == 0) {
        this.error = {
          text: "Email không được để trống",
          status: true
        }
      } else if (!regex.test(this.quiz.email)) {
        this.error = {
          text: "Email không đúng định dạng",
          status: true
        }
      } else if (regex.test(this.quiz.email)) {
        this.successEmail = {
          text: "Thành công!",
          status: true,
        }
      } else {
        this.error = {
          text: "",
          status: false
        }
      }

      if (this.quiz.review.length == 0) {
        this.errorReview = {
          text: "Review không được để trống",
          status: true,
        }
      } else if (this.quiz.review.length > 0) {
        this.successReview = {
          text: "Thành công!",
          status: true,
        }
      } else {
        this.errorReview = {
          text: "",
          status: false,
        }
      }
    },
  },
  mounted() {
    axios.get("https://61c9c9e820ac1c0017ed8e5a.mockapi.io/Prod?id=" + this.$route.params.id)
      .then((response) => {
        this.Prod = response.data[0];
        console.log(this.Prod.name)
      })
      .catch((errors) => {
        console.log(errors);
      });

  },

}
</script>