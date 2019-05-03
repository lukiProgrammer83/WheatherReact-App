import React from 'react';
const Form = props => {
    return (
        // <form onSubmit={props.submit}>
        <form>
            <input

                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Wpisz miejscowość"
            />
            {/* <button>Wyszukaj miejscowość</button> */}
        </form>
    )
        < div > divek</div >
}

export default Form;