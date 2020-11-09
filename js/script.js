$.getJSON('js/lang.json', function(json){
   $('#langs').change(function(){
        //let lang = $(this).attr('id');
        let lang = $(this).val();

        $('.lang').each(function(index, value){
            $(this).html(json[lang][$(this).attr('key')]);
        })
   }); 
   
});