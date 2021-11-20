<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer
          ref="observer"
          v-slot="{ invalid }"
        >
          {{ invalid }}
          <v-form @submit.prevent="submit">
            <validation-provider
              :rules="{
                required: true,
                max: 10
              }"
              name="이름"
              v-slot="{ errors }"
            >
              <v-text-field
                label="name"
                v-model="name"
                :counter="10"
                :error-messages="errors"
              >
              </v-text-field>
            </validation-provider>
            <validation-provider
              name="PhoneNumber"
              v-slot="{ errors }"
              :rules="{
                required: true,
                numeric: true,
                digits: 11
                }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="PhoneNumber"
                :counter="11"
                :error-messages="errors"
              >
              </v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="E-mail"
              :rules="{
                required: true,
                email: true
                }"
            >
              <v-text-field
                label="E-Mail"
                :error-messages="errors"
                v-model="email"
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Select"
              :rules="{
                required: true,
                }"
            >
              <v-select
                v-model="select"
                label="Select"
                :items="items"
                :error-messages="errors"
              >
              </v-select>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="CheckBox"
              :rules="{required: true}"
            >
              <v-checkbox
                v-model="checkbox"
                label="CheckBox"
                value="1"
                :error-messages="errors"
              >
              </v-checkbox>
            </validation-provider>

            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
              :disabled="invalid"
            >
              submit
            </v-btn>
            <v-btn color="primary">
              Clear
            </v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Forms',
  components: {
  },
  data(){
    return {
      name: null,
      phoneNumber: null,
      email: null,
      select: null,
      checkbox: null,
      customValue: null,
      items: [
        { text: '아이템1', value: 1},
        { text: '아이템2', value: 2},
        { text: '아이템3', value: 3},
      ]
    }
  },
  methods: {
    submit(){
      this.$refs.observer.validate()
        .then(result => {
          console.log('result: ', result)
          if (result) {
            alert('양식 제출')
          }
        })
    },
    clear(){
      this.name = null,
      this.phoneNumber = null,
      this.email = null,
      this.select = null,
      this.checkbox = null
    },
  }
}
</script>

<style>

</style>
