<template>
  <div>
    <app-header></app-header>
  <Nuxt/>
  <app-footer></app-footer>
</div>
</template>
<script>
export default {
  head () {
    return {
      bodyAttrs: {
        class: 'reset-body'
      }
    }
  }
}
</script>


<style src="@/assets/styles/mystyles.css">

</style>


