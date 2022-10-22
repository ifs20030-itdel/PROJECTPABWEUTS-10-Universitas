<template>
  <!-- ======= Header ======= -->
 <PanduanAtas />
 <!-- End Header -->

  <!--Content-->
<HomePage />
  <!--EndContent-->

  <!-- ======= Footer ======= -->
    <ItemFooter />
  <!-- End Footer -->

</template>

<script>

//Header and Footer
import ItemFooter from "./components/ItemFooter.vue";
import PanduanAtas from "./components/PanduanAtas.vue";

//Views
import HomePage from "./views/HomePage.vue";

export default{
    name: "App",
    components: {
      ItemFooter,
      PanduanAtas,
      HomePage,
    },
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
