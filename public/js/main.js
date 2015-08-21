$(function(){


  function loop(element,number) {
    var cs  = document.getElementById(element);
    var ctx = cs.getContext('2d');
    var w = 300;
    var h = 300;
    var x = 0;

    function render1() {
      ctx.clearRect(0, 0, w, h); // Canvas全体をクリア
      ctx.beginPath();
      // ctx.strokeRect(x, 10, 10, 10);  //四角形を描く
      ctx.arc(x,20,10,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fillStyle = "#ddf";
      ctx.strokeStyle = "#00f";
      ctx.fill();
      ctx.stroke();
      if (x > cs.width) {
        x = 0;
      } else {
        x += 10;
      }
    }

    function render2() {
      ctx.clearRect(0, 0, w, h); // Canvas全体をクリア
      ctx.beginPath();
      // ctx.strokeRect(x, 10, 10, 10);  //四角形を描く
      ctx.arc(x,20,10,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fillStyle = "#ddf";
      ctx.strokeStyle = "#00f";
      ctx.fill();
      ctx.stroke();
      if (x > cs.width) {
        x = 0;
      } else {
        x += 10;
      }
    }

    function render3() {
      ctx.clearRect(0, 0, w, h); // Canvas全体をクリア
      ctx.beginPath();
      // ctx.strokeRect(x, 10, 10, 10);  //四角形を描く
      ctx.arc(x,20,10,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fillStyle = "#ddf";
      ctx.strokeStyle = "#00f";
      ctx.fill();
      ctx.stroke();
      if (x > cs.width) {
        x = 0;
      } else {
        x += 10;
      }
    }

    function render4() {
      ctx.clearRect(0, 0, w, h); // Canvas全体をクリア
      ctx.beginPath();
      // ctx.strokeRect(x, 10, 10, 10);  //四角形を描く
      ctx.arc(x,20,10,0,Math.PI*2,true);
      ctx.closePath();
      ctx.fillStyle = "#ddf";
      ctx.strokeStyle = "#00f";
      ctx.fill();
      ctx.stroke();
      if (x > cs.width) {
        x = 0;
      } else {
        x += 10;
      }
    }

    switch(number){
      case 1:
        setInterval( render1, 100 );
        break;
      case 2:
        setInterval( render2, 100 );
        break;
      case 3:
        setInterval( render3, 100 );
        break;
      case 4:
        setInterval( render4, 100 );
        break;
    }
  }


  loop('xy-abs',1);
  loop('xy-rel',2);
  loop('pol-abs',3);
  loop('pol-rel',4);

});
