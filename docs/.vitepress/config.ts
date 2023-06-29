import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Documentação de software',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: [
      { text: 'Principal', link: '/principal' },
      {
        text: 'Informações sobre o projeto',
        items: [{ text: 'Dados', link: '/dados' }],
      },
    ],

    sidebar: [
      {
        items: [
          {
            text: '1. Introdução',
            link: '/introducao',
          },
          {
            text: '2. Descrição do Projeto',
            collapsed: true,
            items: [
              {
                text: '2.1 Visão geral do projeto',
                link: '/descricao',
              },
              { text: '2.2.2 Canvas', link: '/canvas' },
            ],
          },
          {
            text: '3. Principais Recursos e Funcionalidades',
            collapsed: true,
            items: [
              {
                text: '3 Funcionalidades',
                link: '/funcionalidades',
              },
              {
                text: '3.1 Requisitos Funcionais',
                link: '/requisitos_funcionais',
              },
              {
                text: '3.2 Requisitos Não Funcionais',
                link: '/requisitos_nao_funcionais',
              },
            ],
          },
          {
            text: '4. Diagrama de Caso de Uso',
            collapsed: true,
            items: [
              {
                text: '4. Imagem Diagrama',
                link: '/diagrama',
              },
              {
                text: '4.1 Descrição de Caso de Uso',
                link: '/descricao_diagrama',
              },
            ],
          },
          { text: '5. Diagrama de Classes', link: '/diagrama_classe' },
          { text: '6. Protótipos de Telas', link: '/prototipo' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Considerações Finais', link: '/conclusao' },
        ],
      },
    ],
    footer: {
      message:
        'Documentação de Exemplo Aula de Desenvolvimento de Software 1 - MIT License',
      copyright: 'Copyright © 2019-present Evan You',
    },

    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
  },
});
