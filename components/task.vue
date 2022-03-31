<template>
    <div class="post-card-body">
        <h3>
          <nuxt-link :to="`/tasks/${post.id}`"> {{post.title}}</nuxt-link>   
        </h3>
        <p>{{post.body}}</p>
        <template v-if="$store.state.isLogin">
          <span class="edit button">edit</span>
          <template v-if="!deletePostLoading">
            <span class="delete button" @click="deleteTask(post.id)">delete</span>
          </template>
          <template v-if="deletePostLoading">
            <span class="wait button">wait</span>
          </template>
          
        </template>
        
    </div>
</template>
<script>
export default {
  name: 'task',
  props: {
    post: {
      type: Object,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    }
  },
  data(){
    return {
      deletePostLoading: false
    }
  },
  methods: {
    // updateSelectedPost(post) {
    //   this.$store.commit("updateSelectedPost", post);
    // },
    deleteTask(postId, callback)
    {
      this.deletePostLoading = true;
      this.$store.dispatch('deleteMyTask', postId).then(callback).finally(() => {
        this.deletePostLoading = false;
      });
    }
  }
}
</script>
<style scoped>
.button{
    padding: 3px 5px;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
.edit{
    background-color: green;
}
.delete{
    background-color: red;
}
.wait{
    background-color: rgb(11, 11, 11);
    cursor: progress;
}



</style>