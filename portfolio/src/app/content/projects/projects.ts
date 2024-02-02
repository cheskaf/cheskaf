import { SKILLS, Skill } from '../skills/skills';

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
        id: 1,
        title: 'ArtisanAI',
        date: 'Jul 2023 – Jan 2024',
        description: 'A progressive web application (PWA) for crochet enthusiasts to interact with their fellow hobbyists, packed with helpful tools and resources.',
        skills: findSkills(['Python', 'Django', 'Bootstrap']),
        imagepath: '../../../assets/img/project-artisanai-1.png',
        featured: true,
    },
    {
        id: 2,
        title: 'AAAAA',
        date: 'AAAJul 2023 – Jan 2024',
        description: 'AAAA progressive web application (PWA) for crochet enthusiasts to interact with their fellow hobbyists, packed with helpful tools and resources.',
        skills: findSkills(['HTML', 'Angular', 'Bootstrap']),
        imagepath: '../../../assets/img/project-artisanai-1.png',
        featured: false,
    },
];
