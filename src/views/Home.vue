<template>
  <default-bar class="sticky "/>
  <div class="pt-10">
    <Twoots class="mt-10 container"/>
  </div>
    <!--<SideBar/>-->
</template>
  
<script setup>
  //import HelloWorld from '@/components/HelloWorld.vue'
  //import DefaultBar from '@/components/AppBar.vue'
  import DefaultBar from '@/layouts/default/AppBar.vue'
  import Twoots from '@/components/Twoots.vue'
  //import SideBar from '@/components/SideBar.vue'
import { ref, watch } from 'vue'

const name = ref('')


watch(name, (newVal) => {
  localStorage.setItem('name', newVal)
})

//Get name from localStorage
const storedName = localStorage.getItem('name')
if(storedName) {
  name.value = storedName
}

const updateName = ( newName ) => {
  name.value = newName
}

</script>
  