import type { Localized } from "./types";

export type Reason = {
  id: string;
  figure: string;
  title: Localized;
  body: Localized;
};

/**
 * "Nimaga bizni tanlash" — why choose us.
 *
 * Written as plain statements of fact. No metaphors, no rhetorical
 * constructions. A parent should be able to read each one and know exactly
 * what to check when they visit.
 */
export const reasons = [
  {
    id: "one-place",
    figure: "01",
    title: {
      uz: "Hamma narsa bitta joyda",
      ru: "Всё в одном месте",
      en: "Everything in one place",
    },
    body: {
      uz: "Fanlar, imtihon tayyorgarligi va oliygoh hujjatlari — bitta maktabda. Har bir oila bilan bitta masʼul oʻqituvchi ishlaydi.",
      ru: "Предметы, подготовка к экзаменам и документы в вуз — в одной школе. С каждой семьёй работает один ответственный преподаватель.",
      en: "Subjects, exam preparation and university applications are all in one school. One teacher is responsible for each family.",
    },
  },
  {
    id: "exam-included",
    figure: "02",
    title: {
      uz: "Imtihon tayyorgarligi toʻlov ichida",
      ru: "Подготовка к экзаменам входит в оплату",
      en: "Exam preparation is included in the fee",
    },
    body: {
      uz: "Fan bloki oila bilan birga tanlanadi. Bitiruv imtihoniga tayyorgarlik uchun alohida toʻlov olinmaydi.",
      ru: "Профильный блок выбирается вместе с семьёй. За подготовку к выпускным экзаменам отдельная плата не берётся.",
      en: "The exam block is chosen together with the family. There is no separate charge for final exam preparation.",
    },
  },
  {
    id: "speaking",
    figure: "03",
    title: {
      uz: "Nutq va jamoa ishi",
      ru: "Речь и работа в команде",
      en: "Speaking and teamwork",
    },
    body: {
      uz: "Oʻquvchilar sinf oldida chiqib gapiradi va tadbir tashkil qiladi. Bu suhbatda va universitetning birinchi kursida kerak boʻladi.",
      ru: "Ученики выступают перед классом и организуют мероприятия. Это нужно на собеседовании и на первом курсе университета.",
      en: "Students present to the class and organise events. This is what an interview and the first year of university require.",
    },
  },
  {
    id: "documented",
    figure: "04",
    title: {
      uz: "Faqat hujjatli raqamlar",
      ru: "Только подтверждённые цифры",
      en: "Only documented numbers",
    },
    body: {
      uz: "Reyting va foizlarni hujjatsiz yozmaymiz. Maktabga kelib chorak hisobotlarini va bitiruvchilar roʻyxatini koʻrishingiz mumkin.",
      ru: "Мы не публикуем рейтинги и проценты без документа. Приехав в школу, вы можете посмотреть четвертные отчёты и список выпускников.",
      en: "We don't publish rankings or percentages without a document. Visit the school and you can see the term reports and the list of graduates.",
    },
  },
] satisfies Reason[];

export type ParentVoice = {
  id: string;
  name: string;
  relation: Localized;
  quote: Localized;
};

/**
 * NEEDED FROM THE SCHOOL: real parent quotes with written consent.
 * These are placeholders. Do not publish invented testimonials.
 */
export const parentVoices = [
  {
    id: "p1",
    name: "",
    relation: {
      uz: "Oʻquvchining onasi",
      ru: "Мама ученика",
      en: "Mother of a student",
    },
    quote: {
      uz: "Oʻgʻlim uyda maktab tadbirini tashkil qilayotganini aytdi. Avval bunday emasdi.",
      ru: "Сын рассказал, что организует школьное мероприятие. Раньше такого не было.",
      en: "My son told me he's organising a school event. That didn't happen before.",
    },
  },
  {
    id: "p2",
    name: "",
    relation: {
      uz: "Bitiruvchi va hozirgi ota-ona",
      ru: "Выпускник и нынешний родитель",
      en: "Graduate, and now a parent",
    },
    quote: {
      uz: "Men ham shu maktabda oʻqiganman. Farzandimni ham shu yerga berdim.",
      ru: "Я сам учился в этой школе. Своего ребёнка тоже привёл сюда.",
      en: "I studied at this school myself. I brought my own child here too.",
    },
  },
  {
    id: "p3",
    name: "",
    relation: {
      uz: "Oʻquvchining otasi",
      ru: "Отец ученицы",
      en: "Father of a student",
    },
    quote: {
      uz: "Imtihon natijasi yaxshi. Qizim endi odamlar oldida bemalol gapiradi.",
      ru: "Результат экзамена хороший. Дочь теперь спокойно говорит перед людьми.",
      en: "The exam results are good. My daughter now speaks easily in front of people.",
    },
  },
] satisfies ParentVoice[];
