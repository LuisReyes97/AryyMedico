<template>
  <v-row class="fondo">
    <!-- división de la pantalla en video y componente de login | Genesis -->
    <v-col xs="7" sm="7" md="6" lg="7" mg="7" >
      <video
            id="video-player"
            playsinline
            loop
          autoplay
          :src="require('@/assets/videos/introprueba.mp4')"
          width="100%"
            class="video"
            muted
          ></video>
    </v-col>
    <v-col xs="5" sm="5" md="5" lg="5" mg="5">
      <form-login />
    </v-col>
  </v-row>
</template>
<script>
import formLogin from './formLogin.vue'
  export default {
    data: () => ({
      cld: null,
      player: null,
      video: "@/assets/videos/introprueba.mp4",
    }),
    name: "LoginR",
    layout: "auth",
    components: {
      formLogin,
    },
    
  }
</script>
<style>
/* remover fondo morado default y cubrir la pantalla | Génesis */
.video{
  height:880px;
  width: 720px;
  margin-left: -1;
  margin-top: -80px;
}
.fondo{
  margin-bottom: -90px;
}
</style>