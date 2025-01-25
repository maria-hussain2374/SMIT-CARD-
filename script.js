let N=prompt("Enter your name");
document.write("Name:Maria <br>"); 
let fathername=prompt("Enter your father name");
document.write("Fathername:Hussain <br>");
let rollnum=prompt("Enter your rollnum");
document.write("rollnum:GMA-256852 <br>");
let gender=prompt("Enter your gender");
document.write("Gender:Female <br>");
let course=prompt("Enter your course!!\n web and app development\n graphic designing\n basic programming\nArtifical intelligence");
let campus=prompt("Enter your campus!!\n numaish\n bahadurabad\n gulshan\n paposh");
if(course=="web and app development"|| course=="wma"|| course=="graphic designing"|| course=="gd"){
    if(campus=="numaish"|| campus=="Numaish"|| campus=="gulshan" || campus=="Gulshan"|| campus=="bahadurabad"|| campus=="Bahadurabad"|| campus=="paposh"|| campus=="Paposh"|| campus=="aliyabad"|| campus=="Aliyabad"|| campus=="malir"|| campus=="Malir"){
       
        alert("congratulations you are selected welcome to smit");
        document.write("congratulations you are selected welcome to smit");
    }
}else{
    alert("sorry you are not eligible right now better luck next time");
    document.write("sorry!you are not eligible right now better luck next time");
}
