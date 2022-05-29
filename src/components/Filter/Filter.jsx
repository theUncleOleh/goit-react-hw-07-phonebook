import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/contacts/items-actions';
import { getFilterSelector } from '../../redux/contacts/items-selectors';

export default function Filter() {
  const value = useSelector(getFilterSelector);
  console.log(value);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filter(e.target.value));
    console.log(e.currentTarget.value);
  };
  return (
    <label className={s.label}>
      Filter
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={s.input}
      />
    </label>
  );
}
