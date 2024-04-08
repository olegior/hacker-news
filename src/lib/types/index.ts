export type ItemType = {
    descendants: number,
    id: number,
    kids: number[],
    score: number,
    time: number,
    by: string,
    title: string,
    type: string,
    url: string,
    text: string,
    deleted: boolean,
    dead: boolean,
    parent: string,
    poll: string,
    parts: string[],
}


export type UserType = {
    id: string,
    created: number,
    karma: number,
    about: string,
    submitted: number[]
}