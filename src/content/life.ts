import type { Localized } from "./types";

export type LifeCategory = {
  id: string;
  title: Localized;
  body: Localized;
  /** Drives the generated tile artwork until real photography arrives. */
  hue: "navy" | "gold" | "mixed";
};

/** Straight from the founder's notes: sports / events / competitions / travel. */
export const lifeCategories = [
  {
    id: "sport",
    title: { uz: "Sport", ru: "Спорт", en: "Sport" },
    body: {
      uz: "Maktab jamoalari, viloyat musobaqalari va kunlik mashgʻulotlar.",
      ru: "Школьные команды, областные соревнования и ежедневные тренировки.",
      en: "School teams, regional competitions, and daily training.",
    },
    hue: "navy",
  },
  {
    id: "competitions",
    title: { uz: "Tanlovlar", ru: "Конкурсы", en: "Competitions" },
    body: {
      uz: "Fan olimpiadalari — tuman, viloyat va respublika bosqichlari.",
      ru: "Предметные олимпиады — районный, областной и республиканский этапы.",
      en: "Subject olympiads at district, regional and national level.",
    },
    hue: "gold",
  },
  {
    id: "events",
    title: { uz: "Tadbirlar", ru: "Мероприятия", en: "Events" },
    body: {
      uz: "Oʻquvchilar parlamenti tomonidan tashkil etiladigan yillik tadbirlar.",
      ru: "Ежегодные мероприятия, организованные ученическим парламентом.",
      en: "A year of events, organised by the student parliament.",
    },
    hue: "mixed",
  },
  {
    id: "travel",
    title: { uz: "Safarlar", ru: "Поездки", en: "Travel" },
    body: {
      uz: "Oʻquv safarlari, ekskursiyalar va boshqa shaharlardagi tanlovlar.",
      ru: "Учебные поездки, экскурсии и конкурсы в других городах.",
      en: "Study trips, excursions, and competitions in other cities.",
    },
    hue: "navy",
  },
  {
    id: "volunteering",
    title: { uz: "Volontyorlik", ru: "Волонтёрство", en: "Volunteering" },
    body: {
      uz: "Mahalladagi tashabbuslar va yordam ishlari.",
      ru: "Инициативы и помощь в махалле.",
      en: "Community initiatives and volunteer work.",
    },
    hue: "gold",
  },
] satisfies LifeCategory[];
