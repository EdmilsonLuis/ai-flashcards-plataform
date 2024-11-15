

export type SetCard = {
    term: string;
    definition: string
}

export type Set = {
    id: string;
    title: string;
    description: string | null;
    content: string;
    userId: string;
    cards: SetCard[];
}