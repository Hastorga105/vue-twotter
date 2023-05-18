<template>
<v-navigation-drawer
    floating
    class="pa-4"
    >
    
    <v-sheet class="mt-4 pl-4 rounded-pill list" >
        <v-row>
            <v-col cols="3" class="">
                <v-avatar color="red" class="mt-1">
                    <span class="text-h5">{{ inputName[0] }}</span>
                </v-avatar>
            </v-col>

            <v-col cols="9">
                <v-row>
                <v-col>
                    <input
                    placeholder="name"
                    v-model="inputName"
                    class="noBorder font-weight-bold"
                    />
                </v-col>
                    
                </v-row>
                <v-row no-gutters justify="start" align="center">
                    <v-col cols="1" >
                    <p class="text-medium-emphasis">@ </p>
                    </v-col>
                    <v-col cols="11">
                        <input
                        placeholder="handle"
                        class="noBorder text-medium-emphasis"
                        />
                    </v-col>
                    
                </v-row>
                
                
            </v-col>

        </v-row>
        <v-row></v-row>
    </v-sheet>
        <!--<v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>-->
</v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'

const inputName = ref('')
const handle = ref('')

const  size = ref(false)

watch(window.screen.width, (newVal) => {
    console.log(window.screen.width)
})
//const emit = defineEmits(['updateName'])

watch(inputName, (newVal) => {
    localStorage.setItem('name', newVal)
    //emit('updateName', inputName)
})

const isMobile = () =>  { screen.width <= 760
    return {isMobile}
}
onMounted(() => {
    inputName.value = localStorage.getItem('name') || ''
    //console.log("Your screen resolution is: " + window.screen.width * window.devicePixelRatio + "x" + window.screen.height * window.devicePixelRatio)
})


</script>

<style>
</style>