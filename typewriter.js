const sentence = "hello there from lighthouse labs";


  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      if(sentence.length -1 > i) {
        process.stdout.write(sentence[i]);

      } else {
        process.stdout.write(sentence[i] + "\n");

      }
      
      }, 50 * i)   
  }
  















