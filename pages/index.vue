<template>
<div>
  <div style="margin:15px"  v-if="$store.state.isLogin" >
    <span class="addTask" @click="openCreatBox()">Add Task</span>
  </div>

  <add-task></add-task>
 







  <div class="posts">
    <div class="post-card" v-for="post in $store.state.posts" :key="post.id">
      <task :post="post"></task>
    </div>
  </div>
</div>
</template>
<script>
import task from "~/components/task";
import addTask from "~/components/addTask"

export default {
  name: 'IndexPage',
  components: {
    task,addTask
  },
   data() {
    return {
      posts: [],
      errors: []
    }
  },
   methods : {
    openCreatBox: function(){
      this.$store.commit("updateBoxStatus");
      this.$store.dispatch('changeBoxtitle', "Add Task Box").then().finally(() => {
      });
    },
    
   },
  fetch({ $axios, store }) {
    return $axios.$get("/posts").then(res => {
      store.commit("updateTasks", res);
    });
  }
}
</script>
<style scoped>
.addTask
{
    background-color: #333;
    color: #fff;
    text-decoration: none;
    padding: 4px 15px;
    border-radius: 3px;
    cursor: pointer;
}

</style>



