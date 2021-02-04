import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-action';
import {
    fetchContacts,
    addContact,
    deleteContact,
} from '../../redux/phonebook/phonebook-operations';
import {
    getContacts,
    getFilter,
} from '../../redux/phonebook/phonebook-selectors';
import { memoize } from '../../components/memoize';
import Section from '../../components/Section/Section';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

function ContactsView() {
    const contacts = useSelector(memoize(getContacts));
    const filter = useSelector(memoize(getFilter));

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchContacts()), [dispatch]);

    const handleSubmit = (name, number) => {
        const validationError = validateContact(name, number);
        if (validationError) {
            displayError(validationError);
        } else {
            dispatch(addContact(name, number));
        }
    };

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    const handleFilter = e => {
        dispatch(changeFilter(e.currentTarget.value));
    };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    const validateContact = (name, number) => {
        if (name === '' || number === '') {
            return 'Please add contact';
        }
        const existingContact = contacts.find(contact => contact.name === name);
        if (existingContact) {
            return `${name} is already in contacts!`;
        }
    };

    const displayError = error => {
        alert(error);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Section title="Phonebook">
                <ContactForm formSubmitHandler={handleSubmit} />
            </Section>
            <Section title="Contacts">
                <Filter value={filter} onChange={handleFilter} />
                <ContactList
                    contacts={getVisibleContacts()}
                    onDeleteContact={handleDeleteContact}
                />
            </Section>
        </div>
    );
}

export default ContactsView;
