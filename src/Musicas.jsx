// Importa o módulo 'React' da biblioteca React
import React from "react";
// Importa o componente 'ItemMusica' do diretório atual
import ItemMusica from "./components/ItemMusica";

// Definição do componente 'Musicas'
function Musicas() {
    // Retorna um componente React
    return (
        // Fragmento vazio do React, que permite retornar vários elementos adjacentes
        <>
            {/* Contêiner com um botão 'Adicionar' */}
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>
            {/* Contêiner com caixas de música, cada uma representada pelo componente 'ItemMusica' */}
            <div class="container">
                <div class="music-boxes">
                    {/* Componente 'ItemMusica' com dados específicos */}
                    <ItemMusica
                        artista="SprintBreakers"
                        genero="Música da boa"
                        ano="2023"
                    />
                    {/* Componente 'ItemMusica' com dados específicos */}
                    <ItemMusica
                        nome="Estudei para a prova"
                        artista="SprintBreakers"
                        genero="Música da boa"
                    />
                    {/* Componente 'ItemMusica' com dados específicos */}
                    <ItemMusica
                        nome="Passei de semestre"
                        artista="SprintBreakers"
                        genero="Música da boa"
                        ano="2023"
                    />
                    {/* Componente 'ItemMusica' com dados específicos */}
                    <ItemMusica
                        nome="Chocolatey"
                        artista="Baby Metal"
                        genero="Metal"
                        ano="2021"
                    />
                    {/* Componente 'ItemMusica' com dados específicos */}
                    <ItemMusica
                        nome="One"
                        artista="Metallica"
                        genero="Metal"
                        ano="2006"
                    />
                </div>
            </div>
        </>
    );
}

// Exporta o componente 'Musicas' para ser utilizado em outros lugares da aplicação
export default Musicas;