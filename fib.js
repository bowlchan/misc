var fib = function(n){
  n = parseInt(n)
  if(isNaN(n) || n<=0) throw Error("invalid argument");
  var seq = [1, 1];
  while(seq.length < n){
    var last = seq.length - 1;
    seq.push(seq[last] + seq[last-1]);
  }
  return seq[n-1];
};
console.log(fib(100));
