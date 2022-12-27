import style from './form-row.module.scss';

const FormRow = ({type, name, Teg, file}) => {
  return (
    <div className={style.row}>
      {file
         ? <Teg type={type} name={name} />
         : <>
            <label htmlFor={name}>
              {name[0].toUpperCase() + name.slice(1)}:
            </label>
            <Teg
              type={type} 
              name={name} 
              placeholder={`Enter your ${name}`} 
              id="id"
            />
          </>}
    </div>
  );
}

export default FormRow;