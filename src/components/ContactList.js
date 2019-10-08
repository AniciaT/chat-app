import React from 'react';
import Contact from './Contact.js';

const users =[
    {name: "Kathy Ferguson", avatar: "https://randomuser.me/api/portraits/women/2.jpg", online: true},
    {name: "Ernest Hale", avatar: "https://randomuser.me/api/portraits/men/96.jpg", online: false},
    {name: "Ben Welch", avatar: "https://randomuser.me/api/portraits/men/58.jpg", online: false},
    {name: "Camila Mendoza", avatar: "https://randomuser.me/api/portraits/women/57.jpg", online: true},
    {name: "Monica Gomez", avatar: "https://randomuser.me/api/portraits/women/11.jpg", online: true}
]

const ContactList = () => (
<div>
    {users.map(item => (<Contact avatar={item.avatar} name={item.name} online={item.online} />)
    )}
</div>

)

export default ContactList;