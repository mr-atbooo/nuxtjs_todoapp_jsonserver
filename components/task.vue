<template>
    <div class="post-card-body">
        <h3>
          <nuxt-link :to="`/tasks/${post.id}`"> {{post.title}}</nuxt-link>   
        </h3>
        <p>{{post.body}}</p>
        <template v-if="$store.state.isLogin">
          
          <nuxt-link :to="`/tasks/${post.id}/edit`" class="edit button">edit</nuxt-link>
          <!-- <span class="edit button" @click="editTask(post)">edit</span> -->
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
     editTask(post, callback)
    {
      this.$store.commit("updateBoxStatus");
       this.$store.dispatch('changeBoxtitle', "edit Task Box").then().finally(() => {
      });
      // this.$store.commit("updateBoxStatus");
      // this.$store.dispatch('deleteMyTask', post).then(callback).finally(() => {
      //   this.deletePostLoading = false;
      // });
    },
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