import Button from '@src/shared/components/Button/Button';
import Input from '@src/shared/components/Input/Input';
import Select from '@src/shared/components/Select/Select';
import './BookForm.scss';

export const BookForm = () => {
  return (
    <form className="c-book-form">
      <div className="c-book-form__field">
        <Input label="Name" />
      </div>
      <div className="c-book-form__field">
        <Input label="Email" />
      </div>
      <div className="c-book-form__field">
        <Select label="Deparment" options={[]} />
      </div>
      <div className="c-book-form__field">
        <Select label="Time" options={[{ label: '4:00 Available', value: 4 }]} />
      </div>
      <div className="c-book-form__submit">
        <Button variant="filled" size="sm" className="c-book-form__button">
          Book Appointment
        </Button>
      </div>
    </form>
  );
};
