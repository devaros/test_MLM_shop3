<template>
  <v-app>
    <v-app-bar _color="teal-darken-4" _image="https://picsum.photos/1920/1080?random" class="bg-blue-lighten-1">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon :to="{name:'index'}"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="title">  {{ layoutProps.header || 'Market' }} 
      </v-app-bar-title>

      <shop-bag :to="{name:'basket'}" />

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <div>

      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>

    </div>

    <v-bottom-navigation tag="footer" grow class="bg-blue-lighten-1">

      <v-btn>
        <v-icon>mdi-earth</v-icon>
        Публикации
      </v-btn>

      <v-btn>
        <v-icon>mdi-card-account-phone</v-icon>

        Контакты
      </v-btn>

      <v-btn>
        <v-icon>mdi-map-marker</v-icon>

        География
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>


<script setup lang="ts">
  const layoutProps = useAttrs()
</script>

<style scoped>
  .title {
    flex-grow: 9;
  }

  .v-spacer {
    flex-grow: 0;
  }

  .v-bottom-navigation {
    background: linear-gradient(to top right, rgba(19, 84, 122, .8), rgba(128, 208, 199, .8));
  }
</style>