
export default {
    state:()=>({
        posts:[],
        post:{},
        isLogin: true
    }),
    mutations:{
        updateTasks(state,posts){
            state.posts=posts;
        },
        updateSelectedPost(state,post){
            state.post=post;
        },
        updateisLogin(state,p){
            state.isLogin = !state.isLogin;
        },
    },
    actions: {
        // addPost({state, commit}, payload){
        //   return this.$axios.$post(`/posts`, payload).then((post) => {
        //     commit('updateTasks', [...state.posts, post]);
        //   })
        // },
        // editPost({state, commit}, payload){
        //   return this.$axios.$put(`/posts/${payload.id}`, payload).then((post) => {
        //     commit('updateTasks', state.posts.map( post => post.id == payload.id ? payload : post));
        //   })
        // },
        deleteMyTask({state, commit}, postId){
          return this.$axios.$delete(`/posts/${postId}`).then(() => {
            commit('updateTasks', state.posts.filter( post => post.id != postId))
          })
        },
        getPost({state}, postId){
          const post = state.posts.find( item => item.id == postId);
          return post ? Promise.resolve(post) : this.$axios.$get(`/posts/${postId}`)
        }
      }
    }