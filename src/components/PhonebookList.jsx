import {ListItem, Button} from './PhonebookStyled'
export default function PhonebookList({ data, removeContacts }) {
    
  
    const list = data.map(({id,name,number}) => { return <ListItem key={id}><span>Name: {name}</span>  Phone: {number}<span><Button onClick={()=>removeContacts(id)}> Remove</Button></span> </ListItem> })
    return (
        <>
        <h3>Contacts</h3>
        <ul>{list}</ul>
        </>
        )
}
PhonebookList.defaultProps = {data:[]}