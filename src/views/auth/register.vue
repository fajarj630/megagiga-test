<template>
  <div class="container-auth">
    <form @submit.prevent="register" class="form-auth" novalidate>
      <div class="row">
        <div class="col-md-6 col-sm-12 background-side">
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?size=626&ext=jpg&ga=GA1.2.1787197816.1687511795&semt=sph"
            alt="">
        </div>
        <div class="col-md-6 col-sm-12 form-side">
          <h2 class="login-title">Register Page</h2>
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input type="username" class="form-control" name="username" v-validate="'required'" v-model="payload.username" required>
            <span class="text-sm text-danger"
              v-show="errors.has('username')">{{ errors.first("username") }}</span>
          </div>
          <div class="mb-3">
            <label for="profile name" class="form-label">Profile Name:</label>
            <input type="text" class="form-control" name="profile name" v-validate="'required'" v-model="payload.profileName" required>
            <span class="text-sm text-danger"
              v-show="errors.has('profile name')">{{ errors.first("profile name") }}</span>
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Password:</label>
            <input type="password" class="form-control" name="password" v-validate="'required'" v-model="payload.password" required>
            <span class="text-sm text-danger"
              v-show="errors.has('password')">{{ errors.first("password") }}</span>
          </div>
          <button type="submit" class="btn btn-primary btn-login">Register</button>
          <a href="/login">Sudah punya akun</a>
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
          profileName: '',
          password: ''
        }
      }
    },
    methods: {
      register() {
        this.$validator.validateAll().then(async (res) => {
          if (!res) return false;

          try {
            this.$store.dispatch('auth/REGISTER', this.payload).then(() => {
              this.$swal("Success", "Success register, now you can login", "success").then(() => {
                this.$router.push('/login')
              })
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