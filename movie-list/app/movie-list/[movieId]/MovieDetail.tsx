import { Fragment } from "react"
import { MovieItem } from "../Movies"
import styles from "./MovieDetail.module.css"

export default function MovieDetail(props: any) {
    const data = props.props
    return (
        <Fragment>
            {
                <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
                    <div className={styles.movie_detail_container}>
                        <img
                            className={styles.movie_detail_img}
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            alt={data.original_title}
                        />
                        <div className={styles.movie_detail_info}>
                            <h2>{data.original_title}</h2>
                            <span>Original language: {data.original_language.toUpperCase()}</span>
                            <span style={{marginTop: "35px", fontSize: "25px"}}>Overview: </span>
                            <p className={styles.movie_detail_overview}>{data.overview}</p>
                            <div className={styles.movie_detail_extra_info}>
                                <p>Release date: {data.release_date}</p>
                                <p>Rating: {data.vote_average}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}