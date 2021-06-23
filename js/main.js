function Converter(decimal) {
    console.log(decimal);
    $("#labeldecimal").empty();
    $("#labeldecimal").append("Numero Decimal: "+decimal);
    Binario = [];
    temp =decimal ;
    bits =0;
    while( temp > 0){
        bits++;
        if (temp % 2 == 0){
            Binario.push(0);
        }else{
            Binario.push(1);

        }
        temp = Math.floor(temp /2);
    }
    if (bits <8){
        for(var i= bits; i<8;i++){
            Binario.push(0);
        }
    }

    Binario.reverse();
    console.log("Binario ->> "+Binario)


    for(var i = 0; i < 8; i++){
        $("#lb").empty();
        $("#lb").append(Binario);
        $("#"+i).empty();
        $("#"+i).append(Binario[i]);
        if(Binario[i] == 0){
            $("#"+i+"b").css("background-color","red")
        }else{
            $("#"+i+"b").css("background-color","green")
        }
    }
  }