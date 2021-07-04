<template>
  <div class="unauth-inner">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
.unauth-inner {
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden;
}
</style>
