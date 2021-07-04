<template>
  <div>
    <Navbar />
    <Search />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Search from "../components/Search.vue";
export default {
  name: "secret",
  components: {
    Navbar,
    Footer,
    Search,
  },
};
</script>

<style></style>
