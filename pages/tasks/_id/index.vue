<template>
<div>
  <div class="posts" style="padding:10px;">
      <task :post="$store.state.post"></task> 
  </div>
</div>
</template>
<script>
export default {
  validate({params}){
      return !isNaN(params.id); 
  },
   
  fetch({$axios,store,params}) {
    return $axios.$get(`/posts/${params.id}`)
    .then(res => {
      store.commit('updateSelectedPost',res);
      
    })
  }
}
</script>
<style scoped>

.post-card{
  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
</style>



