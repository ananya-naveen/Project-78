var images=["Sangeetha.JPG","Rohit.JPG","Ananya.jpg","Naveen.JPG"];
var names=["Sangeetha", "Rohit", "Ananya", "Naveen"];
var i=0;
function update(){
    i++;
    var familyMemberofNumber=4;
    if(i>familyMemberofNumber){
        i=0;
    }
    var updateImg=images[i];
    var updateName=names[i];
    document.getElementById("FamilyImg").src=updateImg;
    document.getElementById("family_member_name").innerHTML=updateName;
}