<template>
<div class="post-card-body"  v-if="$store.state.isLogin==true && $store.state.createBox==true"  style="margin:10px">
        <h3> {{$store.state.boxTitle}}</h3>
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.index">{{ error }}</li>
          </ul>
        </p>
        <div>
            <form @submit.prevent="checkForm" >
                <input type="text" placeholder="Task Title" class="form-input"  v-model="form.title"> <br>
                <textarea  placeholder="Task Body" class="form-input"  v-model="form.body"></textarea><br>
                <!-- <input type="text" v-model="val" @click="valChanged" @input="valInput">
                <br>
                {{val}} -->
                <template v-if="!addPostLoading">
                  <button type="submit" class="btn btn-primary" >Save</button>
                </template>
                <template v-else>
                  <span class="btn btn-primary">wait</span>
                </template>
            </form>

            <!-- <input type="text" label="Task Title"  v-model="form.title">
            <textarea  label="Task Body" v-model="form.body"></textarea> -->
        </div>
        <!-- <template v-if="$store.state.isLogin">
          <span class="edit button">edit</span>
          <template v-if="!deletePostLoading">
            <span class="delete button" @click="deleteTask(post.id)">delete</span>
          </template>
          <template v-if="deletePostLoading">
            <span class="wait button">wait</span>
          </template>
          
        </template> -->
        
    </div>
  
</template>
<script>
export default {
  data() {
    return {
      valid: false,
      addPostLoading: false,
      errors:[],
      form: {
        title: "",
        body: ""
      },
      rules: {
        // title: [
        //   v => !!v || "Title is required",
        //   v => v.length >= 15 || "Title must be at least 15 characters"
        // ],
        // body: [
        //   v => !!v || "Body is required",
        //   v => v.length >= 100 || "Body must be at least 100 characters"
        // ]
      }
    };
  },
  computed: {
    postId(){
      return +this.$route.params.id;
    },
    submitButtonText(){
      return this.postId ? 'Save' : 'Submit'
    }
  },
  methods: {
    checkForm:function(e) {
      // e.preventDefault();
      this.errors = [];
      if(this.form.title === '') {
        this.errors.push("task name is required.");
      }
      else if(this.form.body === '') {
        this.errors.push("task body is required.");
      }
      else 
      {
        console.log("checkkkk");
         this.saveData();
      }
    },
    saveData() {
      console.log(this.form);
      // this.addPostLoading = true;
      // const action = this.postId
      // ? {name: 'editPost', payload: {...this.form, id: this.postId} }
      // : {name: 'addPost', payload: this.form } 
      // this.$store
      //   .dispatch(action.name, action.payload)
      //   .then(() => {
      //     this.$router.push('/admin')
      //   })
      //   .finally(() => {
      //     this.addPostLoading = false;
      //   });

      // const action = this.postId
      // ? {name: 'editPost', payload: {...this.form, id: this.postId} }
      // : {name: 'addPost', payload: this.form } 

      this.$store.dispatch('addTask', this.form)
        .then(() => {
          // this.$router.push('/admin')
          this.form.title = this.form.body = '';
        })
        .finally(() => {
          console.log('task added successfly');
          // this.addPostLoading = false;
        });
    },
    getPost(){
      this.$store.dispatch('getPost', this.postId).then( post => {
        this.form.title = post.title;
        this.form.body = post.body;
      })
    }
  }
};
</script>

<style>
.form-input
{
    display: block;
    width: 90%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn{
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-size: 11px;
    font-weight: 400;
}
.btn-primary {
    border: none;
    background: #5aa312 !important;
}

</style>