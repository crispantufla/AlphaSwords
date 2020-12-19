import React from 'react';

const CategoryBox = ({category, img}) => {

    //Te preguntaras y aqui como agrego url personalisada tambien? facil..
    //localhost:3001/bibliotecas/{category} GG IZI

    return(
        <td>
            <figure>
                <img src={img}/>
                <div class="capa">
                    <h3>{category}</h3>
                    <p><b>Leer Más</b></p>
                </div>
            </figure>
        </td>
    )
}

export default CategoryBox;