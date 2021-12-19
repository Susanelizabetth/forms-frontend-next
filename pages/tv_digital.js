export default function TVDigital() {

    return(
        <div className="container box">
            <h1 className="title has-text-centered">Formulario</h1>
            <hr/>
            <div class="columns is-multiline">
                <h3 class="title column is-4">Detalles del Evento</h3>
                <div class="column is-8">
                    <div class="field">
                        <label class="label">Nombre completo de la actividad:</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Nombre completo de la actividad" required/>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Facultad o unidad que organiza:</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Facultad o unidad que organiza"/>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="field column">
                            <label class="label">Fecha del evento:</label>
                            <div class="control">
                                <input class="input" type="date" placeholder="Fecha del evento:"/>
                            </div>
                        </div>
                        <div class="field column">
                            <label class="label">Hora de inicio:</label>
                            <div class="control">
                                <input class="input" type="time" placeholder="Hora de inicio"/>
                            </div>
                        </div>
                        <div class="field column">
                            <label class="label">Hora que finaliza:</label>
                            <div class="control">
                                <input class="input" type="time" placeholder="Hora que finaliza"/>
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="field column">
                            <label class="label">Lugar donde se realizará:</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Lugar donde se realizará"/>
                            </div>
                        </div>
                        <div class="field column">
                            <label class="label">Tipo de actividad:</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Tipo de actividad:"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        
    )
    
}