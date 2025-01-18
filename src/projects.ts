import { SKILLS, Skill } from './skills';

export interface Project {
    id: number;
    title: string;
    date: string;
    role: string;
    skills: Skill[];
    description: string;
    thumbnailpath: string;
    images: string[];
    featured: boolean;
    link: string;
}

function findSkills(skillNames: string[]): Skill[] {
    return SKILLS.filter(skill => skillNames.includes(skill.title));
}

const projectsData = [    
    {
        title: 'BlackForest',
        date: 'May 2024',
        role: 'Frontend Developer, QA',
        description: 'A recruitment system and an applicant portal, with 4 users: HR manager, requestor, applicant, and admin.',
        skills: findSkills(['Node.js', 'SharePoint', 'Bootstrap']),
        thumbnailpath: '../../../assets/img/project-blackforest-1.png',
        images: [],
        featured: false,
        link: '',
    },
    {
        title: 'SnapCatch',
        date: 'Feb 2024',
        role: 'Full Stack Developer',
        description: 'A customer training management system with a registration form and admin panel to manage registrations and trainings.',
        skills: findSkills(['Node.js', 'Express','SharePoint', 'Bootstrap']),
        thumbnailpath: '../../../assets/img/project-snapcatch-2.png',
        images: [],
        featured: false,
        link: '',
    },
    {
        title: 'Portfolio V1',
        date: '2024',
        role: 'Full Stack Developer',
        description: 'My portfolio site! Built with Angular and Tailwind CSS.',
        skills: findSkills(['Angular', 'Tailwind CSS']),
        thumbnailpath: '../../../assets/img/project-portfolio-1.png',
        images: [],
        featured: false,
        link: 'https://github.com/cheskaf/cheskaf',
    },
    {
        title: 'ArtisanAI',
        date: '2023 – 2024', // Jul 2023 – Jan 2024
        role: 'Frontend Developer, UI/UX, ML',
        description: 'This capstone project is a progressive web application (PWA) for crochet enthusiasts to interact with their fellow hobbyists. Packed with helpful tools, resources, and a stitch counter that utilizes YOLOv8 object detection.',
        skills: findSkills(['Python', 'Django', 'Bootstrap']),
        thumbnailpath: '../../../assets/img/project-artisanai-1.png',
        images: [],
        featured: true,
        link: 'https://github.com/cheskaf/artisanai',
    },
    {
        title: 'Sushi Restaurant Management System',
        date: '2023',
        role: 'Frontend Developer',
        description: 'A restaurant management system with a menu, order form, and admin panel to manage orders and menu items.',
        skills: findSkills(['PHP', 'Bootstrap']),
        thumbnailpath: '../../../assets/img/project-sushi-1.png',
        images: [],
        featured: false,
        link: '',
    },
    {
        title: 'College Management System',
        date: '2022',
        role: 'Frontend Developer',
        description: 'A college management system with a chairperson portal to manage students, faculty, and courses.',
        skills: findSkills(['Python', 'Django', 'Bootstrap']),
        thumbnailpath: '../../../assets/img/project-college-1.png',
        images: [],
        featured: false,
        link: '',
    },
];
export const PROJECTS: Project[] = projectsData.map((project, index) => ({
    id: index + 1,
    ...project,
}));   
