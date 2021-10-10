<template>
  <v-container 
    fluid
    class="red"
  >
    <v-card class="yellow pa-3">
      <!-- align은 v-row에 적용, 자식 요소들의 수직 정렬을 변경 -->
      <v-row 
        :style="{height: '150px'}"
        class="primary"
        dense
        align="center"
      >
        <!-- align-self는 v-col에 적용, 자기 자신의 수직 정렬을 변경 -->
        <v-col
          align-self="end"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
        <!-- <v-spacer></v-spacer> 컴포넌트 사이 여백 주기 -->
        <!-- cols="auto"는 cols에 콘텐츠 크기만큼을 할당-->
        <v-col
          cols="auto"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
        <v-col
          align-self="start"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
      </v-row>
      <!-- justify는 v-row에 적용, 자식 요소들의 수평 정렬을 변경 -->
      <v-row
        justify="space-around"
      >
        <v-col
         cols="auto"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
        <v-col
          cols="auto"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
        <v-col
          cols="auto"
        >
          <v-card 
            class="pa-3"
            outlined
          >
            content
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>