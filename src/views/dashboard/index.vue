<template>
  <div class="mx-4 mt-4">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <!-- Profile Section -->
        <ProfileInfo :profileName="profileName" />
        <!-- End Profile Section -->

        <!-- Menu Section -->
        <Menu :currentMenu="currentMenu" @changeMenu="changeMenu" />
        <!-- End Menu Section -->

        <!-- Status Online Section -->
        <StatusOnline :onlineDay="onlineDay()" :onlineTime="onlineTime()" />
        <!-- End Status Online Section -->
      </div>
      <div class="col-md-9 col-sm-12 text-left text-primary">
        <h3 class="mb-4">Dashboard</h3>
        <div class="card mb-2">
          <div class="card-header">
            <!-- Title -->
            <h4 class="my-2 float-left">{{ currentMenu }}</h4>
            <!-- End Title -->
            
            <!-- Export Excel -->
            <download-excel
              class="btn btn-success float-right my-1"
              :data="currentMenu === 'Barang' ? listBarang : listSupplier"
              :fields="currentMenu === 'Barang' ? columnExportBarang : columnExportSupplier"
              name="filename.xlsx"
            >
              Export Excel
            </download-excel>
            <!-- End Export Excel -->
            
            <!-- Tambah -->
            <button class="btn btn-primary float-right my-1 mx-1"
              @click.prevent="currentMenu === 'Barang' ? $router.push('barang/tambah') : $router.push('supplier/tambah')">Tambah
              {{ currentMenu }}</button>
            <!-- End Tambah -->
          </div>
          <div class="card-body">
            <vue-good-table :columns="currentMenu === 'Barang' ? columnBarang : columnSupplier"
              :rows="currentMenu === 'Barang' ? listBarang : listSupplier"
              :total-rows="currentMenu === 'Barang' ? totalBarang : totalSupplier" :search-options="{
                enabled: false
              }" :sort-options="{
                enabled: false,
              }" :pagination-options="{
                enabled: true,
                mode: 'pages',
                position: 'bottom',
                perPage: 10,
                perPageDropdown: [10, 50, 100],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page',
                allLabel: 'All',
              }" @on-page-change="onPageChange" @on-per-page-change="onPageChange">
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field === 'no'">
                  {{ (props.row.originalIndex + 1) + ((pagination.offset - 1) * pagination.limit) }}
                </span>
                <template v-else-if="props.column.field === 'action'">
                  <button class="btn btn-danger mx-1" @click.prevent="deleteData(props.row)">Hapus</button>
                  <button class="btn btn-warning mx-1" @click.prevent="updateData(props.row)">Update</button>
                </template>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import ProfileInfo from '@/components/dashboard/ProfileInfo.vue'
  import Menu from '@/components/dashboard/Menu.vue'
  import StatusOnline from '@/components/dashboard/StatusOnline.vue'
  import {
    columnBarang,
    columnExportBarang,
    columnSupplier,
    columnExportSupplier
  } from '@/columnTable';
  export default {
    name: 'dashboard',
    components: {
      ProfileInfo,
      Menu,
      StatusOnline
    },
    created() {
      this.getListBarang();
    },
    data() {
      return {
        currentMenu: 'Barang',
        pagination: {
          offset: 1,
          limit: 10
        }
      }
    },
    computed: {
      profileName() {
        return localStorage.getItem('profileName')
      },
      // Barang
      columnBarang() {
        return columnBarang;
      },
      columnExportBarang() {
        return columnExportBarang;
      },
      listBarang() {
        return this.$store.getters['barang/list']
      },
      totalBarang() {
        return this.$store.getters['barang/pagination']
      },
      // Supplier
      columnSupplier() {
        return columnSupplier;
      },
      columnExportSupplier() {
        return columnExportSupplier;
      },
      listSupplier() {
        return this.$store.getters['supplier/list']
      },
      totalSupplier() {
        return this.$store.getters['supplier/pagination']
      }
    },
    methods: {
      onlineDay() {
        const onlineData = localStorage.getItem('onlineStatus')
        return moment(onlineData).format('YYYY-MM-D')
      },
      onlineTime() {
        const onlineData = localStorage.getItem('onlineStatus')
        return moment(onlineData).format('HH:mm:ss')
      },
      changeMenu(data) {
        if (this.currentMenu !== data) {
          this.pagination.offset = 1;
          this.pagination.limit = 10;
        }

        this.currentMenu = data;
        if (data === 'Barang') {
          this.getListBarang();
        } else {
          this.getListSupplier();
        }
      },
      // Barang
      getListBarang() {
        this.$store.dispatch('barang/GET_LIST_BARANG', this.pagination)
      },
      deleteBarang(id) {
        this.$swal({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00D97E",
          cancelButtonColor: "#E63757",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('barang/DELETE_BARANG', id).then(() => {
              this.$swal("Deleted!", "Data has been deleted.", "success")
              this.getListBarang()
            }).catch(() => {
              this.$swal("Error", "Error while delete data", "error")
            })
          }
        })
      },
      // Supplier
      getListSupplier() {
        this.$store.dispatch('supplier/GET_LIST_SUPPLIER', this.pagination)
      },
      deleteSupplier(id) {
        this.$swal({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#00D97E",
          cancelButtonColor: "#E63757",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('supplier/DELETE_SUPPLIER', id).then(() => {
              this.$swal("Deleted!", "Data has been deleted.", "success")
              this.getListSupplier()
            }).catch(() => {
              this.$swal("Error", "Error while delete data", "error")
            })
          }
        })
      },
      // Table Action
      onPageChange(param) {
        this.pagination.offset = param.currentPage
        this.pagination.limit = param.currentPerPage

        if (this.currentMenu === 'Barang') {
          this.getListBarang()
        } else {
          this.getListSupplier()
        }
      },
      updateData(data) {
        if (this.currentMenu === 'Barang') {
          this.$router.push(`/barang/update/${data.id}`)
        } else {
          this.$router.push(`/supplier/update/${data.id}`)
        }
      },
      deleteData(data) {
        if (this.currentMenu === 'Barang') {
          this.deleteBarang(data.id)
        } else {
          this.deleteSupplier(data.id)
        }
      }
    }
  }
</script>

<style>
  .profile-name {
    background: #CFE2FE;
  }
</style>