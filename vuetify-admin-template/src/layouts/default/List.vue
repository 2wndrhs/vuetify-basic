<template>
  <v-list
    dense
    nav
    >
        <template
            v-for="(item, index) in items"
        >
            <default-list-item
                :key="index"
                :item="item"
            >
            </default-list-item>
        </template>
    </v-list>
</template>

<script>
import DefaultListItem from './ListItem.vue'
export default {
name: 'DefaultList',
components: {
    DefaultListItem
},
props: {
    items: {
        type: Array,
        default: () => ([]),
    }
}
}
</script>

<style>

</style>