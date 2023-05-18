<template>
  <div >
    <default-bar />
    <div>
      <form class="mb-4" @submit.prevent="createNewTwoot">
        <v-textarea
          label="What's happenning?"
          auto-grow
          rows="4"
          v-model="newTwootContent"
          flat
          elevation-0
          class="no-border"
        />
        <v-row justify="end" align="center">
          <v-col cols="auto">
            <v-progress-circular
              size="40"
              :model-value="newTwootContent.length * 0.55555"
              :color="getColor(newTwootCharacterCount)"
            >
              <p v-if="newTwootCharacterCount < 21">{{ newTwootCharacterCount }}</p>
            </v-progress-circular>
          </v-col>
          <v-col cols="auto">
            <v-btn
              :disabled="newTwootCharacterCount < 0 || newTwootCharacterCount == 180"
              type="submit"
              rounded="xl"
              color="primary"
              font-weight-bold
              size="x-large"
            >
              Twoot</v-btn
            >
          </v-col>
        </v-row>
      </form>
    </div>
    <div >
      <v-container border="md" class="pa-5" v-for="twoot in twoots">
        <v-row justify="start" align="start">
          <v-col cols="1" >
            <v-avatar color="red" class="mt-1">
                <span class="text-h5">{{ twoot.name[0] }}</span>
            </v-avatar>
          </v-col>
          <v-col cols="11">          
            <v-row>
              <h4 class="font-weight-bold">@{{ twoot.name }}</h4><span class="text-grey"> {{ twoot.date }} </span>
            </v-row>
            <v-row>
              <p>
                {{ twoot.content }}
              </p>
            </v-row>
            <v-row align="center" justify="start">
              <v-col cols="2">
                <v-hover v-slot:default="{ isHovering, props }">
                  <v-btn icon="" size="small" elevation="0" @click="favoriteTwoot(twoot.id)" class="scale button" color="red--text">
                    <v-icon class=""
                      :icon="twoot.favorited ? 'mdi-heart' : 'mdi-heart-outline'"
                      :color="[twoot.favorited || isHovering ? 'red' : 'grey']" 
                      
                    >
                    </v-icon>
                    <span :class="twoot.favorited ? 'text-red' : 'text-medium-emphasis'">{{ twoot.likes }} </span>
                  </v-btn>
                </v-hover>
              </v-col>
              <v-col cols="2">
                <v-btn icon="" size="small" elevation="0"  class="scale">
                  <v-icon icon="mdi-comment-outline" size="small"></v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn  icon="" size="small" elevation="0"  class="scale">
                  <v-icon icon="mdi-refresh" size="small"></v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn  icon="" size="small" elevation="0"  class="scale">
                  <v-icon icon="mdi-export-variant" size="small"></v-icon>
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn v-if="twoot.name == name" icon="" size="small" elevation="0" @click="deleteTwoot(twoot.id)" class="scale">
                  <v-icon icon="mdi-trash-can-outline" size="small"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script setup>
</script>
<script>
//imports

import { 
  QuerySnapshot, collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc, 
  query, orderBy, limit,
  Timestamp,
serverTimestamp,
where,
increment
} from "firebase/firestore";
import { db } from "@/firebase";
import { FirebaseError } from "@firebase/util";

const twootsCollection = collection (db, 'todos')//Get the collection from firebase
const twootsQuery = query(twootsCollection, orderBy("timestamp", "desc"));//QUERY:: Get items from the collection, order by date

const likesCollection = collection (db, 'likes')
const heartQuery = query(likesCollection)

