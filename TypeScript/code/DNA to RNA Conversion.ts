// pegar todos os T e fazer virar U

export function DNAtoRNA(dna: string): string {
  const dnaArray = dna.split("");

  console.log("dnaArray", dnaArray);
  for (let i = 0; i < dna.length; i++) {
    if (dnaArray[i] == "T") {
      dnaArray[i] = "U";
    }
  }

  const rna = dnaArray.join("");

  return rna;
}

DNAtoRNA("TTTT");
