function getNumber(str) {
  return str;
}

function getString(fn) {
  if (fn()) {
    console.log("love");
  }
}

getString(getNumber("string"));
