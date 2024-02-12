import { type SkillsType } from '@/types/SkillsType';
const { $i18n } = useNuxtApp();
const t = $i18n.t;

const skillsData: SkillsType[] = [
  {
    logo: 'vscode-icons:file-type-vue',
    link: 'https://vuejs.org/',
    label: t('skills.vue'),
  },
  {
    logo: 'vscode-icons:file-type-scss',
    link: 'https://sass-lang.com/',
    label: t('skills.sass'),
  },
  {
    logo: 'vscode-icons:file-type-typescript-official',
    link: 'https://www.typescriptlang.org/',
    label: t('skills.typescript'),
  },
  {
    logo: 'logos:javascript',
    link: 'https://www.javascript.com/',
    label: t('skills.javascript'),
  },
  {
    logo: 'logos:pinia',
    link: 'https://pinia.vuejs.org/',
    label: t('skills.pinia'),
  },
  {
    logo: 'vscode-icons:file-type-html',
    link: 'https://html.com/',
    label: t('skills.html'),
  },
  {
    logo: 'vscode-icons:file-type-css',
    link: 'https://en.wikipedia.org/wiki/CSS',
    label: t('skills.css'),
  },
  {
    logo: 'vscode-icons:file-type-nuxt',
    link: 'https://nuxt.com/',
    label: t('skills.nuxt'),
  },
  {
    logo: 'logos:tailwindcss-icon',
    link: 'https://tailwindcss.com/',
    label: t('skills.tailwind'),
  },
  {
    logo: 'logos:nodejs-icon',
    link: 'logos:nodejs-icon',
    label: t('skills.nodejs'),
  },
  {
    logo: 'vscode-icons:file-type-firebase',
    link: 'https://firebase.google.com/',
    label: t('skills.firebase'),
  },
  {
    logo: 'logos:material-ui',
    link: 'https://mui.com/',
    label: t('skills.mui'),
  },
  {
    logo: 'vscode-icons:file-type-reactjs',
    link: 'https://react.dev/',
    label: t('skills.react'),
  },
  {
    logo: 'logos:nextjs-icon',
    link: 'https://nextjs.org/',
    label: t('skills.next'),
  },
  {
    logo: 'devicon:jquery',
    link: 'https://jquery.com/',
    label: t('skills.jquery'),
  },
];

export default skillsData;
