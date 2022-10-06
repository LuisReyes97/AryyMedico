<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="4">
            <h4>CITAS</h4>
            <dashboard-citas-vue></dashboard-citas-vue>
        </v-col>
        <v-col cols="12" md="8">
            <v-row class="match-height">
                <v-col cols="12" sm="4">
                    <dashboard-marketing></dashboard-marketing>
                </v-col>
                <v-col cols="12" sm="4">
                    <dashboard-asistente></dashboard-asistente>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <h4>MENSAJES</h4>
            <dashboard-mensajes></dashboard-mensajes>
        </v-col>
        <v-col cols="12" md="8">
            <h4>NOTICIAS</h4>
            <dashboard-noticias></dashboard-noticias>
        </v-col>
  </v-row>
</template>

<script>
import dashboardCitasVue from './dashboardCitas.vue';
export default {
  components:{
    dashboardCitasVue

  },
  name: 'IndexPage',
  head: {
        title: 'Bienvenidos | ',
        /*creamos un arreglos con objertos */
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Esta es mi pagina principal de Aryy '
            }
        ],
  
    }

}






</script>
