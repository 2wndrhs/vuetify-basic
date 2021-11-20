<template>
  <v-container fluid>
    <v-card class="mt-5">
      <v-card-text>
        <app-text-field
          label="이름"
          v-model="name"
          :counter="10"
        >
        </app-text-field>
        <app-text-field
          label="나이"
          v-model="age"
          :counter="10"
        >
        </app-text-field>
        <app-text-field
          label="닉네임"
          v-model="nickname"
          :counter="10"
        >
        </app-text-field>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AppTextField from '@/components/app/TextField.vue'
export default {
  name: 'Forms',
  components: {
    AppTextField,
  },
  data(){
    return {
      name: null,
      age: null,
      nickname: null
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
