(function square_sums_row(n) {
	solution = [];
    var y = new Set()
    var z = new Set()
    var dictionary = new Set()  
    for(let i = 0;i<=1000;i++){
      if(i*i<n*2){
        dictionary.add (i*i)
      }
    }
    for(let j = 1; j < n+1; j++){
    y.add(j);
    z.add(j);
  }
  dictionary.delete(0)
  y.delete(0)
  // console.time("timer")
  recurse = () => {
    if (dictionary.size < 1){//exit condition
      return
    }else{
    for (i=y.size;i>0;i--){
      // if(!y.has([...dictionary][dictionary.size-1]-[...z][i])){
      //     continue; //early exit, doesnt seem to be doing much.
      // }else
       if(y.has([...dictionary][dictionary.size-1]-[...z][i])&&
       [...z][i]){
        solution.push([[...z][i],([...dictionary][dictionary.size-1]-i-1)]);
        y.delete([...z][i]);
        y.delete([...dictionary][dictionary.size-1]-[...z][i])
       }
       dictionary.delete([...dictionary][dictionary.size-1])
       recurse()
    }
  }
  }

  // console.timeEnd("timer")}



  // while loop, create as many 2 element arrays which can sum to be the value of the square in the library which is less then 2n.
  // while loop again, create as many 2 element arrays which can sum to the value in of the square in the library less than the first value used
  //.
  // .
  // .
  // so on and so forth. until we run out. while we do these loops, we're popping out of our initial input set.
  // match the arrays ends, head and tail, head of 1 to tail of one, allow for flipping of the array.
  // at most we can only have one tail and one head which are unpaired.
  //   return solution
  debugger;

  recurse()

  	console.log(solution)
    console.log(z)
    console.log([...dictionary].length)
  
  })(15)