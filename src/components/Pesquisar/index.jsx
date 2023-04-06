import React from 'react';

function Pesquisar() {
    return(
        <div className="d-flex align-items-center justify-content-start vh-70 margin-top-50">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Pesquisar deputado" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Procurar</button>
            </form>
        </div>
    )
}

export { Pesquisar }

