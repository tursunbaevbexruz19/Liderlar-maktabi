import type { Subject } from "./types";

/**
 * Subject specialisation tracks.
 *
 * NOTE: the school accepts students at every grade, so nothing here is scoped
 * to a grade range and the site does not state one anywhere. An earlier
 * version carried a "6–11" framing taken from the founder's notes; that was
 * wrong and has been removed.
 */
export const subjects = [
  {
    id: "math",
    name: { uz: "Matematika", ru: "Математика", en: "Mathematics" },
    group: "science",
  },
  {
    id: "physics",
    name: { uz: "Fizika", ru: "Физика", en: "Physics" },
    group: "science",
  },
  {
    id: "chemistry",
    name: { uz: "Kimyo", ru: "Химия", en: "Chemistry" },
    group: "science",
  },
  {
    id: "biology",
    name: { uz: "Biologiya", ru: "Биология", en: "Biology" },
    group: "science",
  },
  {
    id: "history",
    name: { uz: "Tarix", ru: "История", en: "History" },
    group: "humanities",
  },
  {
    id: "english",
    name: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
    group: "language",
  },
  {
    id: "russian",
    name: { uz: "Rus tili", ru: "Русский язык", en: "Russian" },
    group: "language",
  },
  {
    id: "it",
    name: {
      uz: "Informatika va IT",
      ru: "Информатика и IT",
      en: "Computing & IT",
    },
    group: "tech",
  },
] satisfies Subject[];
