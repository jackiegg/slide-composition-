

function setup() {
  createCanvas(700, 700, WEBGL);
  detailX = createSlider(10, 24, 3);
  detailX.position(100, height + 500);
  detailX.style('width', '80px');
  
}


function draw() {

  print(pmouseX + ', ' + pmouseY)
  
  
  let x = map(mouseX, 0, 100, 500, 300);

  let r = map(mouseY, 0, height, 0, 153); 
  let g = map(mouseY, 0, height, 0, 204);
  let b = map(mouseY, 0, height, 0, 255);
  background (x, r, g, b);
  ellipse(x, 5, 5, 5);
  
  rotateY(millis() / 10000);
  sphere(50, detailX.value(), 5);
  
  var y=40
  for(vary=60; y < 60; y+=1) {
    ellipse(y,y,y,y); //moon

}

  
  rect(150,150,100,100); //house structure
  
  line(150,150,200,100); //part of roof
  line(250,150,200,100);//2nd part of roof

  fill(0,0,0,);
  rect(184,195,35,55); //door
  
  noFill();
  ellipse(199,173,30,30); //window
  
  //ellipse(35,40,60,60); //moon
  
  ellipse(100,60,2,5); //star
  ellipse(200,45,3,6); //star
  ellipse(300,80,2,4); //star
  
  line(220,250,399,299); //pathway
  line(184,250,380,299); //pathway
  

  
}