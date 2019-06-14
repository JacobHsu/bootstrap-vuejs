<template>
  <b-container fluid class="tabBar">
    <b-row class="d-flex">
      <b-col 
             v-for="(tab, id) in tabs"
             :key="id"
             @click="tabClick(id)">
        <div class="py-1">
          <i v-if="tab.loading"
             class="fas fa-spinner fa-pulse fa-2x"></i>
          <i v-else
             :class="[tab.icon[0]]"></i>
        </div>
        <div>
          <span v-text="tab.text"></span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TabBar',
  created() {
    this.init()
  },
  data() {
    return {
      paths: ['music', 'movie', 'search', 'member'],
      icons: [
        ['fa fa-camera fa-2x', 'fas fa-music fa-2x'],
        ['fa fa-film fa-2x', 'fas fa-film fa-2x'],
        ['fa fa-search fa-2x', 'fas fa-search fa-2x'],
        ['fa fa-user fa-2x', 'fas fa-user fa-2x']
      ],
      tabs: []
    }
  },
  computed: {
    texts() {
      return [
        this.$t('tab_music'),
        this.$t('tab_movie'),
        this.$t('tab_search'),
        this.$t('tab_member')
      ]
    },
  },
  methods: {
    init() {
      this.tabs = this.paths
        .map((entry, id) => {
          return {
            icon: this.icons[id],
            text: this.texts[id],
            //active: this.$route.name === this.paths[id],
            path: this.paths[id],
            loading: false
          }
        })
    },
    tabClick(id) {
      console.log( id, this.$route.name,this.paths )
      const routeName = this.$route.name == 'home' ? 'music' : this.$route.name
      const entryIndex = this.paths.indexOf(routeName)

      if (entryIndex !== id) {
        this.tabs.map(_ => _.active = false)
        //this.tabs[id].loading = true
        window.setTimeout(() => {
          this.$router.push({
            name: this.tabs[id].path
          })
        }, 50)
      }
    },
  }
}
</script>

<style scoped>
.tabBar {
    height: 4rem;
    box-shadow: 0 0 0.4em grey;
}
</style>
