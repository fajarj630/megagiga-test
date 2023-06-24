<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 m-auto">
      <div class="card">
        <div class="card-header">
          <h4 class="my-2">Tambah barang</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="tambahBarang">
            <div class="mb-3">
              <!-- Nama Barang -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Nama Barang</p>
                </div>
                <div class="col-8">
                  <input type="text" class="form-control" v-validate="'required'" name="nama barang"
                    v-model="payload.namaBarang">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('nama barang')">{{ errors.first("nama barang") }}</span>
                </div>
              </div>
              <!-- End Nama Barang -->

              <!-- Harga Barang -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Harga Barang</p>
                </div>
                <div class="col-8">
                  <input type="number" class="form-control" v-validate="'required'" name="harga barang"
                    v-model="payload.harga">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('harga barang')">{{ errors.first("harga barang") }}</span>
                </div>
              </div>
              <!-- End Harga Barang -->

              <!-- Stok Barang -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Stok Barang</p>
                </div>
                <div class="col-8">
                  <input type="number" class="form-control" v-validate="'required'" name="stok barang"
                    v-model="payload.stok">
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('stok barang')">{{ errors.first("stok barang") }}</span>
                </div>
              </div>
              <!-- End Stok Barang -->

              <!-- Stok Barang -->
              <div class="row mb-3">
                <div class="col-4 text-left">
                  <p class="mb-0 mx-3 mt-2">Supplier Barang</p>
                </div>
                <div class="col-8">
                  <v-select :options="listSupplier" label="namaSupplier" v-model="payload.supplier"
                    v-validate="'required'" name="supplier barang">
                    <li slot="list-footer">
                      <hr class="my-2">
                      <b-pagination @mouseup.native.capture.stop class="mb-1 mx-2 float-right"
                        :hide-goto-end-buttons="true" pills v-model="pagination.offset" @change="onPageChange"
                        :total-rows="totalSupplier" :per-page="pagination.limit"></b-pagination>
                    </li>
                  </v-select>
                  <span class="text-sm text-danger float-left"
                    v-show="errors.has('supplier barang')">{{ errors.first("supplier barang") }}</span>
                </div>
              </div>
              <!-- End Stok Barang -->

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
          namaBarang: '',
          harga: '',
          stok: '',
          supplier: null
        },
        pagination: {
          offset: 1,
          limit: 10
        }
      }
    },
    computed: {
      listSupplier() {
        return this.$store.getters['supplier/list']
      },
      totalSupplier() {
        return this.$store.getters['supplier/pagination']
      },
    },
    mounted() {
      this.getListSupplier();
    },
    methods: {
      getListSupplier() {
        this.$store.dispatch('supplier/GET_LIST_SUPPLIER', this.pagination)
      },
      onPageChange() {
        this.getListSupplier();
      },
      tambahBarang() {
        this.$validator.validateAll().then(async (res) => {
          if (!res) return false;

          this.$store.dispatch('barang/ADD_BARANG', this.payload).then((res) => {
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