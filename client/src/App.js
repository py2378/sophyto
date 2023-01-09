import { useForm } from "react-hook-form";
export default function App() {
    const { register, handleSubmit } = useForm();
    async function onSubmit(e) {
        // When a post request is sent to the creation url, we'll add a new record to the database.
        await fetch("http://localhost:5000/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(e),
        })
            .catch(error => {
                window.alert(error);
                return;
            });

    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <button type="submit">Submit</button>
        </form>
    );
}