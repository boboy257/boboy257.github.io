$(document).ready(function(){
    Dunia();
    Asia();
    setInterval(function(){
        Dunia();
        Asia();
    }, 3000);
    
    
    function Dunia(){
        $.getJSON({
            url : 'https://covid19.mathdro.id/api',
            success : function(data){
                try{
                    var positif = data.confirmed.value;
                    var mati = data.deaths.value;
                    var sembuh = data.recovered.value;
                    $('#terpapar').html(Number(positif).toLocaleString('id'));
                    $('#mati').html(Number(mati).toLocaleString('id'));
                    $('#sembuh').html(Number(sembuh).toLocaleString('id'));
                }catch{
                    alert('error');
                }
            }
        });
    }

    function Asia(){
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Indonesia',
                success : function(data){
                    try{                    
                        var positif = data.confirmed.value;
                        var mati = data.deaths.value;
                        var sembuh = data.recovered.value;
                            $('#terpapar-indonesia').html(Number(positif).toLocaleString('id'));
                            $('#mati-indonesia').html(Number(mati).toLocaleString('id'));
                            $('#sembuh-indonesia').html(Number(sembuh).toLocaleString('id'));
                            }catch{
                                alert('Error');
                                }
                            }
                        });

        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Malaysia',
                success : function(data){
                        try{
                            var positif = data.confirmed.value;
                            var mati = data.deaths.value;
                            var sembuh = data.recovered.value;
                                $('#terpapar-malaysia').html(Number(positif).toLocaleString('id'));
                                $('#mati-malaysia').html(Number(mati).toLocaleString('id'));
                                $('#sembuh-malaysia').html(Number(sembuh).toLocaleString('id'));
                            }catch{
                                    alert('Error');
                                }
                            }
                        });


        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Philippines',
                success : function(data){
                        try{
                            var positif = data.confirmed.value;
                            var mati = data.deaths.value;
                            var sembuh = data.recovered.value;
                                $('#terpapar-filipina').html(Number(positif).toLocaleString('id'));
                                $('#mati-filipina').html(Number(mati).toLocaleString('id'));
                                $('#sembuh-filipina').html(Number(sembuh).toLocaleString('id'));
                            }catch{
                                    alert('Error');
                                }
                            }
                        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Thailand',
                success : function(data){
                        try{
                            var positif = data.confirmed.value;
                            var mati = data.deaths.value;
                            var sembuh = data.recovered.value;
                                $('#terpapar-thailand').html(Number(positif).toLocaleString('id'));
                                $('#mati-thailand').html(Number(mati).toLocaleString('id'));
                                $('#sembuh-thailand').html(Number(sembuh).toLocaleString('id'));
                                }catch{
                                    alert('Error');
                                }
                            }
                        });
        $.getJSON({
            url : 'https://covid19.mathdro.id/api/countries/Singapore',
                success : function(data){
                        try{
                            var positif = data.confirmed.value;
                            var mati = data.deaths.value;
                            var sembuh = data.recovered.value;
                                $('#terpapar-singapore').html(Number(positif).toLocaleString('id'));
                                $('#mati-singapore').html(Number(mati).toLocaleString('id'));
                                $('#sembuh-singapore').html(Number(sembuh).toLocaleString('id'));
                            }catch{
                                alert('Error');
                            }
                        }
                    });
    }
})    
