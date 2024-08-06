<template>
  <div class="flex items-center pa-2 justify-center min-h-screen">
    <v-card
      flat
      color="transparent"
      class="pa-6 w-100 bg-red-400 mx-auto shadow-lg text-center"
    >
      <v-img
        src="https://media.giphy.com/media/vR1dPIYzQmkRzLZk2w/giphy.gif?cid=790b7611s8x3vd5mrxh5civ3lxha2dq0lijo3degsml44lhj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        height="200px"
        class="mb-4"
        contain
      ></v-img>
      <v-card-title class="justify-center text-3xl font-bold mb-4">
        <span class="text-3xl"> Coming Soon </span>
      </v-card-title>
      <v-card-text class="text-gray-700 mb -6">
        Meanwhile, you can visit our other sites:
      </v-card-text>
      <div class="mb-6">
        <div
          v-for="link in links"
          :key="link.url"
          class="mb-2 mx-2 flex flex-col items-start outlined-btn cursor-pointer"
          @click="openLink(link.url)"
        >
          <span class="flex text-xl items-center">
            {{ link.name }}
          </span>
          <span class="text-xs flex items-center text-gray-500">
            {{ link.url }}
          </span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'Anime Site', url: 'https://anime.dheep.site' },
        {
          name: '1945 Uncolonized Game',
          url: 'https://dhitgt.github.io/1945/',
        },
        { name: 'Portfolio', url: 'https://dhitgt.github.io/' },
        // Add more links as needed
      ],
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>
<style scoped>
.outlined-btn {
  border: 1px solid #1976d2; /* Match primary color */
  border-radius: 4px;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.3s;
}

.outlined-btn:hover {
  background-color: rgba(
    25,
    118,
    210,
    0.1
  ); /* Match primary color with transparency */
}

.cursor-pointer {
  cursor: pointer;
}
</style>

