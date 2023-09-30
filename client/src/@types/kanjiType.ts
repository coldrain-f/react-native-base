export interface KanjiType {
  id: number;
  kanji: string;
  meaning: string;
  onYomi: string[];
  kunYomi: string[];
  readCount: number;
  wordCount: number;
  strokeCount: number;
}
