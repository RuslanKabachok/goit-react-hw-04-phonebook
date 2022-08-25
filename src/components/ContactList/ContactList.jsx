import PropTypes from 'prop-types';
import { ContactList, ListBtn } from './ContactList.styled';
import { ContactListItem } from 'components/ContactItem/ContactItem.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ListBtn onClick={() => onDelete(contact.id)}>Delete</ListBtn>
        </ContactListItem>
      ))}
    </ContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};

export default Contacts;
