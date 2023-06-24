<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 m-auto">
      <div class="card">
        <div class="card-header">
          <h4 class="my-2">Tambah Supplier</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="tambahSupplier">
            <div class="mb-3">
              <!-- Nama Supplier -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Nama Supplier</p>
                </div>
                <div class="col-8">
                  <input type="text" class="form-control" v-validate="'required'" name="nama supplier"
                    v-model="payload.namaSupplier">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('nama supplier')">{{ errors.first("nama supplier") }}</span>
                </div>
              </div>
              <!-- End Nama Supplier -->

              <!-- Alamat Supplier -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Alamat Supplier</p>
                </div>
                <div class="col-8">
                  <input type="text" class="form-control" v-validate="'required'" name="alamat supplier"
                    v-model="payload.alamat">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('alamat supplier')">{{ errors.first("alamat supplier") }}</span>
                </div>
              </div>
              <!-- End Alamat Supplier -->

              <!-- No Telp Supplier -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">No Telp Supplier</p>
                </div>
                <div class="col-8">
                  <input type="text" class="form-control" v-validate="'required'" name="no telp supplier"
                    v-model="payload.noTelp">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('no telp supplier')">{{ errors.first("no telp supplier") }}</span>
                </div>
              </div>
              <!-- End No Telp Supplier -->

              <hr>

              <button class="btn btn-secondary float-left" @click.prevent="$router.go(-1)">Kembali</button>
              <button class="btn btn-primary float-right" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        payload: {
          namaSupplier: '',
          alamat: '',
          noTelp: ''
        }
      }
    },
    methods: {
      tambahSupplier() {
        this.$validator.validateAll().then(async (res) => {
          if (!res) return false;

          this.$store.dispatch('supplier/ADD_SUPPLIER', this.payload).then((res) => {
            if (res.status && res.status === 200) {
              this.$swal("Success", "Data has been added.", "success").then(() => {
                this.$router.go(-1);
              })
            } else {
              this.$swal("Error", "Error while add data", "error")
            }
          }).catch(() => {
            this.$swal("Error", "Error while add data", "error")
          })
        })
      }
    }
  }
</script>