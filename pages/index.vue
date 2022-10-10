<!--Maquetación de componentes al Dashboard | Luis Reyes-->
<template>
    <div class="container">
        <v-row class="row">
        <v-col cols="12" md="4">
            <h4>CITAS</h4>
            <DashboardCitas/>
        </v-col>
        <v-col cols="12" md="8">
            <v-row class="match-height">
                <v-col cols="12" sm="4">
                    <DashboardMarketing/>
                </v-col>
                <v-col cols="12" sm="4">
                   <DashboardAsistente/>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" sm="6" md="4">
            <h4>MENSAJES</h4>
            <DashboardMensajes/>
        </v-col>
        <v-col cols="12" md="8">
            <h4>NOTICIAS</h4>
            <DashboardNoticias/>
        </v-col>
    </v-row>
    </div>
</template>


<script>
import dashboardCitasVue from './dashboardCitas.vue';
import DashboardCitas from './dashboardCitas.vue';
import DashboardMarketing from './dashboardMarketing.vue';
import DashboardAsistente from './DashboardAsistente.vue';
import DashboardMensajes from './DashboardMensajes.vue';
import DashboardNoticias from './DashboardNoticias.vue';
export default {
    components: {
    dashboardCitasVue,
    DashboardCitas,
    DashboardMarketing,
    DashboardAsistente,
    DashboardMensajes,
    DashboardNoticias
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

<style>
.icono {
  height: 80px;
  
}

.icono:hover{
    fill: red;
  transition-duration:1s;
  cursor:pointer;

}

v-row{
  /* background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%); */
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: -webkit-linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  background: linear-gradient(50deg, rgba(255, 255, 255, 1) 35%, rgba(244, 237, 255, 1) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#f4edff", GradientType=1);
}
</style>

