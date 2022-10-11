<template>
    <div class="margen ">
      <v-img :src="require('@/assets/logos/ICONS_SPA_ISOLOGO.svg')" max-width="150"></v-img>
      <h1>Especialistas, medicinas y <br /> análisis clínicos en un solo lugar</h1>
      <p>Haz una cita, cotiza tus medicamentos y análisis clínicos o lleva control de tu tratamiento con ayuda de aryy.</p>
      <!-- ---- Sección de vista iniciar/registrar ---- -->
            <v-tabs
            class="tabs"
              v-model="tabs"
            >
              <v-tab class="tabs" >
                Iniciar sesión
              </v-tab >
              <v-tab class="tabs">
                Registrarse
              </v-tab>
            </v-tabs>
        <v-tabs-items v-model="tabs">
         <!--  ----Iniciar sesión---- -->
         <v-tab-item>
            <v-col
            xs="11"
            sm="11"
            md="11"
            >
            <v-card flat>
              <v-card-text >
                <v-text-field justify-right placeholder="Usuario o telefono" rounded height="25" class="textfield"></v-text-field>
                <br />
                <v-text-field
                height="25"
                rounded 
                class="textfield"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                placeholder="Contraseña"
                @click:append="show1 = !show1"
              ></v-text-field>
                  <v-btn class="margen4 btnn" color="#7900ff" block height="50">
                    Iniciar sesión
                  </v-btn>
                  <br />
                  <p class="accede">O accede usando</p>
                  <v-btn outlined class="btn" width="100%" height="50"><v-icon color="blue" class="mr-2">fa-brands fa-square-facebook</v-icon>
                    Iniciar sesión con Facebook
                  </v-btn>
                  <v-btn class="margen4 btn" outlined width="100%" height="50"><v-icon class="mr-2 fa-google">fa-brands fa-google</v-icon>
                    Iniciar sesión con Google
                  </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
            <v-col
          md="11"
          >
          <v-text-field
            placeholder="Ingresa un usuario"
              class="textfield"
              rounded
            ></v-text-field>
            <br />
            <v-text-field
            placeholder="Ingresa un correo"
              class="textfield"
              rounded
            ></v-text-field>
            <br />
            <v-text-field
              placeholder="Ingresa una contraseña" 
              rounded
              class="textfield"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              hint="Debe contener al menos 8 carácteres"
              @click:append="show1 = !show1"
            ></v-text-field>
            <br /> 
            <v-text-field
              placeholder="Confirma tu contraseña"
              class="textfield"
              rounded
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              hint="Debe contener mínimo 8 carácteres"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn class="margen4 btnn" block color="#7900ff" height="50">
                  Registrarme
            </v-btn>
            <br /> 
            <v-row>
            <v-col 
              xs="1"
              sm="6"
              md="6"
            >
              <p class="accede">O registrate usando</p>
              </v-col>
              <v-col 
              xs="1"
              sm="2"
              md="3"
            >
              <a class="accede">Google</a>
              </v-col>
              <v-col 
              xs="1"
              sm="2"
              md="3"
            >
              <a class="accede">Facebook</a>
              </v-col>
            </v-row>
            </v-col>
          </v-card>
          </v-tab-item>
<!-- ------Componente para tab de registro----- -->
        </v-tabs-items>
    </div>
  </template>
  <script>
    import Vue from 'vue'
    import Vuesax from 'vuesax'
    import 'vuesax/dist/vuesax.css' // Vuesax styles
    Vue.use(Vuesax, {
      // options here
    })
    export default {
      name: "formLogin",
      layout: "auth",
      components: {
      },
      data: () => ({
        tabs: null,
        show1: false,
        hasVisiblePassword: false,
        rules: {
        min: v => v.length >= 8 || 'Debe contener mínimo 8 carácteres',
      },
      }),
    }
  </script>
  <style>
  .margen{
    margin: 34px;
  }
  .margen4{
    margin-top: 16px;
  }
  h1{
    font-family: "MontserratBold";
    font-size: 1.3rem;
    margin-top: -30px;
    margin-bottom: 10px;
    color: #4f565f;
  }
  p{
    font-family: "MontserratLight";
    color: #999999;
    font-size: 16px;
    
  }
  p.accede{
      font-size: 15px;
      font-family: 'Montserrat', sans-serif;
    }
    .fa-google {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
  .btn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
  }
  .btnn {
      text-transform: unset !important;
      font-family: Montserrat;
      border: thin solid #CCCCCC;
      color: white !important;
  }
  .textfield{
      box-shadow: 0 0 10pt 2pt #f4edff;
      height: 50px;
      font-size: .9rem;
      font-family: Montserrat;
    }
    

  .v-messages__message {
    font-size: 12px;
    
}

  a.accede{
    font-size: 15px;
    font-family: 'MontserratBold';
  }
  .tabs{
    color: #7900ff;
    text-transform: unset !important;
    font-family: Montserrat;
  }
  r{
    text-transform: unset !important;
    font-family: MontserratMedium;
    color: #7900ff;
  }
  .color{
    text-transform: unset !important;
    font-family: MontserratMedium;
    background-color: #ea4335;
    fill:#ea4335;
  }
  </style>