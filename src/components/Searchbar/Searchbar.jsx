import './Searchbar.css'


const Searchbar = (props) => {
    return (
        <div>
            <h3>Procurar por devs</h3>
            <form 
            className="form"
            onSubmit={props.onSubmit}>
                <input
                className="input" 
                type="text"
                placeholder="Digite o username ..."
                onChange={props.onChange}
                >
                </input>
                <button 
                className="mdc-button mdc-button--icon-leading" 
                onClick={props.onClick}
                >
                <i className="material-icons">search</i>
                <span className="mdc-button__label">Buscar</span>
                </button>
            </form>
        </div> 

     );
}
 
export default Searchbar;