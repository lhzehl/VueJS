<template>
  <div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  name: "CKeditortest",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // plugins: [
        //   EssentialsPlugin,
        //   BoldPlugin,
        //   ItalicPlugin,
        //   LinkPlugin,
        //   ParagraphPlugin,
        //   Font,
        // ],
        // toolbar: {
        //   items: ["bold", "italic", "link", "undo", "redo", "fontFamily"],
        // },
      },
    };
  },
};
</script>
