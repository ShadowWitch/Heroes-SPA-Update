import { useMemo } from "react"
import { matchRoutes, Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"

export const HeroPage = () => {
    // const params = useParams() // "useParams" sirve para obtener los parametros
    // const {idHero, ...rest} = useParams()
    // console.log('resto >> ', rest)
    const { idHero } = useParams()
    // const hero = getHeroById(idHero)

    // NOTA: Aqui no es necesario el "useMemo" nada mas se pone por si algun dia reutilizamos ese componente y el padre que contiene este componente cambia entonces asi de esta manera NOO ejecutamos de nuevo esta funcion "getHeroById"
    const hero = useMemo(() => getHeroById(idHero), [idHero]) // Es cierto que "getHeroById" es una funcion PEROO aqui en lugar de "useCallBack" va "useMemo" ya que al poner "useCallBack" entonces a la hora de llamar ese "hero" lo tendriamos que llamar como "hero()" ya que pasaria a ser una funcion y yo NOO quiero eso lo unico que quiero es almacenar los datos del "getHeroById" en "hero"
    const navigate = useNavigate()

    // console.log(hero)

    // console.log(idHero)
    // const navigate = useNavigate() // Usando esto NO FUNCIONA ya que no retorna a donde queremos

    if (!hero){
        return <Navigate to="/marvel" />
        // navigate('/marvel', {replace: true}) // Usando esto no funciona
        // return 
    }

    const onNavigateBack = () =>{
        navigate(-1) // Regresar a la pestana que estaba antes... (Osea Dc o Marvel dependiendo)
    }

    const randomEffect = () => {
        const classArrAnimate = ['animate__fadeInLeft', 'animate__fadeInRight', 'animate__fadeInTopLeft', 'animate__fadeInBottomRight']
        const num = Math.floor(Math.random() * classArrAnimate.length)
        return classArrAnimate[num]
    }
    
   return(
       <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${idHero}.jpg`} 
                    alt={hero.superhero} 
                    className={`img-thumbnail animate__animated ${randomEffect()}`}
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>
        </div>
   )
}
