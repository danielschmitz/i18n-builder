<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-btn @click="paste()">paste</v-btn>

          <v-flex xs12>
            <v-text-field
              ref="text"
              v-model="text"
              label="Texto Completo"
              append-icon="content_copy"
              @click:append="copy('text')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              ref="key"
              v-model="keytext"
              label="Key text"
              append-icon="content_copy"
              @click:append="copy('key')"
            ></v-text-field>
          </v-flex>

          <v-flex xs12>
            <v-text-field
              ref="tkey"
              v-model="tkey"
              label="tKey text"
              append-icon="content_copy"
              @click:append="copy('tkey')"
            ></v-text-field>
          </v-flex>

          

          <v-flex xs12>
            <v-text-field
              ref="tkey2"
              v-model="tkey2"
              label="tKey text"
              append-icon="content_copy"
              @click:append="copy('tkey2')"
            ></v-text-field>
          </v-flex>

            <v-flex xs12>
            <v-text-field
              ref="tkey3"
              v-model="tkey3"
              label="tKey text"
              append-icon="content_copy"
              @click:append="copy('tkey3')"
            ></v-text-field>
          </v-flex>

          

          <v-flex xs12>
            <v-text-field
              ref="complete"
              v-model="complete"
              label="Complete Text"
              append-icon="content_copy"
              @click:append="copy('complete')"
            ></v-text-field>
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
    copy (inputField) {
      const input = this.$refs[inputField];
      input.focus();
      document.execCommand('selectAll');
      this.copied = document.execCommand('copy');
    },
    paste () {
      navigator.clipboard.readText()
        .then(text => {
         this.text = text
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        });
    }
  },
  computed: {
    keytext () {
      return this.text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "_")
        .replace(/'/g, "")
        .replace(/-/g, "_")
        .toLowerCase();
    },
    tkey () { //{{ $t('bem_vindo') }}
      return `{{ $t('${this.keytext}') }}`
    },
    tkey2 () { //{{ $t('bem_vindo') }}
      return `this.$t('${this.keytext}')`
    },
     tkey3 () { //{{ $t('bem_vindo') }}
      return `$t('${this.keytext}')`
    },
    complete () {
      return `${this.keytext}: '${this.text.replace(/'/g, "")}',`
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
