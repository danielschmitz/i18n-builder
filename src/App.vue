<template>
  <div id="app">
    <v-form>
      <v-container>
        <v-layout row wrap>
          <v-flex xs3>
          <v-btn @click="paste()">paste</v-btn>
          </v-flex>

           <v-flex xs9>
            <v-text-field
              ref="complete"
              v-model="complete"
              label="key:value"
              append-icon="content_copy"
              @click:append="copy('complete')"
            ></v-text-field>

          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="text"
              v-model="text"
              label="Texto Completo"
              append-icon="content_copy"
              @click:append="copy('text')"
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
            <v-text-field
              ref="tkey9"
              v-model="tkey9"
              label="name"
              append-icon="content_copy"
              @click:append="copy('tkey9')"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="key"
              v-model="keytext"
              label="Key text"
              append-icon="content_copy"
              @click:append="copy('key')"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="tkey"
              v-model="tkey"
              label="Template"
              append-icon="content_copy"
              @click:append="copy('tkey')"
            ></v-text-field>
          </v-flex>

          

          <v-flex xs6>
            <v-text-field
              ref="tkey2"
              v-model="tkey2"
              label="Script"
              append-icon="content_copy"
              @click:append="copy('tkey2')"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="tkey3"
              v-model="tkey3"
              label="Script"
              append-icon="content_copy"
              @click:append="copy('tkey3')"
            ></v-text-field>
          </v-flex>

            <v-flex xs12>
            <v-text-field
              ref="tkey4"
              v-model="tkey4"
              label="props default"
              append-icon="content_copy"
              @click:append="copy('tkey4')"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="tkey5"
              v-model="tkey5"
              label="floatLabel"
              append-icon="content_copy"
              @click:append="copy('tkey5')"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              ref="tkey6"
              v-model="tkey6"
              label="floatLabel *"
              append-icon="content_copy"
              @click:append="copy('tkey6')"
            ></v-text-field>
          </v-flex>

            <v-flex xs6>
            <v-text-field
              ref="tkey7"
              v-model="tkey7"
              label="data-vv"
              append-icon="content_copy"
              @click:append="copy('tkey7')"
            ></v-text-field>
          </v-flex>
          

             <v-flex xs6>
            <v-text-field
              ref="tkey8"
              v-model="tkey8"
              label="i18n"
              append-icon="content_copy"
              @click:append="copy('tkey8')"
            ></v-text-field>
          </v-flex>

        

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
        .replace(/,/g, "")
        .replace(/\./g, "")
        .replace(/:/g, "")
        .replace(/\\/g, "")
        .replace(/-/g, "_")
        .toLowerCase();
    },
    tkey () {
      return `{{ $t('${this.keytext}') }}`
    },
    tkey2 () {
      return `this.$t('${this.keytext}')`
    },
     tkey3 () {
      return `$t('${this.keytext}')`
    },
     tkey4 () {
      return `default: function () { return this.$t('${this.keytext}') }`
    },
     tkey5 () {
      return `:floatLabel="$t('${this.keytext}')"`
    },
      tkey6 () {
      return `:floatLabel="$t('${this.keytext}') + ' *'"`
    },
      tkey7 () {
      return `data-vv-as="$t('${this.keytext}')"`
    },
     tkey8 () {
      return `i18n.t('${this.keytext}')`
    },
     tkey9 () {
      return `name: this.$t('${this.keytext}'),`
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
  margin-top: 30px;
}
</style>
