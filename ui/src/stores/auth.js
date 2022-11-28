import { acceptHMRUpdate, defineStore } from 'pinia'

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))