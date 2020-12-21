import React from 'react';

const CategoryBox = ({ category, img }) => {
    return (
        <td>
            <figure>
                <img src={img} alt="Aqui deberia estar mi imagen" />
                <div class="capa">
                    <h3>{category}</h3>
                    <p><b>Leer Más</b></p>
                </div>
            </figure>
        </td>
    )
}

export default CategoryBox;