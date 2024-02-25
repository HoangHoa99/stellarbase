"use client"
import { useQuery } from "@tanstack/react-query"
import React, { Fragment, useEffect } from "react"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
};

async function getPopularMovies() {
    const response = await
        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                const movies = response.results;
                console.log(movies)
                return movies;
            })
            .catch(err => console.error(err))
            .then((res) => res)

    console.log(response);

    return response
}

export default function Movies() {
    const [count, setCount] = React.useState(0)
    const { data } = useQuery<any[]>({
        queryKey: [],
        queryFn: () => getPopularMovies(),
        staleTime: 5 * 1000,
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 100)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <Fragment>
            {
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gap: 20,
                    }}
                >
                    {data?.map((movie) => (
                        <div key={movie.id} style={{ border: "1px solid #ccc", textAlign: "center" }}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt={movie.original_title}
                                style={{ width: 180, height: 180 }}
                            />
                            <h3>{movie.original_title}</h3>
                        </div>
                    ))}
                </div>
            }
        </Fragment>
    )
}