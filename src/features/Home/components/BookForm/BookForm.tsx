import Button from '@src/shared/components/Button/Button';
import Input from '@src/shared/components/Input/Input';
import Select from '@src/shared/components/Select/Select';
import './BookForm.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues, schema } from '../../squemes';
import ErrorMessage from '@src/shared/components/ErrorMessage/ErrorMessage';

export const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      deparment: '',
      time: 1,
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log('SUBMIT', data);
  };

  return (
    <form className="c-book-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="c-book-form__field">
        <Input label="Name" {...register('name')} />
        {errors.name && <ErrorMessage id="cellError">{errors.name.message}</ErrorMessage>}
      </div>
      <div className="c-book-form__field">
        <Input label="Email" {...register('email')} />
        {errors.email && <ErrorMessage id="cellError">{errors.email.message}</ErrorMessage>}
      </div>
      <div className="c-book-form__field">
        <Select label="Deparment" {...register('deparment')} options={[]} />
        {errors.deparment && <ErrorMessage id="cellError">{errors.deparment.message}</ErrorMessage>}
      </div>
      <div className="c-book-form__field">
        <Select label="Time" {...register('time')} options={[{ label: '4:00 Available', value: 1 }]} />
        {errors.time && <ErrorMessage id="cellError">{errors.time.message}</ErrorMessage>}
      </div>
      <div className="c-book-form__submit">
        <Button variant="filled" size="sm" className="c-book-form__button">
          Book Appointment
        </Button>
      </div>
    </form>
  );
};
