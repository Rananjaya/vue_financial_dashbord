<template>
    <v-app :style="{background: $vuetify.theme.themes.light.background}">
        <v-container>
          <v-layout row class="ma-4">
           <v-app style="background-color: grey lighten-1;" class="rounded">
             <v-row>
               <v-col cols="12" md="8" class="ligne">
                  <v-container>
                    <v-row>
                      <v-col cols="=12" md="9" offset-md="1">
                         <v-text-field label="Search" prepend-inner-icon="search">

                         </v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
               </v-col>
               <v-col cols="12" md="4">

               </v-col>
             </v-row>
           </v-app>
          </v-layout>
        </v-container>
    </v-app>
 
</template>

<script>
 

  export default {
    name: 'home',

    data: () =>({

    }),

    components: {
     
    },
    computed: {
      theme(){
        return (this.$vuetify.theme.dark) ? 'dark' : 'light'
      }
    }
  }
</script>

<style scoped>
   .rounded {
      border-radius: 30px;
   }
   .ligne{
     border-right: solid 1px #95a5a6;
   }
</style>
