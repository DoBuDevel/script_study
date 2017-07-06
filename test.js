var i, len =3;
	for(i=0; i<len; i++){
  	document.getElementById("div"+i).addEventListener(
    "click",
    (function(index){
      return function () {
          alert("div "+index);
      };
    }(i)), false);
  }
