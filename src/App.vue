<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field ref='text' v-model="text" label="Texto Completo" append-icon='content_copy'
    @click:append='copy("text")'></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field ref='key' v-model="keytext" label="Key text" append-icon='content_copy'
    @click:append='copy("key")'></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field ref='complete' v-model="complete" label="Complete Text" append-icon='content_copy'
    @click:append='copy("complete")'></v-text-field>
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    copy(inputField) {
      const input = this.$refs[inputField];
      input.focus();
      document.execCommand('selectAll');
      this.copied = document.execCommand('copy');
    },
  },
  computed: {
    keytext () {
        return this.text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/ /g,"_").toLowerCase();
    },
    complete () {
      return `${this.keytext}: '${this.text}',`
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
