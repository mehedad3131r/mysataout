<template>
  <t-modal :click-to-close="false" name="auth">
    <form class="grid grid-cols-1 gap-5" @submit.prevent="login">
      <template slot="close">
        <button
          type="button"
          class="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
        >
          &#9747;
        </button>
      </template>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="card-body p-5 text-center login-winsview">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase sigin77">Sign In</h2>

                <p class="label90">Email or Username*</p>
                <div class="form-outline form-white mb-4">
                  <t-input
                    v-model="user.email"
                    class="form-outline form-white mb-4"
                    variant="strong"
                    placeholder="Email"
                  ></t-input>
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>
                <p class="label90">Password*</p>
                <div class="form-outline form-white mb-4">
                  <t-input
                    v-model="user.password"
                    class="form-control form-control-lg"
                    variant="strong"
                    type="password"
                    placeholder="password"
                  ></t-input>
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>
                <t-button type="submit" variant="primary" class="btn logsub">
                  Sign In
                </t-button>
                <div class="social321">
                  <div class="so77 fbsocial">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      data-v-a23d6d69=""
                    >
                      <path
                        d="
                    M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368
                    V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222
                    c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"
                        data-v-a23d6d69=""
                      ></path>
                    </svg>
                  </div>
                  <div class="so77 googlesocial">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      data-v-a23d6d69=""
                    >
                      <path
                        d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"
                        data-v-a23d6d69=""
                      ></path>
                    </svg>
                  </div>
                  <div class="so77 linesocial">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      data-v-a23d6d69=""
                    >
                      <path
                        d="M25.12,44.521c-2.114,1.162-2.024-0.549-1.933-1.076c0.054-0.314,0.3-1.787,0.3-1.787c0.07-0.534,0.144-1.36-0.067-1.887 c-0.235-0.58-1.166-0.882-1.85-1.029C11.48,37.415,4.011,30.4,4.011,22.025c0-9.342,9.42-16.943,20.995-16.943S46,12.683,46,22.025 C46,32.517,34.872,39.159,25.12,44.521z M18.369,25.845c0-0.56-0.459-1.015-1.023-1.015h-2.856v-6.678 c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015v7.694c0,0.561,0.459,1.016,1.023,1.016h3.879 C17.91,26.863,18.369,26.406,18.369,25.845z M21.357,18.152c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015 v7.694c0,0.561,0.459,1.016,1.023,1.016c0.565,0,1.023-0.456,1.023-1.016V18.152z M30.697,18.152c0-0.56-0.459-1.015-1.023-1.015 c-0.565,0-1.025,0.455-1.025,1.015v4.761l-3.978-5.369c-0.192-0.254-0.499-0.406-0.818-0.406c-0.11,0-0.219,0.016-0.325,0.052 c-0.419,0.139-0.7,0.526-0.7,0.963v7.694c0,0.561,0.46,1.016,1.025,1.016c0.566,0,1.025-0.456,1.025-1.016v-4.759l3.976,5.369 c0.192,0.254,0.498,0.406,0.818,0.406c0.109,0,0.219-0.018,0.325-0.053c0.42-0.137,0.7-0.524,0.7-0.963V18.152z M36.975,20.984 h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015c0-0.56-0.46-1.015-1.025-1.015h-3.879c-0.565,0-1.023,0.455-1.023,1.015 c0,0.001,0,0.001,0,0.003v3.842v0.001c0,0,0,0,0,0.001v3.845c0,0.561,0.46,1.016,1.023,1.016h3.879 c0.565,0,1.025-0.456,1.025-1.016c0-0.56-0.46-1.015-1.025-1.015h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015 c0-0.561-0.46-1.016-1.025-1.016V20.984z"
                        data-v-a23d6d69=""
                      ></path>
                    </svg>
                  </div>
                  <div class="so77 othersocial">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      data-v-a23d6d69=""
                    >
                      <path
                        d="M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z"
                        data-v-a23d6d69=""
                      ></path>
                    </svg>
                  </div>
                </div>

                <p class="small forget897">
                  <a class="text-white-50 kjh50" href="#!">Forgot password?</a>
                </p>
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account?
                  <button
                    type="button"
                    class="reg8767 fw-bold"
                    @click="showRegister"
                  >
                    Register an Account
                  </button>
                </p>
                <p class="captcha99">
                  Winsview is protected by hCaptcha. hCaptcha
                  <a
                    class="blue"
                    href="https://www.hcaptcha.com/privacy"
                    target="_blank"
                  >
                    Privacy Policy</a
                  >and
                  <a
                    class="blue"
                    href="https://www.hcaptcha.com/terms"
                    target="_blank"
                    >Terms of Service</a
                  >apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </t-modal>
</template>
<script>
import sectionSocial from './section-social.vue'
export default {
  components: { sectionSocial },
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('local', { data: this.user })
      if (this.$auth.loggedIn) {
        this.$modal.hide('auth')
      }
    },
    showRegister() {
      this.$modal.hide('auth')
      this.$modal.show('register')
    },
  },
}
</script>

<style></style>
