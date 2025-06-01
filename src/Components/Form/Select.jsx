import style from './Select.module.css'

function Select({ text, name, id, handlerChange, options }) {
    


    
    return (

        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange}>

                <option value=''>Selecione uma categoria</option>

                {/*<option value='1'>Ficcção Cientifica</option>
                <option value='2'>Fantasia Heroica</option>
                <option value='3'>Suspense</option>
                <option value='4'>Terror</option> */}

                {
                    options.map((option) => (

                        <option key={option.cod_categoria} value={option.cod_categoria}> {option.nome_categoria}</option>
                    ))
                }


            </select>

        </div>

    )
}

export default Select;