export default class Words {
  count(sentence: string): Map<string, number> {
    return sentence
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .reduce(
        (counter: Map<string, number>, word: string): Map<string, number> =>
          counter.set(word, (counter.get(word) || 0) + 1),
        new Map()
      );
  }
}
