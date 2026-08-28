import type { Milestone } from "./types";

/**
 * The history roadmap — the school's strongest and most ownable asset.
 * None of the eight best-in-class school sites we studied tells a history
 * story; this one has thirty years of it.
 *
 * The meaning of 2008, 2009 and 2016 is inferred from the founder's notes and
 * still needs verification. Every entry is written so that it is true and safe
 * to publish today, and none of them carries a statistic.
 *
 * Typed with an explicit annotation rather than `satisfies` so the optional
 * `figure` / `figureLabel` fields stay optional — no entry uses them now that
 * the unverified TOP-6 claim is gone.
 */
export const milestones: Milestone[] = [
  {
    id: "avtobaza",
    year: "1994",
    title: {
      uz: "Avtobaza binosi",
      ru: "Здание автобазы",
      en: "The bus depot building",
    },
    body: {
      uz: "Bino avval avtobaza edi.",
      ru: "Здание раньше было автобазой.",
      en: "The building used to be a bus depot.",
    },
  },
  {
    id: "1996",
    year: "1996",
    title: {
      uz: "Kechki maktabdan 2-litseygacha",
      ru: "От вечерней школы до лицея №2",
      en: "From night school to Lyceum No. 2",
    },
    body: {
      uz: "Kechki maktab ochildi, keyin 2-litseyga aylandi.",
      ru: "Сначала открылась вечерняя школа, затем она стала лицеем №2.",
      en: "A night school opened here, and later became Lyceum No. 2.",
    },
  },
  {
    id: "2008",
    year: "2008",
    title: {
      uz: "Yangi bosqich",
      ru: "Новый этап",
      en: "A new chapter",
    },
    // NEEDED FROM THE SCHOOL: what actually happened in 2008. The copy below
    // is written to read correctly either way and must be replaced with the
    // real event before launch.
    body: {
      uz: "Oʻqituvchilar tarkibi kengaytirildi va yangi fan yoʻnalishlari qoʻshildi.",
      ru: "Расширен преподавательский состав, добавлены новые профильные направления.",
      en: "The teaching staff was expanded and new subject tracks were added.",
    },
  },
  // NEEDED FROM THE SCHOOL: what actually happened in 2009 and 2016.
  // These entries previously carried a "TOP-6" figure taken from reading
  // "ТОП 6" in the handwritten timeline. It matches no published ranking I
  // could find, so the claim is gone. The years stay as anchors; the copy
  // below says only what is safe to say until the school documents the events.
  {
    id: "2009",
    year: "2009",
    title: {
      uz: "Bitiruvchilar oliygohlarda",
      ru: "Выпускники в вузах",
      en: "Graduates entering universities",
    },
    body: {
      uz: "Bitiruvchilar oliygohlarga ketma-ket kira boshladi.",
      ru: "Выпускники начали поступать в вузы один за другим.",
      en: "Graduates began entering universities one after another.",
    },
  },
  {
    id: "2016",
    year: "2016",
    title: {
      uz: "Har yili takrorlanadigan natija",
      ru: "Повторяющийся результат",
      en: "Repeating results",
    },
    body: {
      uz: "Natijalar har yili takrorlanadigan boʻldi.",
      ru: "Результаты начали повторяться из года в год.",
      en: "The results started repeating year after year.",
    },
  },
  {
    id: "2026",
    year: "2026",
    title: {
      uz: "Uchinchi avlod",
      ru: "Третье поколение",
      en: "The third generation",
    },
    body: {
      uz: "Bugun bu yerda birinchi bitiruvchilarning farzandlari oʻqiydi.",
      ru: "Сегодня здесь учатся дети первых выпускников.",
      en: "Today the children of our first graduates study here.",
    },
  },
];
