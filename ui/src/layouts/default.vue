<template>
  <v-app>
    <Drawer @navChange="updateActive"></Drawer>
    <v-container fluid class="main mb-4 ml-2 mr-1">
      <v-main class="mt-4">
        <div class="text-h4 font-weight-light">
          <v-icon large class="pb-2 ml-1">{{ active_page.action }}</v-icon>
          {{ active_page.title }}
        </div>
        <v-divider class="mb-3"></v-divider>
        <transition name="fade">
          <router-view class="mt-4"></router-view>
        </transition>
      </v-main>
    </v-container>

    <Footer />
  </v-app>
</template>

<script setup>
const active_page = ref({
  action: 'mdi-flask',
  title: 'Projects',
})

function updateActive(navItem) {
  this.active_page.action = navItem.action
  this.active_page.title = navItem.title
}
</script>