import './campo-texto.css'

const Campo = ({ label, placeholder, valor, aoAlterado, tipo, obrigatorio = false }) => {
    return (<div className={`campo-texto campo-${tipo}`}>
        <label>{label}</label>
        <input
            type={tipo}
            value={valor}
            onChange={evento =>
                aoAlterado(evento.target.value)}
            required={obrigatorio}
            placeholder={placeholder}
        />
    </div>)
}

export default Campo