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
                      <v-col cols="12" md="2" align="center" justify="center">
                         <v-badge color="error" overlap class="mt-5">
                             <template slot="badge">2</template>
                             <v-icon color="tertiary">mdi-bell</v-icon>
                         </v-badge>
                      </v-col>
                       <v-col cols="12" md="12">
                         <h1 class="headline mb-2 grey--text">Money Status</h1>
                          <template>
                            <div id="app">
                                <GChart
                                 type="ColumnChart"
                                 :data="chartData"
                                 :options="chartOptions"
                                 />
                            </div>
                          </template>
                       </v-col>
                       <v-col cols="12" md="12">
                           <h1 class="headline mb-2 grey--text">Budgets</h1>
                       </v-col>

                       <v-col cols="12" md="8">
                            <v-card>
                              <v-list>
                                <v-list-item>
                                  <v-list-item-avatar color="blue">
                                    <v-icon dark>fas fa-car</v-icon>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title>Auto and Transport</v-list-item-title>
                                    <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                                  </v-list-item-content>

                                  <v-list-item-content align="right">
                                       <v-list-item-title class="indigo--text">$1200</v-list-item-title>
                                    <v-list-item-subtitle>$500 of $1200</v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                           <v-divider inset>
                                    
                                </v-divider>
                                  <v-list-item>
                                  <v-list-item-avatar color="red">
                                    <v-icon dark>fas fa-utensils</v-icon>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title>Food and Drink</v-list-item-title>
                                    <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                                  </v-list-item-content>

                                  <v-list-item-content align="right">
                                       <v-list-item-title class="indigo--text">$1200</v-list-item-title>
                                    <v-list-item-subtitle>$500 of $1200</v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                       <v-divider inset>
                                    
                                </v-divider>
                                  <v-list-item>
                                  <v-list-item-avatar color="orange">
                                    <v-icon dark>fas fa-dumbbell</v-icon>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title>Sport</v-list-item-title>
                                    <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                                  </v-list-item-content>

                                  <v-list-item-content align="right">
                                       <v-list-item-title class="indigo--text">$1200</v-list-item-title>
                                    <v-list-item-subtitle>$500 of $1200</v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                               <v-divider inset>
                                    
                                </v-divider>
                                  <v-list-item>
                                  <v-list-item-avatar color="green">
                                    <v-icon dark>fas fa-gamepad</v-icon>
                                  </v-list-item-avatar>
                                  <v-list-item-content>
                                    <v-list-item-title>Auto and Transport</v-list-item-title>
                                    <v-list-item-subtitle>$700 left</v-list-item-subtitle>
                                  </v-list-item-content>

                                  <v-list-item-content align="right">
                                       <v-list-item-title class="indigo--text">$1200</v-list-item-title>
                                    <v-list-item-subtitle>$500 of $1200</v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <!-- <v-divider inset>
                                    
                                </v-divider> -->
                              </v-list>
                            </v-card>
                       </v-col>
                       <!--  -->

                       <v-col cols="12" md="4">
                           <v-card class="mx-auto" max-height="400">
                                  <v-img class="white--text align-end" height="150px" src="card.jpg"></v-img>
                                   <v-card-title class="pb-0">Cash loan</v-card-title>
                                     <v-card-text class=text-primary>
                                        <div>Up to 2 million dollers</div>
                                         <div>Money the next date. Rate</div>
                                         
                                     </v-card-text>
                           </v-card>
           
                       </v-col>
                </v-row>

                  </v-container>
               </v-col>
               <v-col cols="12" md="4">

                     <v-container>
                        <v-row>
                           <v-col cols="12" md12>
                             <v-list-item>
                                 <v-list-item-avatar>
                                      <v-img src="profile.png"></v-img>
                                 </v-list-item-avatar>
                                     <v-list-item-content>
                                         <v-list-item-title>Rananjaya Bandara</v-list-item-title>
                                         <v-list-item-subtitle>rananjayabandara@gmail.com</v-list-item-subtitle>
                                     </v-list-item-content>
                                     <v-list-item-action>
                                          <v-icon>fas fa-sign-out-alt</v-icon>
                                     </v-list-item-action>
                             </v-list-item>
                             <v-divider></v-divider>
                           </v-col>
                        </v-row>
                     
                     </v-container> 
               </v-col>
             </v-row>
           </v-app>
          </v-layout>
        </v-container>
    </v-app>
 
</template>

<script>
 
// import { GChart } from 'vue-google-charts'
  export default {
   

    data: () =>({

        chartData: [
          ["Year", "Sales", "Expenses", "Profit"],
          ["2014", 1000, 400, 200],
          ["2015", 1170, 460, 250],
          ["2016", 660, 1120, 300],
          ["2017", 1030, 540, 350],
          ["2018", 1025, 530, 302],
          ["2019", 1040, 560, 356],
        ],
        chartOptions: {
          chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2016-2019"
          }
        }
    }),
    name: 'App',
    components: {
      // GChart
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
