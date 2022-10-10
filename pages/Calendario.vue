<template>

    <div>
        <Barracalendar/>
        <v-container lighten-5 fluid>
            <v-container white rounded-lg>
                <!-- Muestra los botones de navegacion -->
                <v-layout>
                    <v-flex d-flex justify-center>
                   
                    </v-flex>
                </v-layout>
                <!-- Muestra El calendario -->
                <v-layout py-5>
                    <v-flex>
                        <CalendarioMes />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>

<script>
import CalendarioMes from './calendario/CalendarioMes.vue';
import Barracalendar from './calendario/barracalendar.vue';



export default {
    components: {
    CalendarioMes,
    Barracalendar
}
}
</script>