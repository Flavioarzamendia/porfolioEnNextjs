"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default ()  => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name:'',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name:'',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mpzgoqyo',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Su mensaje ha sido enviado con Exito!',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main className="z-10">
      <form onSubmit={handleOnSubmit} className="flex flex-col">
        <label htmlFor='autocomplete' className="text-white block text-sm mb-2 font-medium mt-4 pb-2">Nombre</label>
        <input
          id="name"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder='Juan Perez'
        />
        <label htmlFor="email" className='text-white block text-sm mb-2 font-medium mt-4'>Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder='juan123@gmail.com'
        />
        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium mt-4"
        >Mensaje</label>
        <textarea
          id="message"
          name="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mt-2"
          placeholder='Escriba su mensaje'
        />
        <button type="submit" disabled={status.submitting} className="bg-purple-500 border hover:bg-purple-600 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mt-6">
          {!status.submitting
            ? !status.submitted
              ? 'Enviar'
              : 'Enviado'
            : 'Enviando...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className='text-green-500 mt-3 text-center'>{status.info.msg}</p>}
    </main>
  );
};

