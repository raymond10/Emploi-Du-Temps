/**
 * Created by naneon on 24/06/2014.
 */
tinymce
    .init({
        selector : "textarea#myTiny",
        setup: function (editor) {
            editor.on('change', function () {
                tinymce.triggerSave();
            });
        },
        theme: "modern",
        width: 650,
        height: 200,
        plugins : [
            "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern" ],
        toolbar1 : "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2 : "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | inserttime preview | forecolor backcolor",
        toolbar3 : "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft",
        menubar : false,
        statusbar : true,
        toolbar_items_size : 'small',
        theme_advanced_resize_horizontal : false,
        style_formats : [ {
            title : 'Bold text',
            inline : 'b'
        }, {
            title : 'Red text',
            inline : 'span',
            styles : {
                color : '#ff0000'
            }
        }, {
            title : 'Red header',
            block : 'h1',
            styles : {
                color : '#ff0000'
            }
        }, {
            title : 'Example 1',
            inline : 'span',
            classes : 'example1'
        }, {
            title : 'Example 2',
            inline : 'span',
            classes : 'example2'
        }, {
            title : 'Table styles'
        }, {
            title : 'Table row 1',
            selector : 'tr',
            classes : 'tablerow1'
        } ],

        templates : [ {
            title : 'Test template 1',
            content : 'Test 1'
        }, {
            title : 'Test template 2',
            content : 'Test 2'
        } ],
        etudiant_css : "style/submenu.css",

        language:"fr_FR"
    });