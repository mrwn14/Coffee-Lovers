function Translate(props) {

    function onNewLang(event) {
        props.handleLang(event.target.value)
    }

    return (  

        <div className="filterArea">
            <select name="languages" onChange={onNewLang}>
                <option value="en">EN</option>
                <option value="fr">FR</option>
            </select>
        </div>
    );
}

export default Translate;
