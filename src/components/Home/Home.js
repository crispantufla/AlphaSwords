import React, { Fragment } from 'react';
import CategoryBox from './components/CategoryBox';
import Header from './components/Header';
import "./Home.css";

const Home = () => {

  const categories = {
    "Ciencia Ficcion": "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f4cef935cafe8950d390dfa/novelas-ciencia-ficcion_1.jpg",
    "Misterio y Suspense": "https://i.ytimg.com/vi/s30ft3cRbik/maxresdefault.jpg",
    "Comedia": "https://sm.ign.com/ign_es/screenshot/default/image_46zw.jpg"
  }
  const categoriesTwo = {
    "Terror": "https://img.unocero.com/2020/10/peliculas-terror-netflix-prime-video-1200x600.jpg",
    "Accion":"https://s1.eestatic.com/2020/06/10/cultura/cine/Netflix-Peliculas-Cine-Estrenos_de_cine-Cine_496711655_153519932_1706x960.jpg",
    "Mas Categorias": "https://staticr1.blastingcdn.com/media/photogallery/2017/4/9/660x290/b_1200x680/todas-las-peliculas-cuentan-la-misma-historia-aunque-de-manera-distinta_1262769.jpg"
  }
    
  return (
    <Fragment>
      <Header />
      <div class="contenedor">
        <table>
          <tr>
            {Object.keys(categories).map(key => 
              <CategoryBox
                category={key}
                img={categories[key]}
              />
            )}
          </tr>
          <tr>
            {Object.keys(categoriesTwo).map(key => 
              <CategoryBox
                category={key}
                img={categoriesTwo[key]}
              />
            )}
          </tr>
        </table>
      </div>
    </Fragment>
  )
}

export default Home;