export function formatLabel(input: string) {
  const words = input.split("_");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const formattedInput = words.join(" ");

  return formattedInput;
}
