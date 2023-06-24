<template>
  <b-list-group class="mt-4">
    <b-list-group-item variant="primary" class="py-3">
      <h4 class="mb-0">Menu</h4>
    </b-list-group-item>
    <b-list-group-item button class="text-left" :active="currentMenu === 'Barang'" @click="changeMenu('Barang')">Barang</b-list-group-item>
    <b-list-group-item button class="text-left" :active="currentMenu === 'Supplier'" @click="changeMenu('Supplier')">Supplier</b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: ['currentMenu'],
  methods: {
    changeMenu(data) {
      this.$emit('changeMenu', data)
    }
  }
}
</script>