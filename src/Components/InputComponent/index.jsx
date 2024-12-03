import styles from "./Input.module.css"

function InputField({label, type, placeholder, name, value, onChange, classes}) {
    return (
        
            <div className={`d-flex flex-column  ${styles['input-field']} ${classes || ""}`}>
                <label
                    htmlFor={name}
                >
                    {label}
                </label>
                <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div> 
    );
}

export default InputField;