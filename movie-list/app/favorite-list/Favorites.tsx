"use client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link";
import React, { Fragment, useEffect } from "react"
import styles from "../movie-list/Movies.module.css"
import { MovieList, getFavoriteMovies } from "@/utils/service";

export default function FavoritesPage() {
    const { data, refetch } = useQuery<MovieList>({
        queryKey: ['page', 1],
        queryFn: () => getFavoriteMovies(),
        staleTime: Infinity,
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            refetch();
        }, 5);

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, [])

    return (
        <Fragment>
            {
                <div>
                    <div style={{ width: "100vw", height: "1px", backgroundColor: "white", position: "absolute", top: "4%" }}></div>
                    <h1 className={styles.page_header}>Favorite Movie</h1>
                    <div className={styles.movies_container}>
                        {data?.results.map((movie) => (
                            <Link key={movie.id} className={styles.movie_item} href={`/movie-list/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.original_title}
                                />
                                <div style={{ marginBottom: "10px" }} className={styles.flex90}>
                                    <h3>{movie.original_title}</h3>
                                    {/* <svg fill="white" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </Fragment>
    )
}