export default {

  created() {
    
    
    //GET TWOOTS BY DATE
    
    this.getTwoots
    

    //GET LIKES BY USER
    this.getLikes

  },

  name: "CreateTwootPanel",
  components:{

  },
  data() {
    return {
      newTwootContent: "",
      newTwootSize: 180,
      twoots: [
      ],
      name: 'anonymous',
      likes: []
    };
  },
  computed: {
    getLikes(){
      this.likes = []
      onSnapshot(heartQuery, (querySnapshot) => {
      this.getName()
      const fbLikes = []
      querySnapshot.forEach((doc) => {
        if(doc.data().userName == this.name){
          const like = {
          id: doc.id,
          twootId: doc.data().twootId,
          userName: doc.data().userName
          }
          fbLikes.push(like)
        }        
      })
      this.likes = fbLikes
      this.isLiked
      
    })
    },
    getTwoots(){
      this.twoots = []
      onSnapshot(twootsQuery, (querySnapshot) => {
        const fbTwoots = []
        //let favorited = false
        querySnapshot.forEach((doc) => {
          //console.log(today)
          const twoot = {
          id: doc.id,
          content: doc.data().content,
          favorited: false,
          date: doc.data().date/*this.getDate( doc.data().date )*/,
          name: doc.data().name,
          likes: doc.data().likes
        }
          //console.log(twoot.date)
          fbTwoots.push(twoot)
        })
        this.twoots = fbTwoots
        this.isLiked
      })
    },

    //builds reactively
    newTwootCharacterCount() {
      //console.log(180 - this.newTwootContent.length)
      return 180 - this.newTwootContent.length;
    },

    isLiked(){
      
      this.twoots.forEach((twoot) =>{
        //console.log(twoot.favorited)
        this.likes.forEach((like) => {
          //console.log("Testing twoot with id:" + twoot.id+" and favorited of: " + twoot.favorited)
          //console.log("Testing like with tId:" + (like.twootId).slice(2))
          if((like.twootId) === String(twoot.id)){
            //console.log(twoot.favorited)
            twoot.favorited = true
            //console.log()
          }
            //twoot.favorited = false
        //console.log(like.twootId)
      })
      
      })
    }
    
  },
  methods: {
    
    
    getName(){
      if(localStorage.getItem('name')){
        this.name = localStorage.getItem('name')
      }else{
        this.name = "anonymous"
      }
      return this.name
      
    },
    getDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var hour = today.getHours()
      var minute = today.getMinutes()
      var sec = today.getSeconds()
      today = yyyy + '/' + mm + '/' + dd +" "+hour+":"+minute+":"+sec;
      return today
    },
    TwootSize() {
      this.newTwootSize -= this.newTwootContent.length;
    },

    getColor(newTwootCharacterCount) {
      if (newTwootCharacterCount > 21) {
        return "primary";
      } else if (newTwootCharacterCount < 21 && newTwootCharacterCount > 0) {
        return "yellow";
      } else if (newTwootCharacterCount < 1) {
        return "error";
      }
    },

    favoriteTwoot(id) {
      const index = this.twoots.findIndex((twoot) => twoot.id === id);
      //this.twoots[index].favorited = !this.twoots[index].favorited;
      /*updateDoc(doc(twootsCollection, id), {
        favorited: !this.twoots[index].favorited
      });*/
      let exists = false
      this.getName()
      //console.log("TWOOT ID: " + id)
      this.likes.forEach((like) => {
        //console.log("TWOOT ID LIKES: "+ like.twootId)
        if(like.twootId == id){
          exists = true
          this.deleteLike(like.id)
          this.updateTwoot(this.twoots[index].id, "decrement")
          //this.getLikes
          //console.log("Deleted like id of: "+ like.twootId +" with twootID of: "+ id)
        }
          
      })
      if(!exists){
        this.addLike( this.twoots[index].id, this.name)
        this.updateTwoot(this.twoots[index].id, "increment")
        //this.getLikes
      }
    },

    addLike(tId, uId){
      addDoc(likesCollection, {
        twootId: tId,
        userName: uId
      })
      //this.updateTwoot(tId)
    },

    deleteLike(id){
      deleteDoc(doc(likesCollection, id))
      console.log("borre de la db")
      this.isLiked
    },
    async updateTwoot(id, operation){
      //console.log(id)
      var myRef = doc(db, "todos", id);
      
      
      switch(operation){
        case "increment":
          await updateDoc(myRef, {
                  likes: increment(1)
          })
          break;
        case "decrement":
        await updateDoc(myRef, {
                  likes: increment(-1)
          })
          break;
      }
      
      

    },
    createNewTwoot() {
      if (this.newTwootContent ) {
        this.getName()
        addDoc(twootsCollection, {
          content: this.newTwootContent,
          favorited: false,
          date: /*new Date()*/ this.getDate(),
          timestamp: new Date(),
          name: this.name,
          likes: 10
        });
        this.newTwootContent = "";
      }
    },
    deleteTwoot(id) {
      deleteDoc(doc(twootsCollection, id));
      /*const twootss = this.twoots;
      this.twoots = twootss.filter((twoot) => twoot.id !== id);*/
    },
  },
};
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto !important;
}
.no-border {
  border: none !important;
}
</style>
