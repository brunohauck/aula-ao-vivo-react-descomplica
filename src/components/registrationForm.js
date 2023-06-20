import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../services/api';

function RegistrationForm() {
    const { name, email, phone } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para processar os dados do formulário
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Telefone:', phone);
        // Reseta os campos do formulário
        await addUser(name, email, phone)


        dispatch({
            type: 'UPDATE_FORM',
            payload: {
                name: '',
                email: '',
                phone: ''
            }
        });



    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE_FORM',
            payload: {
                [name]: value
            }
        });
    };

    return (
        <div className='divForm'>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Digite seu nome"
                        value={name}
                        onChange={handleInputChange}
                    />
                    <label for="floatingInput">Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <label for="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="floatingInput"
                        placeholder="+553199999999"
                        value={phone}
                        onChange={handleInputChange}
                    />
                    <label for="floatingInput">Celular</label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default RegistrationForm;