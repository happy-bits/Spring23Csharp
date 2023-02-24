
import {useState} from 'react'
import poster from './posters/good-bad-ugly.jpg'
import star from './stars/star.png'
import starGray from './stars/star-gray.png'

function Movie() {

    const [chosenStars, setChosenStars] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(null)

    const clickedStar = (number) => {

        console.log("Clicked star", number)

        setChosenStars(number)
    }

    const hoverStar = (number) => {
        console.log("Hovered star", number)
        setHoveredStar(number)
    }

    const leftStar = () => {
        console.log("Left a star!!!")
        setHoveredStar(null)
    }

    const selectStarImageFor = (number)=>{
        if (chosenStars >= number){
            return star
        } else {
            return starGray
        }
    }

    return (
        <article className="box movie">

            <img className="img-fluid" src={poster} alt=""/>

            <div className="text-center">

                <img onClick={() => clickedStar(1)} onMouseEnter={() => hoverStar(1)} onMouseOut={() => leftStar()} className='movie__star' src={selectStarImageFor(1)} alt="" />
                <img onClick={() => clickedStar(2)} onMouseEnter={() => hoverStar(2)} onMouseOut={() => leftStar()} className='movie__star' src={selectStarImageFor(2)}  alt="" />
                <img onClick={() => clickedStar(3)} onMouseEnter={() => hoverStar(3)} onMouseOut={() => leftStar()} className='movie__star' src={selectStarImageFor(3)}  alt="" />
                <img onClick={() => clickedStar(4)} onMouseEnter={() => hoverStar(4)} onMouseOut={() => leftStar()} className='movie__star' src={selectStarImageFor(4)}  alt="" />
                <img onClick={() => clickedStar(5)} onMouseEnter={() => hoverStar(5)} onMouseOut={() => leftStar()} className='movie__star' src={selectStarImageFor(5)}  alt="" />

            </div>

            <div className="movie__info" onClick={() => setChosenStars(0)}>
                You rated 3 stars!
            </div>

            <h2>Hovered star: {hoveredStar}</h2>

        </article>
    )
}

export default Movie