var colorList = ['#f2f2f2',
 '#d9d9d9',
 '#a6a6a6',
 '#808080',
 '#595959',
 '#262626',
];

var colorListb = ['#F9DBBD',
'#E75A7C',
'#E28413',
'#FFA5AB',
'#C42847',
];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  console.log();
  frameRate(1);

  for(var x = 25; x < windowWidth; x+=25)
  {
	for(var y = 25; y < windowHeight; y+=25)
	{
  	noStroke();

    var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));

   var indexb = floor(random() * colorListb.length);
  var colorHexb = colorListb[indexb];
  fill(color(colorHexb));

    if(random()<0.5)
{
   fill(colorHex);
} else {
   fill(colorHexb);
}
var x = random() * width;
  var y = random() * height;
  var r = random() * 10;

  ellipse(x, y, r);


	}
  }
}
