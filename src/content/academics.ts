import type { Subject } from "./types";

/** Grades the school teaches. Drives the "which grade is your child in?" selector. */
export const grades = [6, 7, 8, 9, 10, 11] as const;

/**
 * Subject specialisation tracks, from the founder's notes.
 * TODO:CONFIRM — which subjects are offered as a track at which grade.
 */
export const subjects = [
  {
    id: "math",
    name: { uz: "Matematika", ru: "Математика", en: "Mathematics" },
    grades: [6, 7, 8, 9, 10, 11],
    group: "science",
  },
  {
    id: "physics",
    name: { uz: "Fizika", ru: "Физика", en: "Physics" },
    grades: [8, 9, 10, 11],
    group: "science",
  },
  {
    id: "chemistry",
    name: { uz: "Kimyo", ru: "Химия", en: "Chemistry" },
    grades: [8, 9, 10, 11],
    group: "science",
  },
  {
    id: "biology",
    name: { uz: "Biologiya", ru: "Биология", en: "Biology" },
    grades: [8, 9, 10, 11],
    group: "science",
  },
  {
    id: "history",
    name: { uz: "Tarix", ru: "История", en: "History" },
    grades: [6, 7, 8, 9, 10, 11],
    group: "humanities",
  },
  {
    id: "english",
    name: { uz: "Ingliz tili", ru: "Английский язык", en: "English" },
    grades: [6, 7, 8, 9, 10, 11],
    group: "language",
  },
  {
    id: "russian",
    name: { uz: "Rus tili", ru: "Русский язык", en: "Russian" },
    grades: [6, 7, 8, 9, 10, 11],
    group: "language",
  },
  {
    id: "it",
    name: { uz: "Informatika va IT", ru: "Информатика и IT", en: "Computing & IT" },
    grades: [6, 7, 8, 9, 10, 11],
    group: "tech",
  },
] satisfies Subject[];
