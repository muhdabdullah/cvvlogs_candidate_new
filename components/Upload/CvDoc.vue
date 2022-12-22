<template>
  <v-dialog persistent v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        width="307"
        height="50"
        color="primary"
        rounded
        depressed
        class="mr-2"
        :disabled="buttonLoader"
      >
        <span class="text-capitalize"
          >Upload <span class="text-uppercase">CV</span></span
        >
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Upload CV</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-5">
        <v-file-input
          :rules="rules"
          accept=".pdf, .docx, .doc"
          placeholder="Choose file"
          v-model="fileData"
          color="success accent-4"
          show-size
          outlined
          prepend-icon="mdi-file"
        ></v-file-input>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="close"> Cancel </v-btn>
        <v-btn
          :loading="buttonLoader"
          color="primary darken-1"
          text
          @click="save"
        >
          Upload
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "import-doc",
  props: ["importCSVLoader"],
  data() {
    return {
      dialog: false,
      buttonLoader: false,
      fileData: null,
      rules: [
        (value) => {
          return !value || !value.length;
        },
      ],
    };
  },
  methods: {
    close() {
      this.dialog = false;
      this.fileData = null;
    },
    async save() {
      this.buttonLoader = true;

      const formData = new FormData();
      formData.append("file", this.fileData);

      await this.$api.documnetService
        .uploadCvDoc(formData)
        .then((response) => {
          this.close();
        })
        .finally(() => (this.buttonLoader = false));
    },
  },
};
</script>
