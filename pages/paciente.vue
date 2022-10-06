<template>
    <div>
        <h1>Paciente</h1>
    </div>
</template>

<script>
/**Nuxt te permite definir todos los predeterminados <meta> etiquetas 
 * para su aplicación dentro del archivo nuxt.config.js usando la propiedad head. 
 * Esto es muy útil para agregar un título predeterminado y una etiqueta de descripción 
 * con fines de SEO o para configurar la ventana gráfica o agregar el favicon.  */

export default {
    head: {
        title: 'Pacientes',
        /*creamos un arreglos con objertos */
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'lista de pacientes de Aryy'
            }
        ],
       /*  link: [{ rel: 'icon', type: 'image/x-icon', href: '@/static/favicon.ico' }] */
    }
    /*Esto le dará el mismo título y descripción en cada página.  */
}

</script>