/*

Write how many stars that were chosen: "You rated X stars"

*/

import { useState } from 'react'
import defaultPoster from './posters/default.png'
import starGray from './stars/star-gray.png'
import star from './stars/star.png'

function Movie(props) {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const maxstars = props.maxstars ?? 5
    const title = props.title ?? "<No name>"
    const poster = props.poster ?? defaultPoster

    const clickStar = (number)=>{
        setChosenStars(number)
    }

    const hoverStar = (number)=>{
        setHoveredStar(number)
    }

    const leftStar = () => {
        setHoveredStar(null)
    }

    const selectStarImageFor = (number) => {
        if (hoveredStar!=null){

            if (hoveredStar >= number){
                return star
            } else {
                return starGray
            }    
        }

        if (chosenStars >= number){
            return star
        } else {
            return starGray
        }
    }

    const oneToMaxStars = () => {

        let x=[]
        for(let i=1; i<=maxstars; i++) {
            x.push(i)
        }
        return x

    }

    return (

        <article className="box movie">

            <h2 className='text-center'>{title}</h2>

            <div className="text-center">
                <img className="img-fluid" src={poster} />
            </div>

            <div className="text-center">
                
                {[...Array(maxstars).keys()].map(n=>
                    <img key={n+1} src={selectStarImageFor(n+1)} onClick={() => clickStar(n+1)} onMouseEnter={() => hoverStar(n+1)} onMouseOut={() => leftStar()} className='movie__star' />
                )}

            </div>

            <div className="movie__info" onClick={()=>clickStar(0)}>

            { chosenStars === 0 ? <>&nbsp;</> : <>You rated {chosenStars} stars!</> }
            
            </div>

        </article>

    )
}

export default Movie

