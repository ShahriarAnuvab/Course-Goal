interface GoalProps {
    title: string,
    description: string,
    id: number,
    onDelete: (id: number) => void
}


const Goal = ({ title, description, id, onDelete }: GoalProps) => {
    return (
        <div className="uppercase space-y-5 text-center border-2 border-yellow-800 m-2 p-2">
            <h1 className="text-3xl font-bold ">{title}</h1>
            <p className="text-xl font-semibold ">{description}</p>
            
            <button className="btn btn-sm bg-red-500 text-white" onClick={() => onDelete(id)}>Delete</button>

        </div>
    );
};

export default Goal;