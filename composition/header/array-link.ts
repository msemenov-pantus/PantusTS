export interface InterfaceLink {
  readonly id: number;
  readonly to: string;
  readonly text: string;
}
export const linksTop: InterfaceLink[] = [
  { id: 1, to: "", text: "Мобильное приложение" },
  { id: 2, to: "", text: "Доставка" },
  { id: 3, to: "", text: "Оплата" },
  { id: 4, to: "", text: "Новости" },
  { id: 5, to: "", text: "Помощь" },
  { id: 6, to: "", text: "Контакты" },
];
export const linksTopDropdown: InterfaceLink[] = [
  { id: 1, to: "", text: "О компании" },
  { id: 2, to: "", text: "Работа в компании" },
  { id: 3, to: "", text: "ОПТ" },
  { id: 4, to: "", text: "Поставщикам" },
  { id: 5, to: "", text: "Документы и реквизиты" },
  { id: 6, to: "", text: "Дилерские сертификаты" },
];
