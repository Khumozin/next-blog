/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SimpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
}

export interface FullBlog {
    title: string;
    currentSlug: string;
    content: any;
    titleImage: any;
}