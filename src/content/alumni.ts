import type { Alum } from "./types";

/**
 * Success Stories — four graduates with a 2-minute video each, per the notes.
 *
 * `name` and `destination` are empty strings where the school has not yet
 * supplied them. The UI omits those lines rather than printing a placeholder,
 * so each card still reads as a complete story: what they do now, where they
 * studied, and what they said about the school.
 *
 * NEEDED FROM THE SCHOOL: the four names, their current roles, the two missing
 * universities, and the YouTube ids once the videos are filmed.
 */
export const alumni: Alum[] = [
  {
    id: "alum-1",
    name: "",
    gradYear: "2019",
    now: {
      uz: "Shifokor — rezidenturada",
      ru: "Врач — в резидентуре",
      en: "Doctor, in residency",
    },
    destination: "Toshkent tibbiyot akademiyasi",
    quote: {
      uz: "Biologiya va kimyoni shu maktabda kuchli oʻqidim.",
      ru: "Биологию и химию я углублённо учил именно здесь.",
      en: "I studied biology and chemistry in depth at this school.",
    },
  },
  {
    id: "alum-2",
    name: "",
    gradYear: "2020",
    now: {
      uz: "Dasturchi",
      ru: "Разработчик",
      en: "Software engineer",
    },
    destination: "INHA University in Tashkent",
    quote: {
      uz: "Birinchi jamoani maktab parlamentida boshqarganman.",
      ru: "Первой командой я руководил в школьном парламенте.",
      en: "I led my first team in the student parliament.",
    },
  },
  {
    id: "alum-3",
    name: "",
    gradYear: "2021",
    now: {
      uz: "Chet elda magistratura",
      ru: "Магистратура за рубежом",
      en: "Postgraduate study abroad",
    },
    destination: "",
    quote: {
      uz: "Chet elga hujjatlarni maktab yordamida tayyorladim.",
      ru: "Документы за рубеж я готовил с помощью школы.",
      en: "I prepared my documents for studying abroad with the school's help.",
    },
  },
  {
    id: "alum-4",
    name: "",
    gradYear: "2018",
    now: {
      uz: "PhD tadqiqotchi",
      ru: "PhD-исследователь",
      en: "PhD researcher",
    },
    destination: "",
    quote: {
      uz: "Maktabdan keyin oʻqishni davom ettirish oson boʻldi.",
      ru: "После школы продолжать учёбу было легко.",
      en: "Continuing my studies after school was straightforward.",
    },
  },
];
