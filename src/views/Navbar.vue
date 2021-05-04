<template>
    <nav>
        <v-navigation-drawer v-model="drawer" dark="" app class="blue accent-2">
            <v-layout column align-center>
                <v-flex class="mt-10 mb-8">
                    <v-icon large>fas fa-store</v-icon>
                </v-flex>
            </v-layout>
            <v-list>
                 <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="border">

                 </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>


export default {
 data :() =>({
     drawer: true,
     links: [
         {icon: 'fas fa-home',text:'Home', route: '/'},
         {icon: 'far fa-credit-card', text:'Balance', route: '/balance'},
         {icon: 'fas fa-chart-line', text:'Investment', route: '/investments'},
         {icon: 'fas fa-balance-scale-right', text:'Insurance', route: '/insurance'},
         {icon: 'fas fa-briefcase', text:'Business', route: '/busines'},
     ]
 })
}
</script>
