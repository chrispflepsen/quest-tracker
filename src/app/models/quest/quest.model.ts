export class QuestProgress {
    step_complete: boolean;
    step_title: string;
}

export class Quest {
    description: string | [string];
    title: string;
    complete: boolean;
    contact: string;
    city: string;
    location: string;
    created: string;
    updated: string;
    reward: string;
    progress: [QuestProgress];
}