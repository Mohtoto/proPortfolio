import React from "react";

export interface Projects {

    title1: string;
    title2: string;
    src: string;
    link: string;
}

export interface teckStack {

    image : React.ReactNode;
    progress:number;
}

export interface Experiences {

    title: string;
    company_name:string;
    icon:string;
    iconBg: string;
    date: string;
    points: string[];
}


