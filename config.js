/* ==========================================================================
   ТонПлат · Конфигурация контактов, условий и интеграции заявок
   Все файлы проекта лежат строго в одной папке (./...) без подпапок.
   ========================================================================== */
window.TONPLAT_CONFIG = {
  brandName: "ТонПлат",
  legalShort: "ООО «Тон Плат»",
  legalFull: "Общество с ограниченной ответственностью «Тон Плат»",
  inn: "6314049248",
  kpp: "631401001",
  ogrn: "1226300038326",
  city: "Самара",
  address: "г. Самара, ул. Комсомольская, 29",
  addressLegal: "443061, г. Самара, ул. Ереванская, 13",
  addressFact: "443099, г. Самара, ул. Комсомольская, 29 (кухня и самовывоз)",
  siteUrl: "https://тонплат.рф/",
  siteUrlPunycode: "https://xn--80avfdgpf.xn--p1ai/",
  email: "tonplatsamara@gmail.com",
  director: "Вардалахос Ольга Геннадьевна",
  mapUrl: "https://yandex.ru/maps/?text=%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%2C%2029",
  phoneDisplay: "+7 (927) 605-84-88",
  phoneHref: "tel:+79276058488",
  whatsappNumber: "79276058488",
  telegramUrl: "https://t.me/+79276058488",
  vkUrl: "https://vk.com/ton_plat_samara",
  responsePromise: "Ответим после получения заявки",
  seasonNote: "Готовим с любовью · Самара и область",

  // ПОДКЛЮЧЕНИЕ ЗАЯВОК В MAX (Zapnoty), 4 шага:
  // 1) Кабинет Zapnoty (app.zapnoty.ru) → раздел каналов Telegram/Max: откройте выданную
  //    дип-ссылку бота Zapnoty в мессенджере MAX и нажмите «Начать» — ваш аккаунт MAX
  //    привяжется как получатель (developer/subscriber). Свой MAX-бот и токен не нужны.
  // 2) Формы → Создать форму. В allowed_origins укажите без путей:
  //    https://тонплат.рф , https://xn--80avfdgpf.xn--p1ai и на переходный период
  //    https://ch1lov1c.github.io — иначе origin-check отклонит запрос.
  // 3) В маршрутах формы добавьте доставку в Max на привязанный аккаунт (можно добавить
  //    email и до 40 маршрутов суммарно). Скопируйте публичный form_id — это UUID.
  // 4) Вставьте UUID ниже в formId (единственное место в коде). API-ключ zn_... и токен
  //    MAX-бота в сайт НЕ вставляются: публичный эндпоинт формы работает без ключей,
  //    а доставка в MAX идёт на стороне Zapnoty.
  zapnoty: {
    formId: "e07d9ea7-c654-4bff-a398-1a8b4dbbd119", // UUID формы Zapnoty из кабинета (app.zapnoty.ru)
    endpointBase: "https://api.zapnoty.com/f/",
  },

  pricing: {
    buffetFrom: 400,
    coffeeBreakFrom: 550,
    banquetFrom: 1800,
    minOrder: 0
  },
};
