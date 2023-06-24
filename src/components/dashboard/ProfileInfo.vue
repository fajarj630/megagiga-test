<template>
  <div class="card">
    <div class="card-header p-0">
      <img
        src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?size=626&ext=jpg&ga=GA1.1.1787197816.1687511795&semt=sph"
        width="100%" alt="">
    </div>
    <div class="card-body profile-name">
      <h3 class="mb-0">{{ profileName }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profileName']
}
</script>