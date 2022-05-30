import React, { useState } from 'react';
import s from './Form.module.css';
import { useAddContactMutation } from 'redux/contacts/itemsOperations';
export default function Form() {
  const [addContacts] = useAddContactMutation();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const phone = e.currentTarget.elements.number.value;
    console.log(name);
    console.log(phone);
    addContacts({ name, phone });
    e.currentTarget.reset();
  };
  //   const [name, setName] = useState('');
  //   const [number, setNumber] = useState('');
  // console.log(number);
  //   const handleChange = event => {
  //     const { name, value } = event.target;
  //     switch (name) {
  //       case 'name':
  //         setName(value);
  //         break;
  //       case 'number':
  //         setNumber(value);
  //         break;
  //       default:
  //         return;
  //     }
  //   };

  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     onSubmit(name, number);
  //     reset();
  //   };
  //   const reset = () => {
  //     setName('');
  //     setNumber('');
  //   };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label htmlFor="" className={s.label}>
        Name
        <input
          autoComplete="off"
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="" className={s.label}>
        Number
        <input
          autoComplete="off"
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}
// class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//     id: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label htmlFor="" className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label htmlFor="" className={s.label}>
//           Number
//           <input
//             className={s.input}
//             onSubmit={this.handleSubmit}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;
