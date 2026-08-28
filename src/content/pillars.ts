import type { Pillar } from "./types";

/**
 * LEARN · GROW · LEAD is already on the school crest, so the site uses it as
 * its three sections. The English words stay English in every locale — they
 * are brand, not copy.
 *
 * Descriptions are plain statements of what the school actually does.
 */
export const pillars = [
  {
    id: "learn",
    word: "LEARN",
    native: { uz: "Oʻrgan", ru: "Учись", en: "Learn" },
    title: {
      uz: "Fan yoʻnalishlari",
      ru: "Профильные направления",
      en: "Subject tracks",
    },
    body: {
      uz: "6-sinfdan 11-sinfgacha sakkizta fan yoʻnalishi. Fan bloki 9-sinfdan oila bilan birga tanlanadi.",
      ru: "Восемь профильных направлений с 6 по 11 класс. Блок выбирается вместе с семьёй с 9 класса.",
      en: "Eight subject tracks from Grade 6 to Grade 11. The block is chosen with the family from Grade 9.",
    },
    href: "/talim",
  },
  {
    id: "grow",
    word: "GROW",
    native: { uz: "Oʻs", ru: "Расти", en: "Grow" },
    title: {
      uz: "Darsdan tashqari ish",
      ru: "Занятия вне уроков",
      en: "Outside the classroom",
    },
    body: {
      uz: "Oʻquvchilar parlamenti, volontyorlik, sport, fan olimpiadalari va safarlar.",
      ru: "Ученический парламент, волонтёрство, спорт, предметные олимпиады и поездки.",
      en: "Student parliament, volunteering, sport, subject olympiads and trips.",
    },
    href: "/hayot",
  },
  {
    id: "lead",
    word: "LEAD",
    native: { uz: "Yetakchilik", ru: "Веди", en: "Lead" },
    title: {
      uz: "Maktabdan keyin",
      ru: "После школы",
      en: "After school",
    },
    body: {
      uz: "Tibbiyot, IT va chet elda oʻqish. Hujjat topshirish va til boʻyicha yordam beramiz.",
      ru: "Медицина, IT и обучение за рубежом. Помогаем с документами и языком.",
      en: "Medicine, IT and study abroad. We help with the paperwork and the language.",
    },
    href: "/bitiruvchilar",
  },
] satisfies Pillar[];
