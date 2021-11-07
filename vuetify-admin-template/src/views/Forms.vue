<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        Form Validation
      </v-card-title>
      <v-card-text>
        <validation-observer>
          <v-form>
            <validation-provider
              rules="max:10"
              v-slot="{errors}"
              name="Name"
            >
              <v-text-field
                label="name"
                v-model="name"
                :error-messages="errors"
              >
              </v-text-field>
            </validation-provider>
              <v-text-field
                label="PhoneNumber"
              >
              </v-text-field>
            <validation-provider>
              <v-text-field
                label="E-Mail"
              >

              </v-text-field>
            </validation-provider>
              <v-select
                label="Select"
                :items="items"
              >
              </v-select>
            <validation-provider>
              <v-checkbox
                label="CheckBox"
                value="1"
              >

              </v-checkbox>
            </validation-provider>

            <v-btn
              type="submit"
              color="primary"
              class="mr-4"
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
import { extend, ValidationProvider, ValidationObserver} from 'vee-validate'
extend('max', (value, param) => {
  const limit = param[0]
  if (value && value.length > 20){
    return `해당 필드는 ${limit}자를 초과할 수 없습니다.`
  }
  return true;
})
export default {
  name: 'Forms',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data(){
    return {
      name: null,
      items: [
        { text: '아이템1', value: 1},
        { text: '아이템2', value: 2},
        { text: '아이템3', value: 3},
      ]
    }
  }
}
</script>

<style>

</style>
