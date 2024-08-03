// import { useForm, SubmitHandler } from "react-hook-form"
import { useEffect } from "react";
import axios from 'axios';

const instance = axios.get({
    baseURL: 'https://669b0836276e45187d347ac2.mockapi.io',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

function Home() {
    // const { register, handleSubmit, watch, formState:{errors}, } = useForm();

    // function handleLogin(data) {
    //     console.log(data);
    // }
    // console.log
    useEffect(() => {
        //async function
        (async () => {
            try {
                let res = await instance.get("/todos", {
                    // params: {
                    //     page: 2,
                    //     limit: 4,
                    // }
                });
                console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        })();

        // then catch
        // axios
        //     .get("https://669b0836276e45187d347ac2.mockapi.io/todos")
        //     .then((res)=>{
        //         console.log(res.data);
        //     })
        //     .catch((err)=>{
        //         console.log(err)
        //     });
    }, []);
    return (
        <>
            <h1>Home</h1>
            {/* <form onSubmit={handleSubmit(handleLogin)}>
                Uname:
                <input {...register('uname')}></input>
                Password:
                <input type="password" {...register('pass', {required:true, minLength:5})}></input>
                {errors.pass && <span> Du lieu khong</span>}
                <button type="submit">Send</button>
            </form> */}
        </>
    );
}

export default Home