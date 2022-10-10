<template>


<v-navigation-drawer  app
      clipped
      left fixed>
            <v-list class="pl-14" shaped>
               
            <v-list-item v-for="n in 5" :key="n" link>
                <v-list-item-content>
                    <v-list-item-title>Item {{ n }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

<!-- 
    <v-navigation-drawer v-model="drawer" fixed>

      <v-list class="pl-14" shaped>
        <h1>hola</h1>
   
      </v-list>
    </v-navigation-drawer> -->

</template>

<script>
import Calendarchico from './calendarchico.vue';

export default{
    component: {},
    components: { Calendarchico }
}

</script>