function vote(){
    var name=document.getElementById("name1").value;
    var age=document.getElementById("age").value;
    var Answer=document.getElementById("Answer");
    var country=document.getElementById("country").value;
    if(age>=18){
        if (country.toLowerCase()=="india"){
        Answer.innerHTML=name+" is eligible to vote";}
        else{
            Answer.innerHTML=name+" is not eligible to vote as they are not a citizen of India";}
    }
    else{
        Answer.innerHTML=name+" is not eligible to vote";
    }
}