// ESSA TAREFA FOI UM POUCO COMPLICADA, PESQUISEI MUITO NO CHAT GPT

function validBraces(braces) {
  let stack = [];

  const mapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of braces) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const lastElement = stack.pop();

      if (!mapping[lastElement] || char !== mapping[lastElement]) return false;
      // !mapping[lastElement] se o caractere não existir no objeto mapping

      // char !== mapping[lastElement] se o caractere não corresponder ao ultimo caractere que estava em stack, tirei ele com o pop, agora está em lastElement
    }
  }
  return stack.length === 0;
}

console.log(validBraces("(){}[]")); // Output: true
console.log(validBraces("([{}])")); // Output: true
console.log(validBraces("(}")); // Output: false
console.log(validBraces("[(])")); // Output: false
console.log(validBraces("[({})](]")); // Output: false

// DAQUI PARA BAIXO, É O CÓDIGO QUE O CHAT GPT ME ENVIOU, PODE PERCEBER QUE É QUASE IDENTICO AO QUE FIZ, POIS NÃO CONSEGUI SOZINHO!

/* 
function isValidBraces(str) {
    const stack = [];
    const mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Examples:
console.log(isValidBraces("(){}[]"));    // Output: true
console.log(isValidBraces("([{}])"));    // Output: true
console.log(isValidBraces("(}"));        // Output: false
console.log(isValidBraces("[(])"));      // Output: false
console.log(isValidBraces("[({})](]"));  // Output: false

*/
