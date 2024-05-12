import { SKILLS, Skill } from './skills';

export interface Project {
    id: number;
    title: string;
    date: string;
    skills: Skill[];
    description: string;
    imagepath: string;
    featured: boolean;
}

function findSkills(skillNames: string[]): Skill[] {
    return SKILLS.filter(skill => skillNames.includes(skill.title));
}

export const PROJECTS: Project[] = [
    {
        id: 3,
        title: 'BlackForest: Recruitment System and Applicant Portal',
        date: 'March 2024 – May 2024',
        description: 'A recruitment system and an applicant portal, with 4 users: HR manager, requestor, applicant, and admin.',
        skills: findSkills(['Node.js', 'SharePoint', 'Bootstrap']),
        imagepath: '../../../assets/img/project-blackforest-1.png',
        featured: false,
    },
    {
        id: 2,
        title: 'SnapCatch: Customer Training Registration',
        date: 'Feb 2024 – March 2024',
        description: 'A customer training management system with a registration form and admin panel to manage registrations and trainings.',
        skills: findSkills(['Node.js', 'Express','SharePoint', 'Bootstrap']),
        imagepath: '../../../assets/img/project-snapcatch-2.png',
        featured: false,
    },
    {
        id: 1,
        title: 'ArtisanAI: Stitch Counter and Crochet Community App',
        date: 'Jul 2023 – Jan 2024',
        description: 'A progressive web application (PWA) for crochet enthusiasts to interact with their fellow hobbyists, packed with helpful tools and resources. Integrated with an AI-enhanced stitch counter that utilizes YOLOv8 for object detection.',
        skills: findSkills(['Python', 'Django', 'Bootstrap']),
        imagepath: '../../../assets/img/project-artisanai-1.png',
        featured: true,
    },
    {
        id: 6,
        title: 'Portfolio V1',
        date: 'June 2024 – July 2024',
        description: 'A movie database with a search function, movie details, and user reviews.',
        skills: findSkills(['Angular', 'Tailwind CSS', 'Bootstrap']),
        imagepath: '../../../assets/img/project-portfolio-1.png',
        featured: false,
    },
    {
        id: 4,
        title: 'Sushi Restaurant Management System',
        date: 'May 2024 – June 2024',
        description: 'A restaurant management system with a menu, order form, and admin panel to manage orders and menu items.',
        skills: findSkills(['PHP', 'Bootstrap']),
        imagepath: '../../../assets/img/project-sushi-1.png',
        featured: false,
    },
    {
        id: 5,
        title: 'College Management System: Chairperson Portal',
        date: 'June 2024 – July 2024',
        description: 'A college management system with a chairperson portal to manage students, faculty, and courses.',
        skills: findSkills(['Python', 'Django', 'Bootstrap']),
        imagepath: '../../../assets/img/project-college-1.png',
        featured: false,
    },
];
