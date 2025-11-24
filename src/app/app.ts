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
      photourl: 'gus.png'
    },
    {
      id: 2,
      name: 'Armando Picón',
      initial: '00',
      role: 'SoftServe Chile',
      description: 'Desempeño el rol de Mobile Engineer, trabajando con clientes en Estados Unidos. Mi perfil me permite constantemente trabajar de cara tanto con el equipo de producto como de ingeniería.  Soy creador de contenido, pero no vivo de ello, lo hago porque me nace compartir lo que sé con los demás.  ¿Mencioné que ya llevo 18 trabajando en desarrollo de software? Fuera de la tecnología me gusta cocinar, pasear y aprender cosas nuevas.',
      photourl: 'armando.jpeg'
    },
    {
      id: 3,
      name: 'Kenji Kawaida',
      initial: '02',
      role: 'Kytech',
      description: 'Investigador y desarrollador especializado en software, inteligencia artificial y aplicaciones móviles. Ha dirigido proyectos académicos y empresariales en tecnología, además de aportar en la docencia y el emprendimiento digital.',
      photourl: 'kenji.jpeg'
    },
    {
      id: 4,
      name: 'Irvin Cossio Chavalier',
      initial: 'OPS',
      role: 'Mi Plata',
      description: 'Irvin es una persona apasionada por la tecnología con 8 años de experiencia laboral, especializado en tecnologias móviles y Frontend Le gusta el voluntariado con comunidades de tecnología Es GDG Organizer de Cochabamba, Honorario en Scesi.',
      photourl: 'irvin.JPG'
    }
  ]);

  schedule = signal<ScheduleItem[]>([
    {
      id: 1,
      time: '09:00 - 09:45',
      speaker: 'Jhonny Ventiades',
      topic: 'A definir'
    },
    {
      id: 2,
      time: '10:00 - 10:45',
      speaker: 'Shinji Ikari',
      topic: 'Get in the Robot: Introduction to Flutter for Anxious Developers'
    },
    {
      id: 3,
      time: '11:00 - 11:45',
      speaker: 'Irvin Cossio',
      topic: '¿Como sigues vivo react native?'
    },
    {
      id: 4,
      time: '12:00 - 14:00',
      speaker: 'Break',
      topic: 'Lunch Break - LCL Refreshments Provided'
    },
    {
      id: 5,
      time: '14:00 - 14:45',
      speaker: 'Kenji Kawaida',
      topic: 'Empowering Mobile Apps with Firebase AI Logic: Architecting Generative-AI Features in Android/iOS/Flutter'
    },
    {
      id: 6,
      time: '15:00 - 15:45',
      speaker: 'Carlos Collazos',
      topic: 'A definir'
    },
    {
      id: 7,
      time: '16:00 - 16:45',
      speaker: 'Armando Picon',
      topic: 'IA en tu Bolsillo: Entendiendo Gemini Nano, sus límites y el futuro On-Device'
    },
    {
      id: 8,
      time: '17:00 - 17:45',
      speaker: 'Jesus Machicado',
      topic: 'A definir'
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
