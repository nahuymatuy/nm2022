
<template>
  <div class="about"> 
    <Navbar></Navbar>

    

    <div v-if="showModal" class="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal">
      <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <label>Name</label>
            <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
            <label>Url</label>
            <input type="text" class="w-full bg-gray-100 p-2 mt-2 mb-3" />
          </div>
          <div class="bg-gray-200 px-4 py-3 text-right">
            <button type="button" 
                    class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" 
                    @click="showModal = false "><i class="fas fa-times"></i> Cancel</button>
            <button type="button" 
                    class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-gray-700 mr-2" 
                    @click="showModal = false "><i class="fas fa-plus"></i> Done</button>
             
          </div>
        </div>
      </div>
    </div>

    <div class="m-20">
      
      <div id="todo">
  <h2>To-Do List  </h2>
   


<div class="grid grid-cols-2 gap-1">
  <div>
    <form v-on:submit.prevent="addTodo">
    <input type="text" 
           v-model="newTodo.text" 
           placeholder="Add new todo"
           class="px-10 m-3 py-2 rounded-full bg-gray-100 "
           /> 
  </form> 
  </div> 
  <div>
    <button class="text-lg text-gray-100 m-3 px-3 py-0.5 ml-4 rounded-full bg-red-400"
            v-on:click="addTodo">新增</button>    
  </div>
</div>
    
  
  
      

      <ul class="todo-list  ">
        <li v-for="todo in todos"
            class="border-2 border-gray-200 rounded-full py-1 px-4 my-2" > 
            <input type="text" 
                    v-model="todo.text" 
                    placeholder="Add new todo"
                    class="px-10 m-3 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-blue-600 "  />  

            <button class="text-ms font-blod text-red-100 m-1 px-3 py-0.5 ml-4 rounded-full bg-red-400"
                  @click="removeTodo(todo.key)">刪除</button>

            <button class="bg-green-500 text-gray-900  text-ms font-blod 
                          m-1 px-3 py-0.5 ml-4 rounded-full 
                          hover:bg-green-700 hover:text-gray-100  "
                  @click="updateTodo(todo.key,todo)">更新</button>   
        </li> 
      </ul> 
    </div>
  
    </div>
  </div>
</template>


<script>
import { WordDataServiceEXP } from "../services/TodoService";
// import TutorialDetails from "./WordMdf"; // 連接至 Mdf 的部分

export default {
  name: "tutorials-list",
  components: {   },
  data() {
    return {
      showModal:false,
      todos: [], 
      newTodo:{ text:"",},

      tempDt: {
        temp_key:"",
        temp_text:"",
        },
      

      currentDt:[],
    };
  },
  methods: {  
     // Push new post in to Todos
    addTodo(){
      WordDataServiceEXP.create(this.newTodo)
      this.newTodo.text = ''

    },
    updateTodo(key, value) {
      WordDataServiceEXP.getAll().child(key).update(value);
      Swal.fire({
              position: 'top',
              icon: 'success',
              title: '更新成功',
              showConfirmButton: false,
              timer: 1500
            });

      // this.popup3sec();
    },
    // Remove child based on key - firebase function
    removeTodo(key) { 

      Swal.fire({
            title: '真的嗎?',
            text: "請確認是否移除資料!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '執行刪除!',
            cancelButtonText: '取消',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '刪除成功!',
                '你的資料，已完成刪除.',
                'success'
              ),
              WordDataServiceEXP.getAll().child(key).remove()
            }
          })

      
    },
    popupK(K) {
        alert( "(K) = " +  JSON.parse(JSON.stringify(K)))
    },

    popup3sec(){

      this.showModal=true;
      this.timeout = setTimeout(function () {
                // enter this block of code after 1 second
                // handle stuff, call search API etc.
                console.log('searching:');
                // this.showModal=false;
            }, 1000); 
      ;
      
    },
    // popup(todo.key,todo.text),
    // trans(a,b) {

    //     const data = {
    //             text: b, 
    //           };
    //           this.tempDt = data;
    // },
    // popup(a ,b ) {

        
      
    //     const data = {
    //             text: this.tempDt.text, 
    //           };

    //       WordDataServiceEXP.update(this.tempDt.key, data)
    //     .then(() => {
    //       this.message = "更新成功!";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
        

    //     alert( "(a,b) = " +  a + b)
    // },
    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
      };

      WordDataServiceEXP.update(this.currentTutorial.key, data)
        .then(() => {
          this.message = "更新成功!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    onDataChange(items) {
        let _tutorials = []; 

        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          _tutorials.push({
            key: key, 
            text  : data.text, 
          });
        });
        this.todos = _tutorials; 
    },

        

  },
  watch: {
    // $('#modal').modal({
    //   show: true
    // }),
    tutorial: function(tutorial) {
      this.currentTutorial = { ...tutorial };
      this.message = "";
    },
  },
  mounted() {
    WordDataServiceEXP.getAll().on("value", this.onDataChange); 

    delay(3000);
    $('#overlay').modal('show');
    
  },
  beforeDestroy() {
    // WordDataServiceEXP.getAll().off("value", this.onDataChange);
  }
};






</script>

<style scoped>


</style>>

