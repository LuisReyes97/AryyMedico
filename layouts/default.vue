<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-avatar>
        <img :src="require('@/static/Isotipo_Aryy.svg')">
      </v-avatar>
      <v-list>
        <v-spacer />
        <v-list-item class="lista" v-for="(item, i) in items" :key="i" :to="item.to" router exact
          active-class="bg-active">
          <v-list-item-action>
            <img class="icon" :src="item.url">
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="titulo" active-class="bg-active">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-spacer />
        <div align="center">
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!--BARRA DE CALENARIO-->
 
    <!--BARRA DE CALENARIO-->
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!--       <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!--    <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!--       <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!--    <v-toolbar-title>{{ title }}</v-toolbar-title> -->
      <v-spacer />
      <!--       <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!--     <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer :absolute="!fixed" app>
      <span>Luis Reyes | Construcción &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          url: require("@/static/inicio.svg"),
          template: <iconHome />,
          title: 'Inicio',
          to: '/'
        },
        {
          url: require("@/static/Calendario.svg"),
          title: 'Calendario',
          to: '/Calendario'
        },
        {
          url: require("@/static/paciente.svg"),
          title: 'Pacientes',
          to: '/Paciente'
        },
        {
          url: require("@/static/mensaje.svg"),
          title: 'Mensajes',
          to: '/mensajes'

        },
        {
          url: require("@/static/Finanza.svg"),
          title: 'Finanzas',
          to: '/finanzas'
        },
        {
          url: require("@/static/Marketing.svg"),
          title: 'Marketing',
          to: '/Marketing'
        },
        {
          url: require("@/static/Noticias.svg"),
          title: 'Noticias',
          to: '/Noticias'
        },
        {
          url: require("@/static/Compras.svg"),
          title: 'Compras',
          to: '/Compras'
        },
        {
          url: require("@/static/Asistente.svg"),
          title: 'Asistente',
          to: '/Asistente'
        },
        {
          url: require('@/static/Ajustes.svg'),
          title: 'Ajustes',
          to: '/Ajustes'
        }

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Arry'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.titulo {
  font-family: 'Montserrat', sans-serif;
  color: #999999;
}

.titulo:hover {
  color: #fff;
}

.titulo.active {
  color: #fff;
}

.lista:hover {
  background: #7900ff;
  color: azure;
}

.bg-active {
  background-color: #7900ff;
  color: white !important;
}
</style> 