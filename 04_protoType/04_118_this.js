function whatThis(){
  return this.toString();
}

var dobu = {
  what : whatThis,
  toString : function () {
    return "[object]"
  }
}
whatThis();
dobu.what();
whatThis.call();
whatThis.apply(dobu);
dobu.what.call(undefined);
dobu.what.call(dobu);
