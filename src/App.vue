<template>
  <div id="app">
    <Topbar v-if="path !== '/login' && path !== '/register'" />
    <router-view/>
    <Footer class="bg-primary text-white py-2">Marketplace</Footer>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
export default {
  computed: {
    path() {
      return window.location.pathname;
    }
  },
  components: {
    Topbar
  }
}
</script>

<style lang="scss">
html, body {
  margin:0;
  padding:0;
  height:100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
  width: 100% !important;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.row {
  height: calc(100% - 56px) !important;
  width: 100% !important;
}

.container-auth, .form-auth {
  height: 100% !important;
  width: 100% !important;
}

.text-left {
  text-align: left !important;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.m-auto {
  margin: auto;
}

.text-sm {
  font-size: 12px;
}
</style>
