import {useForm} from "react-hook-form"

export default function App() {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        alert(JSON.stringify(data))
    }

    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input
                {...register('firstName', {required: true})}
                placeholder='first name'
            />
            <input
                {...register('lastName', {required: true})}
                placeholder='Last name'
            />
            <input
                {...register('surname', {required: true})}
                placeholder='surname'
            />
            <input
                {...register('year', {required: true})}
                placeholder='year'
                type='date'
            />
            <select {... register('gender')}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type = 'submit'/>
        </form>
    )
}

