import type { Localized } from "./types";

export type FaqItem = {
  id: string;
  q: Localized;
  a: Localized;
};

/**
 * The questions parents actually ask, answered plainly.
 *
 * Two rules were applied to every answer:
 *  1. Nothing is invented. Where the school has not given me the number (the
 *     fee, the intake dates), the answer says "ask us and we'll tell you"
 *     rather than making something up.
 *  2. No guarantees. The study-abroad answer explicitly says the outcome is
 *     not guaranteed — promising a visa or an admission would be both false
 *     and legally exposed, and sophisticated parents read a guarantee as a
 *     warning sign.
 */
export const faq = [
  {
    id: "grades",
    q: {
      uz: "Qaysi sinflarni qabul qilasiz?",
      ru: "Какие классы вы принимаете?",
      en: "Which grades do you accept?",
    },
    a: {
      uz: "Barcha sinflarni qabul qilamiz.",
      ru: "Мы принимаем во все классы.",
      en: "We accept students into every grade.",
    },
  },
  {
    id: "entrance",
    q: {
      uz: "Kirish sinovi bormi?",
      ru: "Есть ли вступительное тестирование?",
      en: "Is there an entrance assessment?",
    },
    a: {
      uz: "Bor, lekin majburiy emas. Sinov farzandingiz hozir qayerda turganini koʻrsatadi va sizni hech narsaga majbur qilmaydi.",
      ru: "Есть, но оно не обязательно. Тестирование показывает, где сейчас находится ваш ребёнок, и ни к чему вас не обязывает.",
      en: "There is one, but it is optional. It shows where your child currently stands and commits you to nothing.",
    },
  },
  {
    id: "fee",
    q: {
      uz: "Oʻqish narxi qancha?",
      ru: "Сколько стоит обучение?",
      en: "How much does it cost?",
    },
    a: {
      uz: "Narxni Telegramda yoki telefonda aniq aytamiz. Toʻlov ichiga nimalar kirishini ham toʻliq tushuntiramiz.",
      ru: "Точную цену назовём в Telegram или по телефону. Также подробно объясним, что входит в оплату.",
      en: "We'll give you the exact figure on Telegram or by phone, along with a full breakdown of what it covers.",
    },
  },
  {
    id: "tutors",
    q: {
      uz: "Repetitor kerak boʻladimi?",
      ru: "Понадобится ли репетитор?",
      en: "Will we still need a tutor?",
    },
    a: {
      uz: "Bitiruv imtihoniga tayyorgarlik toʻlov ichida. Agar biror fan boʻyicha qoʻshimcha kerak boʻlsa, buni sizga oʻzimiz aytamiz.",
      ru: "Подготовка к выпускным экзаменам входит в оплату. Если по какому-то предмету понадобится дополнительная помощь, мы скажем вам сами.",
      en: "Final exam preparation is included in the fee. If a subject needs extra help, we will tell you ourselves.",
    },
  },
  {
    id: "abroad",
    q: {
      uz: "Chet elda oʻqishga yordam berasizmi?",
      ru: "Помогаете ли с обучением за рубежом?",
      en: "Do you help with studying abroad?",
    },
    a: {
      uz: "Hujjat, til va viza jarayonida yordam beramiz. Lekin natijani — viza yoki qabulni — kafolatlay olmaymiz.",
      ru: "Помогаем с документами, языком и визовым процессом. Но результат — визу или зачисление — гарантировать не можем.",
      en: "We help with the paperwork, the language and the visa process. We cannot guarantee the outcome — neither a visa nor an admission.",
    },
  },
  {
    id: "visit",
    q: {
      uz: "Maktabni koʻrish mumkinmi?",
      ru: "Можно ли посмотреть школу?",
      en: "Can we visit the school?",
    },
    a: {
      uz: "Ha. Oddiy oʻquv kunida keling: darsda oʻtirasiz, oʻqituvchilar bilan tanishasiz.",
      ru: "Да. Приезжайте в обычный учебный день: посидите на уроке, познакомьтесь с преподавателями.",
      en: "Yes. Come on a normal school day, sit in on a lesson and meet the teachers.",
    },
  },
] satisfies FaqItem[];
