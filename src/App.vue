<template>
  <div id="app">
     <AppHeader />
     <AppHome />
     <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppHome from './components/AppHome.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHome,
    AppFooter
  }
}
</script>