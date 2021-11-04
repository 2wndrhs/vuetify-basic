<template>
  <v-list-group
    :prepend-icon="item.icon"
  >
    <template v-slot:activator>
        <v-list-item-content>
            <v-list-item-title>
                {{item.title}}
            </v-list-item-title>
        </v-list-item-content>
    </template>
    <template
      v-for="(child, index) in item.items"
    >
      <default-list-group
        :key="`sub-group-${index}`"
        v-if="child.items"
        :item="child"
      >
      </default-list-group>
      <default-list-item
        v-else
        :key="`child-${index}`"
        :item="child"
      >
      </default-list-item>
    </template>
  </v-list-group>
</template>

<script>
import DefaultListGroup from './ListGroup.vue'
import DefaultListItem from './ListItem.vue'
export default {
    name: 'DefaultListGroup',
    components: {
      DefaultListItem,
      DefaultListGroup
    },
    props: {
        item: {
            type: Object,
            default: () => ({}),
        }
    }
}
</script>

<style>

</style>