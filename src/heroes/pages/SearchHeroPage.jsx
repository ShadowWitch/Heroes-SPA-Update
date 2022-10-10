import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooksglobals/useForm"
import { HeroCard } from "../components"
import { getHerosByName } from "../helpers"

export const SearchHeroPage = () => {

    const navigate = useNavigate()
    const location = useLocation() // Para sacar las querys

    const {q = ''} = queryString.parse(location.search) // Si no viene "q" entonces que sea igual a ""
    const heroes = getHerosByName(q)
    // console.log('ACAA');

    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const onSearchSubmit = (e) =>{
        e.preventDefault()
        // if (searchText.trim().length <= 1) return alert('Ingrese datos.');
        // console.log(searchText);

        navigate(`?q=${searchText}`) // Para enviar las querys
        // navigate('/?hola=23')
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input 
                            type="text" 
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-primary mt-2">
                            Search
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Result</h4>
                    <hr />
                    
                    {
                        (q === '') 
                        ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
                        : (heroes.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{q}</b></div>
                    }
                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
