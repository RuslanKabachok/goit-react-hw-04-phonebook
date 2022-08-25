import PropTypes from 'prop-types';
import { ContactList } from './ContactList.styled';
import {
  ContactListItem,
  Button,
} from 'components/ContactItem/ContactItem.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
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
