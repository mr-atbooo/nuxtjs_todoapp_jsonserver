<template>
  <header>
      <nav>
          <ul>
              <li class="nav-item">
                  <nuxt-link to="/">Tasks</nuxt-link>
                  <span class="admin" :class="{isAdmin:$store.state.isLogin}" @click="makeLogin()"> admin </span>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {
  data(){
    return {
    //   isLogin: true
    }
  },
  computed: {
    // a computed getter
    checkLogin: function () {
      // `this` points to the vm instance
    //   return this.isLogin != this.isLogin;
    }
  },
  // Creating methods
    methods : {

        // Creating function
        // makeLogin: function(){
        //     console.log('cccc');
        //     return this.isLogin = !this.isLogin;
        // },
    makeLogin: function(){
            console.log('zz');
      this.$store.commit("updateisLogin");
    },
    // deletePost(postId, callback){
    //   this.deletePostLoading = true;
    //   this.$store.dispatch('deletePost', postId).then(callback).finally(() => {
    //     this.deletePostLoading = false;
    //   });
    // }

    }
}
</script>

<style scoped>
header {
    background-color: #333;
    padding: 15px 0;
    text-align:center;
}
ul{
    margin: 0;
    padding: 0;
    }
.nav-item
{
    color: #fff;
    font-size: 20px;
    list-style: none;
}
.nav-item a,.nav-item a:active
{
    color: inherit;
    text-decoration: none;
    padding: 4px 15px;
    border-radius: 3px;
}
.nav-item a.nuxt-link-exact-active
{
    background-color: #fff;
    color: #333;
}
.admin
{
    color: inherit;
    text-decoration: none;
    padding: 4px 15px;
    border-radius: 3px;
    cursor: pointer;
}
.isAdmin
{
    background-color: #fff;
    color: #333;
}
</style>
