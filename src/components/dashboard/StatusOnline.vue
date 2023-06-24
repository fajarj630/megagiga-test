<template>
  <b-list-group class="my-4">
    <b-list-group-item variant="primary" class="py-3">
      <h4 class="mb-0">Online</h4>
    </b-list-group-item>
    <b-list-group-item>
      <p class="my-2">hari online : {{ onlineDay }}</p>
      <p class="my-2">waktu online : {{ onlineTime }}</p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {
  props: ['onlineDay', 'onlineTime']
}
</script>