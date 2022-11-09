function main(a, b, c, d){
    a = 5;
    b = 7;
    c = 6;
    d = 8;

    let media = (a + b + c + d) / 4;
    let notaFinal;

    if (media >= 9){
      notaFinal = "A";}
    else if (media >= 7.5){
      notaFinal = "B";}
    else if (media >= 6){
      notaFinal = "C";}
    else if (media >= 4){
      notaFinal = "D";}
    else{
      notaFinal = "F";
    }
    console.log(notaFinal);
  }
    main()