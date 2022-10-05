import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Maks'},
        {id: 3, name: 'Tanya'},
        {id: 4, name: 'Vano'},
        {id: 5, name: 'Serj'},
        {id: 6, name: 'Valera'}];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'okay bro'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'ggg boy'},
        {id: 6, message: 'yes'}];


    let dialogElements = dialogs.map(el => (<DialogItem name={el.name} id={el.id}/>));

    let messageElements = messages.map(message => (<Message message={message.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

        </div>

    )
}
export default Dialogs