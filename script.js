window.onload =()=> function() {


  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let emptyArray = [];
  for (let i in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(pronoun[i] + adj[b] + noun[c] + ".com <br>");
  console.log(emptyArray);
  document.querySelector(".domains").innerHTML = emptyArray;
};