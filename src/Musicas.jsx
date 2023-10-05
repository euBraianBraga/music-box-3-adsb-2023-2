import React from "react";
import ItemMusica from "./components/ItemMusica";

function Musicas() {
    return (
        <>
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>
            <div class="container">
                <div class="music-boxes">
                    <ItemMusica
                        artista="SprintBreakers"
                        genero="Música da boa"
                        ano="2023"
                    />
                    <ItemMusica
                        nome="Estudei para a prova"
                        artista="SprintBreakers"
                        genero="Música da boa"
                    />
                    <ItemMusica
                        nome="Passei de semestre"
                        artista="SprintBreakers"
                        genero="Música da boa"
                        ano="2023"
                    />
                    <ItemMusica
                        nome="Chocolatey"
                        artista="Baby Metal"
                        genero="Metal"
                        ano="2021"
                    />
                    <ItemMusica
                        nome="One"
                        artista="Metallica"
                        genero="Metal"
                        ano="2006"
                    />
                </div>
            </div>
        </>
    )
}

export default Musicas;