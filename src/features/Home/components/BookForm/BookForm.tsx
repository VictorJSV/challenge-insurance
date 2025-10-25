import Button from '@src/shared/components/Button/Button';
import Input from '@src/shared/components/Input/Input';
import Select from '@src/shared/components/Select/Select';


export const BookForm = () => {
  return (
    <form className="flex flex-col gap-3 md:gap-[10px]">
      <div>
        <Input label="Name" />
      </div>
      <div>
        <Input label="Email" />
      </div>
      <div>
        <Select label="Deparment" options={[]} />
      </div>
      <div>
        <Select label="Time" options={[{ label: '4:00 Available', value: 4 }]} />
      </div>
      <div className="mt-10">
        <Button variant="filled" size="sm" className="w-full">
          Book Appointment
        </Button>
      </div>
    </form>
  );
};
