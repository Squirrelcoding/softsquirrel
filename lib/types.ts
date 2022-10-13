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

export enum PaperType {
    Mathematics = "Mathematics",
    ComputerScience = "Computer Science",
    Other = "Other",
}