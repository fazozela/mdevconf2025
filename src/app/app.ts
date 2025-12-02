import { Component, signal } from '@angular/core';
import { ScheduleItem, Speaker } from './interfaces/app.interface';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  speakers = signal<Speaker[]>([
    {
      id: 1,
      name: 'Gustavo Lizárraga',
      initial: '01',
      role: 'Developer Relations Engineer',
      description: 'Gustavo es Licenciado en Informática e Ingeniería de Sistemas. Trabaja en los roles de Developer Relations, Tutor y Content Creator en DevExpert y Droidcon Academy. Asimismo brinda formaciones en empresas como OpenWebinars, Platzi, Henry, iQuattro y otras. También trabaja cómo desarrollador Freelance Android e iOS con Kotlin, Swift, KMP y Flutter. Es Koin Champion, GitKraken Ambassador y GitHub Campus Expert Alumni.',
      photourl: 'gus.webp'
    },
    {
      id: 2,
      name: 'Armando Picón',
      initial: '00',
      role: 'SoftServe Chile',
      description: 'Desempeño el rol de Mobile Engineer, trabajando con clientes en Estados Unidos. Mi perfil me permite constantemente trabajar de cara tanto con el equipo de producto como de ingeniería.  Soy creador de contenido, pero no vivo de ello, lo hago porque me nace compartir lo que sé con los demás.  ¿Mencioné que ya llevo 18 trabajando en desarrollo de software? Fuera de la tecnología me gusta cocinar, pasear y aprender cosas nuevas.',
      photourl: 'armando.webp'
    },
    {
      id: 3,
      name: 'Kenji Kawaida',
      initial: '02',
      role: 'Kytech',
      description: 'Investigador y desarrollador especializado en software, inteligencia artificial y aplicaciones móviles. Ha dirigido proyectos académicos y empresariales en tecnología, además de aportar en la docencia y el emprendimiento digital.',
      photourl: 'kenji.webp'
    },
    {
      id: 4,
      name: 'Irvin Cossio Chavalier',
      initial: 'OPS',
      role: 'Mi Plata',
      description: 'Irvin es una persona apasionada por la tecnología con 8 años de experiencia laboral, especializado en tecnologias móviles y Frontend Le gusta el voluntariado con comunidades de tecnología Es GDG Organizer de Cochabamba, Honorario en Scesi.',
      photourl: 'irvin.webp'
    },
    {
      id: 5,
      name: 'Yury Camacho',
      initial: 'OPS',
      role: 'GateKeeperX',
      description: 'Yury es un conferencista internacional con una licenciatura en Ingeniería de Sistemas y Google Developer Expert para Android y Kotlin. Le apasiona la tecnología y el desarrollo de software, y ha trabajado en el desarrollo de aplicaciones móviles desde 2010. Le gusta aprender y compartir con las comunidades de desarrolladores y emprendedores, impartiendo charlas, talleres y mentorías. Anteriormente trabajó en Globant, OLX Group y Rapp y como Líder Técnico de Android en Uala.',
      photourl: 'yury.webp'
    },
    {
      id: 6,
      name: 'Jesús Machicado',
      initial: 'OPS',
      role: '',
      description: 'Ingeniero de Sistemas, amante del ecosistema Flutter con experiencia liderando equipos de desarrollo. Apasionado por la arquitectura de software, la optimización de procesos CI/CD y actualmente enfocado en la investigación de nuevas herramientas de desarrollo Cloud-Native e integración con Inteligencia Artificial.',
      photourl: 'jesus.webp'
    },
    {
      id: 7,
      name: 'Carlos Collazos',
      initial: 'OPS',
      role: 'SportsEngine',
      description: 'Carlos es Senior UX Designer con 9+ años de experiencia trabajo para empresas como Square Enix, Samsung y BCP. Actualmente trabaja en Versant Media para SportsEngine, lidera Google Developer Group Cochabamba y es Country Manager de Interaction Design Foundation en Bolivia. ',
      photourl: 'carlos.webp'
    },
    {
      id: 8,
      name: 'Valentina Salinas',
      initial: 'OPS',
      role: '',
      description: 'UX Designer',
      photourl: 'valentina.webp'
    },
    {
      id: 9,
      name: 'Jhonny Ventiades',
      initial: 'OPS',
      role: 'Sommos',
      description: 'Actualmente CTO de Sommos, con más de 10 años de experiencia en Análisis de Datos y Diseño de Productos Tecnológicos. He desarrollado aplicaciones en Bolivia, India, Egipto y Uruguay para empresas reconocidas de EE. UU. y el Reino Unido. Ademas creador de los podcasts "Declarando Variables" y "Leading from Tech", líder de las comunidades, Mentor en Tribu Tech Latam,  y docente de postgrado,  donde enseño y comparto mi experiencia con la comunidad tecnológica.',
      photourl: 'jhonny.webp'
    },
    {
      id: 10,
      name: 'Sebastian Gonzales Tito',
      initial: 'OPS',
      role: 'Taya',
      description: 'Sebastian es Ingeniero de Sistemas, desarrollador Fullstack y actual CTO en Taya, una startup enfocada en conectar tecnología con impacto social. Con experiencia en Flutter, Firebase y Node.js, lidera el desarrollo de productos digitales que buscan resolver problemas reales. Además, organiza comunidades como GDG Sucre y Flutter Sucre, donde promueve el aprendizaje colaborativo y la innovación.',
      photourl: 'sebas.webp'
    }
  ]);

  schedule = signal<ScheduleItem[]>([
    {
      id: 1,
      time: '09:00 - 09:45',
      speaker: 'Jhonny Ventiades',
      topic: 'Automatiza y Disfruta: Deploy mobile facil.'
    },
    {
      id: 2,
      time: '10:00 - 10:45',
      speaker: 'Yury Camacho',
      topic: 'Ingeniería de SDKs en Android: Buenas prácticas para crear librerías robustas y escalables.'
    },
    {
      id: 3,
      time: '11:00 - 11:45',
      speaker: 'Irvin Cossio',
      topic: '¿Como sigues vivo react native?'
    },
    {
      id: 4,
      time: '12:00 - 12:45',
      speaker: 'Gustavo Lizárraga',
      topic: 'Crea Experiencias Inmersivas con Android XR.'
    },
    {
      id: 5,
      time: '13:00 - 14:00',
      speaker: 'Break',
      topic: 'Break'
    },
    {
      id: 6,
      time: '14:00 - 14:45',
      speaker: 'Kenji Kawaida',
      topic: 'Empowering Mobile Apps with Firebase AI Logic: Architecting Generative-AI Features in Android/iOS/Flutter.'
    },
    {
      id: 7,
      time: '15:00 - 15:45',
      speaker: 'Carlos Collazos',
      topic: 'Developer Handoff: Del diseño al código sin fricción.'
    },
    {
      id: 8,
      time: '16:00 - 16:45',
      speaker: 'Armando Picon',
      topic: 'IA en tu Bolsillo: Entendiendo Gemini Nano, sus límites y el futuro On-Device.'
    },
    {
      id: 9,
      time: '17:00 - 17:45',
      speaker: 'Jesus Machicado',
      topic: 'Rompiendo la barrera del hardware con Flutter, IA y Google IDX.'
    },
    {
      id: 10,
      time: '18:00 - 18:45',
      speaker: 'Valentina Salinas',
      topic: 'Mobile UX: Donde todo pasa rápido.'
    },
    {
      id: 11,
      time: '19:00 - 19:45',
      speaker: 'Sebastian Gonzales',
      topic: 'Atomic UI en Flutter.'
    }
  ]);

  pastEvents = signal<string[]>([
    'sNJzpMw8Oek?si=Ik3HTeyZej3M3Y-N',
    'mMAF-te4q7o?si=Q2ehUg6N5ad6s6ZS',
    'U8hmtGtajBc?si=8pH74vUS6G2GvkN4',
    'RhSIpq1Y3Vg?si=dKP0YPw_wjGmT-iy',
    'AyWrwmH8j6g?si=US1LH0XzMH68TK7I',
    '4jfhMnL_kAU?si=Cd-UCNbgwQYP3iUD'
  ]);

  constructor(private viewportScroller: ViewportScroller, private sanitizer: DomSanitizer) { }

  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  scrollTo(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
