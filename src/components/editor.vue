<template>
  <textarea :id="id" :value="value"></textarea>
</template>
<script>
  import tinymce from 'tinymce/tinymce';
  import 'tinymce/themes/modern/theme';
  import 'tinymce/plugins/paste';
  import 'tinymce/plugins/link';
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/contextmenu'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/colorpicker'
  import 'tinymce/plugins/textcolor'
  const INIT = 0;
  const CHANGED = 2;
  var EDITOR = null;
  export default {
    props: {
      value: {
        type: String,
        required: true
      },
      setting: {



      }
    },
    watch: {
      value: function (val) {
        console.log('init ' + val)
        if (this.status == INIT || tinymce.activeEditor.getContent() != val){
          tinymce.activeEditor.setContent(val);
        }
        this.status = CHANGED
      }
    },
    data: function () {
      return {
        status: INIT,
        id: 'editor-'+new Date().getMilliseconds(),
      }
    },
    methods: {},
    mounted: function () {
      const _this = this;
      const setting =
        {
          selector:'#'+_this.id,
          language:"zh_CN",
          language_url: '../../../static/zh_CN.js',
          skin_url: '../../../static/skins/lightgray',
          init_instance_callback:function(editor) {
            EDITOR = editor;
            console.log("Editor: " + editor.id + " is now initialized.");
            editor.on('input change undo redo', () => {
              var content = editor.getContent()
              _this.$emit('input', content);
            });
          },
//          plugins:[]
//          language_url: '/static/tinymce/zh_CN.js',
//          language: 'zh_CN',
//          skin_url: '/static/tinymce/skins/lightgray',
          height: 600,
          plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
          toolbar:
            'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
          branding: false
        };
      Object.assign(setting,_this.setting)
      tinymce.init(setting);
    },
    beforeDestroy: function () {
      tinymce.get(this.id).destroy();
    }
  }

</script>
