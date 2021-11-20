<template>
  <v-container fluid class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            :src="require('@/assets/sidebar.jpeg')"
            max-width="120"
            class="mx-auto mb-6"
          >

          </v-img>
        </router-link>
        <v-card
          width="460"
        >
          <v-card-text class="text-center px-12 py-16">
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <v-form @submit.prevent="signUp">
                <div class="text-h4 font-weight-black mb-6">
                  회원가입
                </div>
                <validation-provider
                  v-slot="{ errors }"
                  name="이메일"
                  :rules="{
                    required: true,
                    email: true
                  }"
                >
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호"
                  :rules="{
                    required: true
                  }"
                >
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="비밀번호 확인"
                  :rules="{
                    required: true,
                    confirmed: '비밀번호'
                  }"
                >
                  <v-text-field
                    v-model="passwordConfirm"
                    label="비밀번호 확인"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  ></v-text-field>
                </validation-provider>

                <v-btn
                  type="submit"
                  block
                  x-large
                  rounded
                  color="primary"
                  class="mt-6"
                  :disabled="invalid"
                >
                  가입하기
                </v-btn>

              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      email: null,
      password: null,
      passwordConfirm: null
    }
  },
  methods: {
    async signUp() {
      const result = await this.$refs.observer.validate()
      if (result) {
        alert('회원가입 프로세스')
      }
    }
  }
}
</script>

<style>

</style>
