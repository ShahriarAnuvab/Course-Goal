interface GoalProps {
    title: string,
    description: string,
    id: number,
    onDelete: (id: number) => void
}


const Goal = ({ title, description, id, onDelete }: GoalProps) => {
    return (
        <div className="bg-black text-white uppercase border-white space-y-5">
            <h1 className="text-3xl ">{title}</h1>
            <p className="text-xl ">{description}</p>
            <p>{id}</p>
            <button className="btn btn-sm" onClick={() => onDelete(id)}>Delete</button>

        </div>
    );
};

export default Goal;