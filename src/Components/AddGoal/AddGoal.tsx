import { FormEvent, useRef } from "react";
type AddGoalProps ={
    onAdd :(goal : string, description: string) => void;
}

const AddGoal = ({onAdd}: AddGoalProps) => {
    const addGoal = useRef<HTMLInputElement>(null)
    const desc = useRef<HTMLInputElement>(null)


    const addGoalForm = (event: FormEvent<HTMLFormElement>) => {
        event?.preventDefault()
        // const form = event.target as HTMLFormElement
        // const addedGoal = form.addGoal.value
        // const desc = form.description.value
        const addedGoal = addGoal.current!.value
        const addedDesc = desc.current!.value
        const formObj = { addedGoal, addedDesc }
        event.currentTarget.reset()
        console.log(formObj)
        // form.reset()
        onAdd(addedGoal, addedDesc)
    }
    return (
        <div>
            <form className="card-body w-3/4" onSubmit={addGoalForm}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Goal</span>
                    </label> 
                    <input type="text" placeholder="Add Goal" name="addGoal" ref={addGoal} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Description" name="description" ref={desc} className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary btn-md">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddGoal;