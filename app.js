
document.querySelector(".btn").addEventListener("click", ()=>{
    let grade1 = document.getElementById("first").value; 
    grade1 = grade1.toUpperCase();
    let grade2 = document.getElementById("second").value;
    grade2 = grade2.toUpperCase();
    let grade3 = document.getElementById("third").value;
    grade3 = grade3.toUpperCase();
    let grade4 = document.getElementById("fourth").value;
    grade4 = grade4.toUpperCase();
    let grade5 = document.getElementById("fifth").value;
    grade5 = grade5.toUpperCase();
    let grade6 = document.getElementById("sixth").value;
    grade6 = grade6.toUpperCase();
    let grade7 = document.getElementById("seventh").value;
    grade7 = grade7.toUpperCase();
    let grade8 = document.getElementById("eighth").value;
    grade8 = grade8.toUpperCase();
    let grade9 = document.getElementById("nineth").value;
    grade9 = grade9.toUpperCase();

    const unit1 =Number(document.querySelector("#unit1").value);
    const unit2 =Number(document.querySelector("#unit2").value);
    const unit3 =Number(document.querySelector("#unit3").value);
    const unit4 =Number(document.querySelector("#unit4").value);
    const unit5 =Number(document.querySelector("#unit5").value);
    const unit6 =Number(document.querySelector("#unit6").value);
    const unit7 =Number(document.querySelector("#unit7").value);
    const unit8 =Number(document.querySelector("#unit8").value);
    const unit9 =Number(document.querySelector("#unit9").value);


    switch (grade1) {
        case "A" :
           var result1 = 5 * unit1;
            break;
        case "B" :
            var result1 = 4 * unit1;
            break;
        case "C":
            var result1 = 3 * unit1;
            break;
        case "D":
            var result1 = 2 * unit1;
            break;
        case "E":
            var result1 = 1 * unit1;
            break;
        case "F":
            var result1 = 0 * unit1;
            break;
        default:
            break;
    }
    switch (grade2) {
        case "A" :
           var result2 = 5 * unit2;
            break;
        case "B" :
            var result2 = 4 * unit2;
            break;
        case "C":
            var result2 = 3 * unit2;
            break;
        case "D":
            var result2 = 2 * unit2;
            break;
        case "E":
            var result2 = 1 * unit2;
            break;
        case "F":
            var result2 = 0 * unit2;
            break;
        default:
            break;
    }
    switch (grade3) {
        case "A" :
           var result3 = 5 * unit3;
            break;
        case "B" :
            var result3 = 4 * unit3;
            break;
        case "C":
            var result3 = 3 * unit3;
            break;
        case "D":
            var result3 = 2 * unit3;
            break;
        case "E":
            var result3 = 1 * unit3;
            break;
        case "F":
            var result3 = 0 * unit3;
            break;
        default:
            break;
    }
    switch (grade4) {
        case "A" :
           var result4 = 5 * unit4;
            break;
        case "B" :
            var result4 = 4 * unit4;
            break;
        case "C":
            var result4 = 3 * unit4;
            break;
        case "D":
            var result4 = 2 * unit4;
            break;
        case "E":
            var result4 = 1 * unit4;
            break;
        case "F":
            var result4 = 0 * unit4;
            break;
        default:
            break
    }
    switch (grade5) {
        case "A" :
           var result5 = 5 * unit5;
            break;
        case "B" :
            var result5 = 4 * unit5;
            break;
        case "C":
            var result5 = 3 * unit5;
            break;
        case "D":
            var result5 = 2 * unit5;
            break;
        case "E":
            var result5 = 1 * unit5;
            break;
        case "F":
            var result5 = 0 * unit5;
            break;
        default:
           break;
    }
    switch (grade6) {
        case "A" :
           var result6 = 5 * unit6;
            break;
        case "B" :
            var result6 = 4 * unit6;
            break;
        case "C":
            var result6 = 3 * unit6;
            break;
        case "D":
            var result6 = 2 * unit6;
            break;
        case "E":
            var result6 = 1 * unit6;
            break;
        case "F":
            var result6 = 0 * unit6;
            break;
        default:
          break;
    }
    switch (grade7) {
        case "A" :
           var result7 = 5 * unit7;
            break;
        case "B" :
            var result7 = 4 * unit7;
            break;
        case "C":
            var result7 = 3 * unit7;
            break;
        case "D":
            var result7 = 2 * unit7;
            break;
        case "E":
            var result7 = 1 * unit7;
            break;
        case "F":
            var result7 = 0 * unit7;
            break;
        default:
           break;
    }
    switch (grade8) {
        case "A" :
           var result8 = 5 * unit8;
            break;
        case "B" :
            var result8 = 4 * unit8;
            break;
        case "C":
            var result8 = 3 * unit8;
            break;
        case "D":
            var result8 = 2 * unit8;
            break;
        case "E":
            var result8 = 1 * unit8;
            break;
        case "F":
            var result8 = 0 * unit8;
            break;
        default:
            break;
    }
    switch (grade9) {
        case "A" :
           var result9 = 5 * unit9;
            break;
        case "B" :
            var result9 = 4 * unit9;
            break;
        case "C":
            var result9 = 3 * unit9;
            break;
        case "D":
            var result9 = 2 * unit9;
            break;
        case "E":
            var result9 = 1 * unit9;
            break;
        case "F":
            var result9 = 0 * unit9;
            break;
        default:
            break;
    }

    if (isNaN(unit1) == true){
        unit1 =unit1 || 0;
    }
    if (isNaN(unit2) == true){
        unit2 =unit2 || 0;
    }
    if (isNaN(unit3) == true){
        unit3 =unit3 || 0;
    }
    if (isNaN(unit4) == true){
        unit4 =unit4 || 0;
    }
    if (isNaN(unit5) == true){
        unit5 =unit5 || 0;
    }
    if (isNaN(unit6) == true){
        unit6 =unit6 || 0;
    }
    if (isNaN(unit7) == true){
        unit7 =unit7 || 0;
    }
    if (isNaN(unit8) == true){
        unit8 =unit8 || 0;
    }
    if (isNaN(unit9) == true){
        unit9 =unit9 || 0;
    }



    if (isNaN(result1) == true){
        result1 = result1 || 0;
    }
    if (isNaN(result2) == true){
        result2 = result2 || 0;
    }
    if (isNaN(result3) == true){
        result3 = result3 || 0;
    }
    if (isNaN(result4) == true){
        result4 = result4 || 0;
    }
    if (isNaN(result5) == true){
        result5 = result5 || 0;
    }
    if (isNaN(result6) == true){
        result6 = result6 || 0;
    }
    if (isNaN(result7) == true){
        result7 = result7 || 0;
    }
    if (isNaN(result8) == true){
        result8 = result8 || 0;
    }
    if (isNaN(result9) == true){
        result9 = result9 || 0;
    }

      const results = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9;
      const units = unit1 + unit2 + unit3 + unit4 + unit5 + unit6 + unit7 + unit8 + unit9;



      const gpa = results / units;
      let cgpa = gpa.toFixed(2);

      document.querySelector("#scores").innerHTML = "Your CGPA : " + cgpa;
      console.log(cgpa);

      if(cgpa >= 4.5){
          document.querySelector(".title").innerHTML = "Congrats You're a First Class Student"
      }else if(cgpa >= 3.5 && cgpa <= 4.49){
          document.querySelector(".title").innerHTML = "Congrats You're in Second Class Upper"
      }else if(cgpa >= 3 && cgpa <= 3.49){
          document.querySelector(".title").innerHTML = "You're in Second Class Lower"
      }else if (cgpa >= 2.5 && cgpa <= 2.99){
          document.querySelector(".title").innerHTML = "You're a Third Class"
      } else {
          document.querySelector(".title").innerHTML = "Fail But i believe You can do <em>Better</em>"
      }


});






document.querySelector(".reset-btn").addEventListener("click", () =>{
    location.reload();
});


const date = new Date().getUTCFullYear();
document.querySelector('p').innerHTML = "Copyright " + date;
