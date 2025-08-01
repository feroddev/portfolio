const YEAR_BIRTH = 1996;
const age = Number(new Date().getFullYear()) - YEAR_BIRTH;

const translations = {
  en: {
    title: 'About',
    whoAmI: 'Who am I?',
    paragraph1: `I'm Felipe Rodrigues, ${age} years old, passionate about animes, motorcycles, and math. Since childhood, I dreamed of becoming a math teacher — but at 14, I discovered Photoshop, which opened my creative side. I started working as a freelance designer at 16, and by 20, I was working at the Ibirapuã City Hall (Bahia) for 5 years. During this time, I also studied Paid Traffic to offer social media services.`,
    paragraph2: 'In 2022, I found Trybe, a programming school focused on turning students into fullstack developers in one year. I enrolled and in 2023 fully committed to tech. What started as a complementary skill quickly turned into a passion that made me leave marketing behind to focus on development.',
    paragraph3: 'The course reignited my love for logic and problem solving. Today, I\'m a Trybe graduate with additional technical training, working primarily with React, TypeScript, Node.js, and NestJS. I\'m actively seeking opportunities as a Fullstack Developer to grow my skills, contribute to impactful projects, and evolve professionally.',
    paragraph4: 'I’m passionate about clean code, scalable systems, and continuous learning. Besides programming, I’m dedicated to personal growth, balancing health and wellbeing, and strengthening my relationships.',
  },
  pt: {
    title: 'Sobre',
    whoAmI: 'Quem sou eu?',
    paragraph1: `Sou Felipe Rodrigues, tenho ${age} anos e sou apaixonado por animes, motos e matemática. Desde criança sonhava em ser professor de matemática — mas, aos 14 anos, conheci o Photoshop e tudo mudou, despertando meu lado criativo. Comecei a trabalhar como designer freelancer aos 16, e aos 20 anos ingressei na Prefeitura de Ibirapuã (Bahia), onde atuei por 5 anos. Nesse período, também estudei Tráfego Pago para oferecer serviços de social media.`,
    paragraph2: 'Em 2022, descobri a Trybe — uma escola que forma desenvolvedores fullstack em um ano. Me inscrevi, e em 2023 mergulhei de cabeça na área de tecnologia. O que começou como uma forma de complementar meus serviços virou uma paixão que me fez deixar o marketing para trás e focar totalmente em desenvolvimento.',
    paragraph3: 'O curso reacendeu meu interesse por lógica e resolução de problemas. Hoje, sou formado pela Trybe, com capacitações adicionais, atuando principalmente com React, TypeScript, Node.js e NestJS. Busco oportunidades como Desenvolvedor Fullstack para crescer tecnicamente, contribuir com projetos de impacto e evoluir profissionalmente.',
    paragraph4: 'Sou apaixonado por código limpo, sistemas escaláveis e aprendizado contínuo. Além da programação, dedico-me ao meu crescimento pessoal, equilibrando saúde, bem-estar e fortalecendo meus relacionamentos.',
  },
};

export default translations;
