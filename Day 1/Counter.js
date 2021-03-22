//Function using closure to count how many time it is called

function count() {
    var c = 0;
    function counter(){
        c += 1;
        return c;
    }
    return counter;
  }
  var a = count();
  console.log(a());
  console.log(a());
  console.log(a());