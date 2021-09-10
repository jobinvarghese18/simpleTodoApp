interface StateType  { 
    userId: number,
    id: number,
    title: string,
    status: | 'pending' | 'done' | 'in-progress'
};
export const data:StateType[] = [
    {
        userId: 1,
        id: 1,
        title: "Pay office rent",
        status: 'pending'
    },
    {
        userId: 1,
        id: 2,
        title: "Schedule meeting",
        status: 'done'
    },
    {
        userId: 1,
        id: 3,
        title: "Buy groceries",
        status: 'done'
    },
    {
        userId: 1,
        id: 4,
        title: "Hangout with friends",
        status: 'in-progress'
    },
    {
        userId: 1,
        id: 5,
        title: "Do Workout",
        status: 'done'
    }
]