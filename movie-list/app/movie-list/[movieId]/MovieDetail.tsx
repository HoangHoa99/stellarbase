"use client"
import { Fragment, useEffect, useState } from "react"
import styles from "./MovieDetail.module.css"
import { useQuery } from "@tanstack/react-query";
import { MovieDetail, getMovieDetailById } from "@/utils/service";

export default function MovieDetail(props: any) {

    const movieId = props.props

    let { isLoading, data, refetch } = useQuery<MovieDetail>({
        queryKey: [],
        queryFn: () => getMovieDetailById(movieId),
        staleTime: Infinity,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            refetch();
        }, 5);

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, [])

    return isLoading || !data ? (
        <div className={styles.center_loading}>
            <h1>Loading...</h1>
        </div>
    ) : (
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
                            <span style={{ marginTop: "35px", fontSize: "25px" }}>Overview: </span>
                            <p className={styles.movie_detail_overview}>{data.overview}</p>
                            <div className={styles.movie_detail_extra_info}>
                                <p>Release date: {data.release_date}</p>
                                <p>Rating: {(Math.round(data.vote_average * 100) / 100).toFixed(2)}</p>
                            </div>
                            <div className={styles.movie_detail_extra_info_type}>
                                <label>Movie types: </label>
                                <ul>
                                    {data.genres.map((genre) => (
                                        <li key={genre['id']}>{genre['name']}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.movie_detail_extra_info_company}>
                                <label>Production companies: </label>
                                <ul>
                                    {data.production_companies.map((company) => (
                                        <li key={company['id']}>{company['name']}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}