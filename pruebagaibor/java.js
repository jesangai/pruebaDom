

class Marker{
    constructor(objres){
         this.point = new Point(objres.point);    

        this.homeTeam = objres.homeTeam;
        this.awayTeam = objres.awayTeam;
        this.markerImage = objres.markerImage;
        this.information = objres.information;
        this.fixture = objres.fixture;
        this.capacity = objres.capacity;
        this.url = new Url(objres.url);
        
    }
}

class Point{
    constructor(objpoint){
        this.Lat = objpoint.Lat;
        this.Lng = objpoint.Lng;
    }
}

class Url{
    constructor(objurl){
        this.link = objurl.link;
        this.title = objurl.title;
    }
}

function cargarDatos(){
var arreglo =[];
var strDatos = [{"markers":[{"point":{"Lat":40.266044,"Lng":-74.718479},"homeTeam":"Lawrence Library","awayTeam":"LUGip","markerImage":"images/Red_Team_2048x2048.jpg","information":"Linux users group meets second Wednesday of each month.","fixture":"Wednesday 7pm","capacity":"20 users","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"Red Team"}},{"point":{"Lat":40.2116,"Lng":-74.695702},"homeTeam":"Hamilton Library","awayTeam":"LUGip HW SIG","markerImage":"images/Team-White.png","information":"Linux users can meet the first Tuesday of the month to work out harward and configuration issues.","fixture":"Tuesday 7pm","capacity":"45 Persons","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"White Team"}},{"point":{"Lat":40.294535,"Lng":-74.682012},"homeTeam":"Applebees","awayTeam":"After LUPip Mtg Spot","markerImage":"images/newcastle.jpg","information":"Some of us go there after the main LUGip meeting, drink brews, and talk.","fixture":"Wednesday whenever","capacity":"10 usuarios","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"Newcastle Team"}}]}];    
    
for(let i = 0; i<strDatos[0].markers.length; i++){
    alert("holaa");
    arreglo.push(new Marker(strDatos[0].markers[i]))
    console.log(arreglo);
}
     }






