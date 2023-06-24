<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="#" style="margin-left: 16px !important;">MARKETPLACE</b-navbar-brand>
      <p class="mb-0 logout-nav" @click.prevent="toLogout()">Logout</p>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    toLogout() {
      this.$store.dispatch('auth/LOGOUT')
    }
  }
}
</script>

<style>
  .logout-nav {
    position: absolute;
    right: 16px;
    color: white;
    cursor: pointer;
  }
</style>