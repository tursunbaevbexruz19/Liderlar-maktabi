import type { Track } from "./types";

/**
 * The three destinations from the founder's notes: Medical / IT / Visa.
 * These also power the 3-question track finder.
 */
export const tracks = [
  {
    id: "medical",
    title: { uz: "Tibbiyot", ru: "Медицина", en: "Medicine" },
    body: {
      uz: "Biologiya va kimyo chuqurlashtirilgan yoʻnalish, tibbiyot oliygohlariga maqsadli tayyorgarlik.",
      ru: "Углублённое направление по биологии и химии, целевая подготовка в медицинские вузы.",
      en: "A deepened biology and chemistry track with targeted preparation for medical schools.",
    },
    points: [
      { uz: "Biologiya va kimyodan kuchaytirilgan dars", ru: "Усиленные занятия по биологии и химии", en: "Intensified biology and chemistry" },
      { uz: "Tibbiyot oliygohlari imtihonlariga tayyorgarlik", ru: "Подготовка к экзаменам медвузов", en: "Medical entrance exam preparation" },
      { uz: "Bitiruvchi shifokorlar bilan uchrashuvlar", ru: "Встречи с выпускниками-врачами", en: "Sessions with alumni doctors" },
    ],
  },
  {
    id: "it",
    title: { uz: "IT va muhandislik", ru: "IT и инженерия", en: "IT & engineering" },
    body: {
      uz: "Matematika, fizika va informatika. Dasturlash koʻnikmalari 6-sinfdan boshlanadi.",
      ru: "Математика, физика и информатика. Навыки программирования — с 6 класса.",
      en: "Mathematics, physics and computing. Programming starts in grade 6.",
    },
    points: [
      { uz: "6-sinfdan dasturlash", ru: "Программирование с 6 класса", en: "Programming from grade 6" },
      { uz: "Matematika va fizika olimpiadalari", ru: "Олимпиады по математике и физике", en: "Maths and physics olympiads" },
      { uz: "Loyiha asosida oʻqitish", ru: "Проектное обучение", en: "Project-based learning" },
    ],
  },
  {
    id: "abroad",
    title: { uz: "Chet elda taʼlim", ru: "Обучение за рубежом", en: "Study abroad" },
    body: {
      uz: "Til tayyorgarligi, hujjatlar va viza jarayoni — oiladan yolgʻiz oʻzi hal qilishni talab qilmaymiz.",
      ru: "Языковая подготовка, документы и визовый процесс — семья проходит это не в одиночку.",
      en: "Language preparation, paperwork and the visa process — families don't navigate it alone.",
    },
    points: [
      { uz: "Ingliz tilidan maqsadli tayyorgarlik", ru: "Целевая подготовка по английскому", en: "Targeted English preparation" },
      { uz: "Hujjatlar va motivatsion xat", ru: "Документы и мотивационное письмо", en: "Applications and personal statements" },
      { uz: "Viza jarayonida yordam", ru: "Помощь в визовом процессе", en: "Support through the visa process" },
    ],
  },
] satisfies Track[];
