
import { Button, Form } from 'react-bootstrap';
import { addUser } from '../services/api';
import { useSelector, useDispatch } from 'react-redux';
export default function Cadastro() {

    const { name, email, phone } = useSelector((state) => state);
    const dispatch = useDispatch();

    const  handleSubmit = async (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para processar os dados do formulário
        console.log('Nome:', name);
        console.log('Email:', email);
        console.log('Telefone:', phone);    
        await addUser(name,email,phone)

        // Reseta os campos do formulário
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
        <div className='registerClass'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Informe seu nome"
                    value={name}
                    onChange={handleInputChange}
              />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Inform seu email"
                        value={email}
                        onChange={handleInputChange}
                        
                        />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
       
                <Button
                    onClick={()=> handleSubmit()}  
                    variant="primary" 
                    type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}
/*
import { useState } from "react"
import { Button, Form } from 'react-bootstrap';
import { addUser } from '../services/api';
const initalUser = {
    name: '',
    email: '',
    phone: '4343242332',
}
export default function Cadastro() {
    const [user, setUser] = useState(initalUser);
    const {name, email, phone} = user;

    const onValueChange = (e) => { setUser ({
       ...user, [e.target.name]: e.target.value
    }) 
        console.log(user)
    }
    const addUserInfo = async () => {
        console.log('entrou salvar')
        console.log(user)
        await addUser(user)
    }
    return (
        <div className='registerClass'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Informe seu nome"
                    onChange={(e) => onValueChange(e)} 
                        name="name"
                        value={name}  />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Inform seu email"
                        onChange={(e) => onValueChange(e)} 
                        name="email"
                        value={email}    
                        />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
       
                <Button
                    onClick={()=> addUserInfo()}  
                    variant="primary" 
                    type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}*/