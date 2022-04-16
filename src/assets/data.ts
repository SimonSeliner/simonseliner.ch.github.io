import { Data } from '../model';

import profileImg from './img/profileImage.jpg';
import bannerImg from './img/banner.jpg';
import htmlLogo from './img/technologies/html.png';
import sassLogo from './img/technologies/sass.png';
import typescriptLogo from './img/technologies/typescript.png';
import reactLogo from './img/technologies/react.png';
import dotnetLogo from './img/technologies/dotnet.png';
import csharpLogo from './img/technologies/csharp.png';
import javaLogo from './img/technologies/java.png';
import golangLogo from './img/technologies/golang.png';
import grpcLogo from './img/technologies/grpc.png';
import dockerLogo from './img/technologies/docker.png';
import kubernetesLogo from './img/technologies/kubernetes.png';
import jagwImg from './img/projects/project-jagw.png';
import serproImg from './img/projects/project-serpro.png';
import srWebsiteImg from './img/projects/project-sr-website.png';
import lspLqaImg from './img/projects/project-lsp-lqa.png';
import ckaImg from './img/certificates/cka.png';

export const data: Data = {
  title: 'Michel Bongard',
  subtitle: 'Software Engineer',
  bannerImg: bannerImg,
  bannerImgAlt: 'Bridge in Rapperswil-Jona',
  profileImg: profileImg,
  profileImgAlt: 'Michel Bongard',
  aboutMe: {
    paragraphs: [
      {
        spanItems: [
          {
            text: 'Hi, I am Michel, a full-stack software engineer from Rapperswil-Jona, Switzerland.',
            link: null,
          },
        ],
      },
      {
        spanItems: [
          {
            text: 'I am currently working at the INS Institute for Networked Solutions at the OST – Eastern Switzerland University of Applied Sciences. Here, I am employed as a full-stack software engineer for network applications (mainly in the field of Segment Routing) and as an assistant to the professors.',
            link: null,
          },
        ],
      },
    ],
  },
  bio: {
    firstName: 'Michel',
    lastName: 'Bongard',
    description: 'Software Engineer',
    birthday: '1994-01-09',
    email: 'mail@michelbongard.ch',
    degree: 'Bachelor of Science FHO in Computer Science',
    languages: ['German', 'English', 'Portuguese'],
  },
  socialIcons: [
    {
      name: 'GitHub',
      link: 'https://github.com/mbongard',
      awesomeFontIcon: ['fab', 'github'],
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/michel-bongard',
      awesomeFontIcon: ['fab', 'linkedin'],
    },
    {
      name: 'Email',
      link: 'mailto:mail@michelbongard.ch',
      awesomeFontIcon: ['fas', 'envelope'],
    },
  ],
  skills: [
    {
      name: 'HTML',
      progress: 80,
      img: htmlLogo,
    },
    {
      name: 'SCSS',
      progress: 80,
      img: sassLogo,
    },
    {
      name: 'Typescript',
      progress: 60,
      img: typescriptLogo,
    },
    {
      name: 'React',
      progress: 50,
      img: reactLogo,
    },
    {
      name: '.NET',
      progress: 40,
      img: dotnetLogo,
    },
    {
      name: 'C#',
      progress: 80,
      img: csharpLogo,
    },
    {
      name: 'Java',
      progress: 50,
      img: javaLogo,
    },
    {
      name: 'Golang',
      progress: 50,
      img: golangLogo,
    },
    {
      name: 'gRPC',
      progress: 60,
      img: grpcLogo,
    },
    {
      name: 'Docker',
      progress: 70,
      img: dockerLogo,
    },
    {
      name: 'Kubernetes',
      progress: 70,
      img: kubernetesLogo,
    },
  ],
  skillLevels: [
    {
      name: 'Novice',
      fromProgress: 0,
      upToProgress: 50,
    },
    {
      name: 'Proficient',
      fromProgress: 50,
      upToProgress: 75,
    },
    {
      name: 'GOAT',
      fromProgress: 100,
      upToProgress: 100,
    },
  ],
  certificates: [ //if not needed: empty array does not show
    {
      name: 'CKA: Certified Kubernetes Administrator',
      img: ckaImg,
      certificateId: 'LF-043zxk8x7s',
      digitalBadge:
        'https://www.credly.com/badges/24b03699-38a4-41f4-8cd5-a7165dd8292a',
    },
  ],
  experiences: [
    {
      period: 'April 2022 - Today',
      title: 'Software Engineer',
      employer: 'Hostpoint AG',
      employerLink: 'https://www.hostpoint.ch/',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Full-stack software engineer (Java, Angular).',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: 'April 2021 - March 2022',
      title: 'Assistant, Software Engineer',
      employer: 'INS Institute for Networked Solutions',
      employerLink: 'https://www.ins.hsr.ch/',
      employmentRate: '100%',
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Assistant to the professors in the field of computer networks and full-stack software engineer for network applications (mostly in Segment Routing in collaboration with Cisco Systems, Inc.).',
              link: null,
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      period: '2021 - Present',
      title: 'Awesome Project',
      img: jagwImg,
      projectLinks: [
        {
          name: 'Project',
          link: 'https://www.segment-routing.ch/projects/project-jagw/',
          awesomeFontIcon: ['fab', 'fa-accessible-icon'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'Jalapeño is a cloud-native application developed by ',
              link: null,
            },
            {
              text: 'Cisco Systems',
              link: 'https://www.cisco.com/',
            },
            {
              text: ' that captures network topology and performance data made available through the Segment Routing technology.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'With the help of Dominique Illi and Julian Klaiber I am developing an API Gateway in collaboration with Cisco for the use of future SR-Apps.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2021',
      title: 'segment-routing.ch',
      img: srWebsiteImg,
      projectLinks: [
        {
          name: 'Website',
          link: 'https://www.segment-routing.ch/',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'In July 2021 I developed the website ',
              link: null,
            },
            {
              text: 'www.segment-routing.ch',
              link: 'https://www.segment-routing.ch/',
            },
            {
              text: '(using ',
              link: null,
            },
            {
              text: 'Hugo',
              link: 'https://gohugo.io/',
            },
            {
              text: ') for the ',
              link: null,
            },
            {
              text: 'INS Institute for Networked Solutions',
              link: 'https://www.ins.hsr.ch/',
            },
            {
              text: ' in order to showcase our work in the field of Segment Routing.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2021',
      title: 'SR-App: Service Programming (Frontend)',
      img: serproImg,
      projectLinks: [
        {
          name: 'Project',
          link: 'https://www.segment-routing.ch/projects/project-serpro/',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Demo',
          link: 'https://www.youtube.com/watch?v=tMnpGJwYCNU',
          awesomeFontIcon: ['fab', 'youtube'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'The SR-App SerPro allows a user to program so-called steering policies in a Segment Routing network.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'The backend was developed by Julian Klaiber and Severin Dellsperger. With assistance from William Wakelin I developed the frontend (React) for this SR-App.',
              link: null,
            },
          ],
        },
      ],
    },
    {
      period: '2020',
      title: 'SR-App: Link Saturation Prediction',
      img: lspLqaImg,
      projectLinks: [
        {
          name: 'Thesis',
          link: 'https://eprints.ost.ch/id/eprint/909/1/HS%202020%202021-BA-EP-Bongard-Illi-SR-App%20Analytics.pdf',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Project',
          link: 'https://www.segment-routing.ch/projects/project-lsp/',
          awesomeFontIcon: ['fas', 'external-link-alt'],
        },
        {
          name: 'Demo',
          link: 'https://www.youtube.com/watch?v=SouxeTTXx1E',
          awesomeFontIcon: ['fab', 'youtube'],
        },
      ],
      paragraphs: [
        {
          spanItems: [
            {
              text: 'As part of our Bachelor Thesis, Dominique Illi and I developed the SR-App Link Saturation Prediction.',
              link: null,
            },
          ],
        },
        {
          spanItems: [
            {
              text: 'This SR-App makes use of the Segment Routing Traffic Matrix to allow a network operator to make large scale simulations on a topology.',
              link: null,
            },
          ],
        },
      ],
    },
  ],
};
