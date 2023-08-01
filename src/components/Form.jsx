import { useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import '../styles/Form.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email: email,
      phone: phone,
    };
    emailjs
      .send(
        'service_ntaj1wp',
        'template_z0uwkdn',
        templateParams,
        '2aD_-u1jy-NK9rrD8'
      )
      .then(() => {
        setName('');
        setEmail('');
        setPhone('');
        swal({
          title: 'Deu tudo certo',
          text: 'Mensagem enviada com sucesso! Logo vou entrar em contato.',
          icon: 'success',
        });
      })
      .catch(() =>
        swal(
          'Opa!',
          'Eu acho que alguma coisa não deu certo. Tente novamente!',
          'error'
        )
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title-form-main">ENTRE EM CONTATO</h1>
      <input
        type="text"
        placeholder="NOME"
        className="input-form-main"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="E-MAIL"
        className="input-form-main"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input-form-main"
        placeholder="TELEFONE"
        type="tel"
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button className="button-form-main" type="submit">ENVIAR</button>
    </form>
  );
}
