import Task from "./Task";

export default function TaskList() {

    const tasks = [
        'Lavar o carro',
        'Mercado',
        'Lavar a louça'
    ];

    return (
        <>
            <h1>Task List</h1>
            {tasks.map((value) => {
                return <p><Task text={value} /></p>
            })}
        </>
    )
}