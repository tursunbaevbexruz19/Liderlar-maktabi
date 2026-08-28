import type { ParliamentRole } from "./types";

/**
 * The Student Parliament — the PROOF of the school's central claim.
 *
 * `holder` is intentionally an empty string until the school supplies real
 * names. The UI omits the line entirely when it is empty, so the card reads as
 * complete (role + grade + what that person actually ran) rather than showing
 * a placeholder to a visiting parent.
 *
 * NEEDED FROM THE SCHOOL: the five students' names and grades.
 *
 * Note: there is no Vice President. The founder crossed it out.
 */
export const parliament = [
  {
    id: "president",
    role: { uz: "Prezident", ru: "Президент", en: "President" },
    holder: "",
    grade: "11",
    did: {
      uz: "Oʻquvchilar kengashini boshqaradi. Har hafta maktab maʼmuriyati bilan uchrashadi.",
      ru: "Возглавляет совет учеников. Еженедельно встречается с администрацией школы.",
      en: "Chairs the student council. Meets the school administration every week.",
    },
  },
  {
    id: "events",
    role: {
      uz: "Tadbirlar menejeri",
      ru: "Менеджер мероприятий",
      en: "Event Manager",
    },
    holder: "",
    grade: "10",
    did: {
      uz: "Yillik tadbirlar rejasini tuzadi va tadbirlarni oʻtkazadi.",
      ru: "Составляет годовой план мероприятий и проводит их.",
      en: "Plans the year's events and runs them.",
    },
  },
  {
    id: "volunteers",
    role: {
      uz: "Volontyorlar rahbari",
      ru: "Руководитель волонтёров",
      en: "Head of Volunteers",
    },
    holder: "",
    grade: "10",
    did: {
      uz: "Volontyorlik guruhini tuzadi va mahalladagi ishlarni tashkil qiladi.",
      ru: "Формирует волонтёрскую группу и организует работу в махалле.",
      en: "Builds the volunteer group and organises work in the neighbourhood.",
    },
  },
  {
    id: "media",
    role: { uz: "Media rahbari", ru: "Руководитель медиа", en: "Head of Media" },
    holder: "",
    grade: "11",
    did: {
      uz: "Maktabning ijtimoiy tarmoqlarini yuritadi va video tayyorlaydi.",
      ru: "Ведёт соцсети школы и готовит видео.",
      en: "Runs the school's social channels and makes the videos.",
    },
  },
  {
    id: "media-assistant",
    role: {
      uz: "Media yordamchisi",
      ru: "Помощник по медиа",
      en: "Media Assistant",
    },
    holder: "",
    grade: "9",
    did: {
      uz: "Tadbirlarni suratga oladi va montaj qiladi.",
      ru: "Снимает и монтирует мероприятия.",
      en: "Shoots and edits the school's events.",
    },
  },
] satisfies ParliamentRole[];
