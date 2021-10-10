<template>
    <!-- vuetify는 12cols grid system을 적용 -->
  <v-conatiner>
    <v-row>
        <!-- cols속성은 v-col 컴포넌트 안에 정의 -->
        <v-col
            v-for="count in 12"
            :key="count"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="1"
        >
            <v-card class="pa-3">
                Hello
            </v-card>
        </v-col>
    </v-row>
  </v-conatiner>
</template>

<script>
export default {

}
</script>

<style>

</style>