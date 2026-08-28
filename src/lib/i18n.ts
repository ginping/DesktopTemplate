export const publicLocales = ["en", "zh", "es", "pt", "de", "fr", "ja", "ko"] as const;
export type PublicLocale = (typeof publicLocales)[number];

type Dictionary = {
  languageName: string;
  eyebrow: string;
  title: string;
  description: string;
  localFirst: string;
  localFirstBody: string;
  security: string;
  securityBody: string;
  system: string;
  light: string;
  dark: string;
  themeLabel: string;
  languageLabel: string;
  ready: string;
};

export const dictionaries: Record<PublicLocale, Dictionary> = {
  en: {
    languageName: "English",
    eyebrow: "Desktop app foundation",
    title: "A native shell with a deliberately small bridge.",
    description:
      "Electron Forge, React, typed IPC, local-first state, themes, i18n, packaging, and real-window tests—without a hosted backend.",
    localFirst: "Local first",
    localFirstBody:
      "The starter works offline. Product data stays local until a feature justifies sync.",
    security: "Narrow by default",
    securityBody: "Sandboxed renderers receive only explicit, typed capabilities through preload.",
    system: "System",
    light: "Light",
    dark: "Dark",
    themeLabel: "Color theme",
    languageLabel: "Language",
    ready: "Desktop foundation ready",
  },
  zh: {
    languageName: "中文",
    eyebrow: "桌面应用工程底座",
    title: "原生外壳，刻意收窄的安全桥接。",
    description:
      "Electron Forge、React、类型安全 IPC、本地优先状态、主题、国际化、打包和真实窗口测试，无需托管后端。",
    localFirst: "本地优先",
    localFirstBody: "模板可完全离线运行，只有功能真正需要同步时才引入云端。",
    security: "默认最小权限",
    securityBody: "沙箱渲染进程只能通过 preload 使用明确且有类型的能力。",
    system: "跟随系统",
    light: "浅色",
    dark: "深色",
    themeLabel: "颜色主题",
    languageLabel: "语言",
    ready: "桌面底座已就绪",
  },
  es: {
    languageName: "Español",
    eyebrow: "Base para apps de escritorio",
    title: "Una carcasa nativa con un puente intencionalmente pequeño.",
    description:
      "Electron Forge, React, IPC tipado, estado local, temas, i18n, empaquetado y pruebas de ventana real sin backend alojado.",
    localFirst: "Primero local",
    localFirstBody:
      "Funciona sin conexión. Los datos siguen locales hasta que la sincronización sea necesaria.",
    security: "Mínimo por defecto",
    securityBody: "El renderer aislado recibe solo capacidades explícitas y tipadas.",
    system: "Sistema",
    light: "Claro",
    dark: "Oscuro",
    themeLabel: "Tema",
    languageLabel: "Idioma",
    ready: "Base preparada",
  },
  pt: {
    languageName: "Português",
    eyebrow: "Base para apps desktop",
    title: "Uma camada nativa com uma ponte deliberadamente pequena.",
    description:
      "Electron Forge, React, IPC tipado, estado local, temas, i18n, empacotamento e testes reais sem backend hospedado.",
    localFirst: "Local primeiro",
    localFirstBody: "Funciona offline. Os dados ficam locais até a sincronização ser necessária.",
    security: "Mínimo por padrão",
    securityBody: "O renderer isolado recebe somente capacidades explícitas e tipadas.",
    system: "Sistema",
    light: "Claro",
    dark: "Escuro",
    themeLabel: "Tema",
    languageLabel: "Idioma",
    ready: "Base pronta",
  },
  de: {
    languageName: "Deutsch",
    eyebrow: "Desktop-App-Fundament",
    title: "Eine native Hülle mit bewusst kleiner Brücke.",
    description:
      "Electron Forge, React, typisiertes IPC, lokaler Zustand, Themes, i18n, Packaging und echte Fenstertests ohne Hosting-Backend.",
    localFirst: "Lokal zuerst",
    localFirstBody: "Funktioniert offline. Daten bleiben lokal, bis Synchronisierung nötig ist.",
    security: "Standardmäßig eng",
    securityBody: "Der Sandbox-Renderer erhält nur explizite, typisierte Fähigkeiten.",
    system: "System",
    light: "Hell",
    dark: "Dunkel",
    themeLabel: "Farbschema",
    languageLabel: "Sprache",
    ready: "Fundament bereit",
  },
  fr: {
    languageName: "Français",
    eyebrow: "Fondation d’application desktop",
    title: "Une coque native avec un pont volontairement réduit.",
    description:
      "Electron Forge, React, IPC typé, état local, thèmes, i18n, packaging et tests de fenêtre réelle sans backend hébergé.",
    localFirst: "Local d’abord",
    localFirstBody:
      "Le modèle fonctionne hors ligne. Les données restent locales jusqu’au besoin de synchronisation.",
    security: "Minimal par défaut",
    securityBody: "Le renderer isolé ne reçoit que des capacités explicites et typées.",
    system: "Système",
    light: "Clair",
    dark: "Sombre",
    themeLabel: "Thème",
    languageLabel: "Langue",
    ready: "Fondation prête",
  },
  ja: {
    languageName: "日本語",
    eyebrow: "デスクトップアプリの基盤",
    title: "ネイティブの器と、意図的に小さな橋。",
    description:
      "Electron Forge、React、型付き IPC、ローカル優先状態、テーマ、i18n、パッケージング、実ウィンドウテストを備えます。",
    localFirst: "ローカル優先",
    localFirstBody: "オフラインで動作し、同期が必要になるまでデータはローカルに保持します。",
    security: "最小権限が既定",
    securityBody: "サンドボックス化された renderer には明示的な型付き機能だけを渡します。",
    system: "システム",
    light: "ライト",
    dark: "ダーク",
    themeLabel: "テーマ",
    languageLabel: "言語",
    ready: "基盤の準備完了",
  },
  ko: {
    languageName: "한국어",
    eyebrow: "데스크톱 앱 기반",
    title: "네이티브 셸과 의도적으로 좁은 브리지.",
    description:
      "Electron Forge, React, 타입 IPC, 로컬 우선 상태, 테마, i18n, 패키징과 실제 창 테스트를 제공합니다.",
    localFirst: "로컬 우선",
    localFirstBody: "오프라인으로 작동하며 동기화가 필요할 때까지 데이터는 로컬에 둡니다.",
    security: "기본 최소 권한",
    securityBody: "샌드박스 renderer에는 명시적이고 타입이 지정된 기능만 전달합니다.",
    system: "시스템",
    light: "라이트",
    dark: "다크",
    themeLabel: "색상 테마",
    languageLabel: "언어",
    ready: "데스크톱 기반 준비 완료",
  },
};

export function isPublicLocale(value: string): value is PublicLocale {
  return publicLocales.some((locale) => locale === value);
}
