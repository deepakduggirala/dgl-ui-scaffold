<template>
  <v-navigation-drawer expand-on-hover permanent dark color="#7a1705" class="elevation-8">
    <v-list>

      <!-- TODO nav change -->
      <!-- TODO about page -->
      <v-list-item @click="navChange()" to="about">
        <v-list-item-action>
          <img src="../assets/cmg_logo_small.png" alt="CMG-SCA LOGO" />
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="title"> CMG-SCA </v-list-item-title>
          <!-- <v-list-item-subtitle v-if="$store.state.auth.uid">
            <div class="caption">Logged in as {{ $store.state.auth.uid }}</div>
          </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mb-5"></v-divider>

      <v-list-item v-for="item in user_items" :value="item.active" :key="item.title" :to="item.path">
        <v-list-item-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <span v-if="isAdmin">
        <v-divider class="mb-5"></v-divider>
        <v-list-item v-for="item in admin_items" :value="item.active" :key="item.title" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>

      <v-divider class="mb-10"></v-divider>

      <v-list-item v-for="item in bottom_items" :value="item.active" :key="item.title" :to="item.path">
        <v-list-item-action>
          <v-icon>{{ item.action }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>


    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const isAdmin = ref(true)
const user_items = ref([
  {
    action: 'mdi-flask',
    title: 'Projects',
    path: '/projects',
  },
  {
    action: 'mdi-chart-gantt',
    title: 'Tracks',
    path: '/tracks',
  },
  {
    action: 'mdi-chart-timeline',
    title: 'Sessions',
    path: '/sessions',
  },
])

const bottom_items = ref([
  {
    action: 'mdi-information',
    title: 'About',
    path: '/about',
  },
  {
    action: 'mdi-account-details',
    title: 'Profile',
    path: '/profile',
  },
  {
    action: 'mdi-logout-variant',
    title: 'Logout',
    path: '/signout',
  },
])

const admin_items = ref([
  {
    action: 'mdi-monitor-dashboard',
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    action: 'mdi-dna',
    title: 'Sequencing Runs',
    path: '/runs',
  },
  {
    action: 'mdi-file-lock',
    title: 'Data Products',
    path: '/dataproducts',
  },
  {
    action: 'mdi-transition',
    title: 'Conversions',
    path: '/conversions',
  },
  {
    action: 'mdi-folder-upload',
    title: 'Data Uploader',
    path: '/datauploader',
  },
  {
    action: 'mdi-table-account',
    title: 'User Management',
    path: '/users',
  },
  {
    action: 'mdi-account-multiple',
    title: 'Group Management',
    path: '/groups',
  },
  // {
  //   action: 'mdi-delete-empty-outline',
  //   title: 'Data Cleanup',
  //   path: '/clean',
  // },
  {
    action: 'mdi-format-list-bulleted',
    title: 'Stats/Tracking',
    path: '/stats',
  },
])


function navChange() {
  console.log('navChange')
}
</script>

<style>
a {
  text-decoration: none !important;
}

.v-list {
  background-image: none !important;
}
</style>