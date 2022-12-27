import { useState, useRef } from 'react';

import FormRow from '../formRow/FormRow';
import Button from '../button/Button';

import style from './form.module.scss';

const Form = () => {
  const [loading, setLoading] = useState(false);

  const data = [
    {type: 'text', name: 'name', Teg: 'input'},
    {type: 'text', name: 'subject', Teg: 'input'},
    {type: 'email', name: 'email', Teg: 'input'},
    {type: 'tel', name: 'tel', Teg: 'input'},
    {type: 'text', name: 'message', Teg: 'textarea'},
    {type: 'file', name: 'file', Teg: 'input', file: true},
  ];

  const form = useRef(null);

  const postData = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form.current);

    const response = await fetch(form.current.action, {
      method: "POST",
      body: formData
    })

    if (response.ok) {
      setLoading(false);
      form.current.reset();
      alert('Message sent');
    } else {
      setLoading(false);
      alert('Error');
    }
  };

  return (
    <form 
      action="/php/server.php"
      onSubmit={e => postData(e)}
      className={style.form}
      ref={form}
    >
      <h1>Let's talk</h1>

      {data.map(props => (
        <FormRow
          key={props.name}
          {...props}
        />
      ))}

      <Button
        loading={loading}
        onClick={() => setLoading(true)}
      />
    </form>
  );
}

export default Form;