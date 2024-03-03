export function findSmallestInt(args: number[]): number {
  let lowerValue: number = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] < lowerValue) lowerValue = args[i];
  }

  return lowerValue;
}

findSmallestInt([34, -345, -1, 100]);
