export type MovieList = {
    page: number;
    results: MovieItem[];
    total_pages: number;
    total_results: number;
};

export type MovieItem = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
    vote_count: number;
}

export type MovieDetail = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: any[];
	id: number;
    homepage: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
    vote_count: number;
    production_companies: any[]
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    }
}

export async function getPopularMovies(page: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, options)
    return res.json();
}

export async function getFavoriteMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/account/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/favorite/movies?page=1&sort_by=created_at.desc`, options)
    return res.json();
}

export async function getMovieDetailById(movieId: number) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
    return res.json()
}

export async function addFavoriteMovie(movieId: number) {
    const postOptions = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        },
        body: JSON.stringify({ media_type: 'movie', media_id: movieId, favorite: true })
    }

    const res = await fetch(`https://api.themoviedb.org/3/account/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/favorite`, postOptions)
    return res.json()
}