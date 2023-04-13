class Player {
  constructor() {
   this.name = null; 
   this.index = null; 
   this.positionX = 0; 
   this.positionX = 0; 
  }

  getCount(){
    var playerCountRef = database.ref("playerCount"); 
    playerCountRef.on("value", (data)=>{
      playerCount = data.val(); 
    })
  }

  //Recibe el parametro que va a actualizar, agregar count
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    }); 
  }

  
}
