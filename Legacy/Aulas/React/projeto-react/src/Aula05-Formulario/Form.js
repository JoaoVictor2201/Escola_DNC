import { useState } from "react"

export default function Form() {

    const [user, setUser] = useState({});

    function HandleSubmit() {
        if (user.email === '' || user.password === '') {
            alert('Preencha os campos para efetuar o login')
        } else {
            alert('Login efetuado com sucesso!')
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={(e) => {
                            const value = e.target.value;
                            setUser({
                                ...user,
                                email : value
                            })
                        }} className="form-control" type={'text'}></input>
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input onChange={(e) => {
                            const value = e.target.value;
                            setUser({
                                ...user,
                                password : value
                            })
                        }} className="form-control" type={'password'}></input>
                    </div>
                    <div className="form-group">
                        <button onClick={() => HandleSubmit()} className="btn btn-primary mt-4">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}