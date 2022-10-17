export interface PostLink {
    time: number;
    title: string;
    slug: string;
}

export interface PaperLink {
    time: number;
    title: string;
    slug: string;
    type: PaperType;
}

export interface ProjectType {
    time: string;
    title: string;
    description: string;
    isNew: boolean;
    isMaintained: boolean;
    thumbnailLink: string;

    thumbnailWidth: number;
    thumbnailHeight: number;

    github?: string;
    directLink?: string;
}

export enum PaperType {
    Mathematics = "Mathematics",
    CS = "Computer Science",
    Other = "Other",
}