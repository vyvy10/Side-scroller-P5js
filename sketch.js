var man;
let img, img2, img3;
// let rock;
let rocks = [];
//This is the second obstacle
let bombs = [];
let scene;


function setup() {
  createCanvas(400, 400);

  img = loadImage("Mathman2.png");
  img2 = loadImage("rock.png")
  //The image of the bombs
  img3 = loadImage("bomb.jpg")
  man = new Person(img);
  bckgrnd = loadImage("mountain.jpg")
  scene = 1
  // rock = new Obstacle(img2);

  //obstacles
  for (let i = 0; i < 10; i++) {
    rocks[i] = new Obstacle(img2, random(15));
  }
  //obstacles2
  for (let i = 0; i < 10; i++) {
    bombs[i] = new Obstacle2(img3, random(15));

  }


}







function keyPressed() {
  if (key == ' ') {
    let force = createVector(0, -16);
    man.applyForce(force);
  }


}




function draw() {
  if (scene == 1) {
    background(200, 175, 175);
    textAlign(CENTER);
    textSize(45);
    textFont('serif');
    text("Press to start", 200, 200);
    if (keyIsPressed) {
      scene = 2
    }
  }
  if (scene == 2) {



    background(bckgrnd);

    //point of view around "man"
    translate(-man.pos.x + 20, 0);

    let gravity = createVector(0, 1);
    man.applyForce(gravity);






    //the player
    man.update();
    man.display();
    man.edges();

    //an obstacle as a rock
    // rock.update();
    // rock.display();
    // rock.edges();


    //obstacles

    for (let i = 0; i < 10; i++) {
      rocks[i].update();
      rocks[i].display()
      rocks[i].edges();
      man.hits(rocks[i])
    }

    for (let i = 0; i < 10; i++) {
      bombs[i].update();
      bombs[i].display()
      bombs[i].edges();
      man.hits(bombs[i])

    }

  }
  if (scene == 3) {
    background(235, 247, 255);

  }
  if (man.pos.x >= 1000) {
    textAlign(CENTER);
    textSize(35);
    text("OH NO, GAME OVER", 200, 200);
    scene = 3;
  }


}

// for (let i = 0; i < 10; i++) {
//   fill(10);
//   rect(250+i*160, 350+i, 100, 100);
// }
