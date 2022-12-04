<template>
  <v-navigation-drawer permanent color="#7a1705" class="text-white">

    <v-list>
      <v-list-item value="about">
        <template v-slot:prepend>
          <div class="mr-5">
            <img src="src/assets/cmg_logo_small.png" alt="CMG-SCA LOGO" />
          </div>
        </template>

        <v-list-item-title style="letter-spacing: .05em !important;"
          class="text-h5 font-weight-medium">DGL</v-list-item-title>
        <v-list-item-subtitle>Logged in as deduggi</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider color="grey-darken-4" class="mb-2"></v-divider>


    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in user_items" :key="i" :prepend-icon="item.icon" :title="item.title"
        :value="item.path" :to="item.path">
      </v-list-item>
    </v-list>

    <div v-if="isAdmin">
      <v-divider class="mb-2" color="grey-darken-4"></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-for="(item, i) in admin_items" :key="i" :prepend-icon="item.icon" :title="item.title"
          :value="item.path"></v-list-item>
      </v-list>
    </div>

    <v-divider class="mb-2" color="grey-darken-4"></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in bottom_items" :key="i" :prepend-icon="item.icon" :title="item.title"
        :value="item.path"></v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script setup>


const isAdmin = ref(true)
const user_items = ref([
  {
    icon: 'mdi-flask',
    title: 'Projects',
    path: '/projects',
  },
  {
    icon: 'mdi-chart-gantt',
    title: 'Tracks',
    path: '/tracks',
  },
  {
    icon: 'mdi-chart-timeline',
    title: 'Sessions',
    path: '/sessions',
  },
])

const admin_items = ref([
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    icon: 'mdi-dna',
    title: 'Sequencing Runs',
    path: '/runs',
  },
  {
    icon: 'mdi-file-lock',
    title: 'Data Products',
    path: '/dataproducts',
  },
  {
    icon: 'mdi-transition',
    title: 'Conversions',
    path: '/conversions',
  },
  {
    icon: 'mdi-folder-upload',
    title: 'Data Uploader',
    path: '/datauploader',
  },
  {
    icon: 'mdi-table-account',
    title: 'User Management',
    path: '/users',
  },
  {
    icon: 'mdi-account-multiple',
    title: 'Group Management',
    path: '/groups',
  },
  // {
  //   icon: 'mdi-delete-empty-outline',
  //   title: 'Data Cleanup',
  //   path: '/clean',
  // },
  {
    icon: 'mdi-format-list-bulleted',
    title: 'Stats/Tracking',
    path: '/stats',
  },
])

const bottom_items = ref([
  {
    icon: 'mdi-information',
    title: 'About',
    path: '/about',
  },
  {
    icon: 'mdi-account-details',
    title: 'Profile',
    path: '/profile',
  },
  {
    icon: 'mdi-logout-variant',
    title: 'Logout',
    path: '/signout',
  },
])




function navChange() {
  console.log('navChange')
}
</script>

<style>

</style>