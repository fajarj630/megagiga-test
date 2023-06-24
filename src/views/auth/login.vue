<template>
  <div class="container-auth">
    <form @submit.prevent="login" class="form-auth" novalidate>
      <div class="row">
        <div class="col-md-6 col-sm-12 background-side">
          <img src="https://img.freepik.com/free-vector/mobile-encryption-concept-illustration_114360-8357.jpg?size=626&ext=jpg" alt="">
        </div>
        <div class="col-md-6 col-sm-12 form-side">
          <h2 class="login-title">Login Page</h2>
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="text" class="form-control" name="username" v-validate="'required'" v-model="payload.username" required>
            <span class="text-sm text-danger"
              v-show="errors.has('username')">{{ errors.first("username") }}</span>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" name="password" v-validate="'required'" v-model="payload.password" required>
            <span class="text-sm text-danger"
              v-show="errors.has('password')">{{ errors.first("password") }}</span>
          </div>
          <button type="submit" class="btn btn-primary btn-login">Login</button>
          <a href="/register">Belum punya akun</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        payload: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        this.$validator.validateAll().then(async (res) => {
          if (!res) return false;

          try {
            this.$store.dispatch('auth/LOGIN', this.payload).then(() => {
              location.href = '/'
            }).catch(() => {
              this.$swal("Error", "Something went wrong", "error")
            });
          } catch (err) {
            this.$swal("Error", "Something went wrong", "error")
          }
        })
      }
    }
  }
</script>

<style>
  .background-side, .form-side {
    align-self: center;
  }

  .form-side {
    text-align: left;
    position: relative;
  }

  .login-title {
    position: absolute;
    top: -80px;
  }

  .btn-login {
    margin-right: 12px;
  }
</style>