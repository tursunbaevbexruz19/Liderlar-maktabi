import type { Stat } from "./types";

/**
 * THE PROOF STRIP — deliberately contains no ranking and no percentage.
 *
 * It previously carried "TOP-6", "90% university admission" and "TOP-800".
 * All three came from reading the founder's handwritten notes and NONE of them
 * has been checked against a published source. In this market an unverifiable
 * ranking converts negatively: a parent asks their cousin, the cousin cannot
 * confirm it, and the whole site loses credibility.
 *
 * So these four are structural facts about how the school is built — things a
 * visiting parent can confirm with their own eyes in an afternoon.
 *
 * The moment the school produces documents, the real outcome figures belong
 * here and these move down the page.
 */
export const stats = [
  {
    id: "since",
    value: "1996",
    label: {
      uz: "Shu binoda",
      ru: "В этом здании",
      en: "In this building",
    },
    note: {
      uz: "Kelib koʻrsangiz boʻladi",
      ru: "Можно приехать и посмотреть",
      en: "You can come and see it",
    },
  },
  {
    id: "tracks",
    value: "8",
    label: {
      uz: "Fan yoʻnalishi",
      ru: "Профильных направления",
      en: "Subject tracks",
    },
    note: {
      uz: "Blok oila bilan tanlanadi",
      ru: "Блок выбирается вместе с семьёй",
      en: "The block is chosen with the family",
    },
  },
  {
    id: "posts",
    value: "5",
    label: {
      uz: "Parlament lavozimi",
      ru: "Должностей в парламенте",
      en: "Parliament posts",
    },
    note: {
      uz: "Saylov orqali beriladi",
      ru: "Распределяются по выборам",
      en: "Filled by election",
    },
  },
] satisfies Stat[];
