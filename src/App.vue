<template>
  <!-- ======= Header ======= -->
 <PanduanAtas />
 <!-- End Header -->

  <!--Content-->
<HomePage />
  <!--EndContent-->
<router-view />
  <!-- ======= Footer ======= -->
    <ItemFooter />
  <!-- End Footer -->

</template>

<script>


//Header and Footer
import ItemFooter from "./components/ItemFooter.vue";
import PanduanAtas from "./components/PanduanAtas.vue";

export default{
    name: "App",
    components: {
      ItemFooter,
      PanduanAtas,
    },
  };
</script>