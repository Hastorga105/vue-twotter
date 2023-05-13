<template>
  <div class="container">
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
              :disabled="!newTwootContent"
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
    <div v-for="twoot in twoots">
      <v-sheet border="md" class="pa-5">
        <h4 class="font-weight-bold">@username</h4><h4> {{ (twoot.date).substr(5, 2) }}/{{  (twoot.date).substr(8, 2) }}</h4>
        <p>
          {{ twoot.content }}
        </p>

        <v-row align="center" justify="start">
          <v-col cols="auto">
            <v-btn icon="" size="small" elevation="0" @click="favoriteTwoot(twoot.id)" class="scale">
              <v-icon
                :icon="twoot.favorited ? 'mdi-heart' : 'mdi-heart-outline'"
                :color="twoot.favorited ? 'red' : 'black'"
              >
              </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="" size="small" elevation="0" @click="deleteTwoot(twoot.id)" class="scale">
              <v-icon icon="mdi-trash-can-outline" size="small"></v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </div>
  </div>
</template>

<script>
//imports

import { 
  QuerySnapshot, collection, onSnapshot, 
  addDoc, doc, deleteDoc, updateDoc, 
  query, orderBy, limit 
} from "firebase/firestore";
import { db } from "@/firebase";
const twootsCollection = collection (db, 'todos')//Get the collection from firebase
const twootsQuery = query(twootsCollection, orderBy("date", "desc"));//QUERY:: Get items from the collection, order by date


export default {

  mounted() {
    const datata = new Date()
    console.log(datata)
    //const data2 = datata.getFullYear()
    //console.log(data2)
    onSnapshot(twootsQuery, (querySnapshot) => {
      const fbTwoots = []
      
      querySnapshot.forEach((doc) => {
        
        //console.log(today)
        const twoot = {
        id: doc.id,
        content: doc.data().content,
        favorited: doc.data().favorited,
        
        date: (doc.data().date),
        }
        fbTwoots.push(twoot)
      })
      this.twoots = fbTwoots
    })


  },

  name: "CreateTwootPanel",
  data() {
    return {
      newTwootContent: "",
      newTwootSize: 180,
      twoots: [
      ],
    };
  },
  computed: {
    //builds reactively
    newTwootCharacterCount() {
      return 180 - this.newTwootContent.length;
    },
  },
  methods: {
    getDate(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = yyyy + '/' + mm + '/' + dd;
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
      updateDoc(doc(twootsCollection, id), {
        favorited: !this.twoots[index].favorited
      });
    },

    createNewTwoot() {
      if (this.newTwootContent) {
        addDoc(twootsCollection, {
          content: this.newTwootContent,
          favorited: false,
          date: this.getDate(),
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
