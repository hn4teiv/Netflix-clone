// /pages/categories.tsx
import { useState, useEffect } from 'react';

const CategoriesPage = () => {
const [movies, setMovies] = useState([]);
const [selectedGenre, setSelectedGenre] = useState('');
const [genres, setGenres] = useState(['Action', 'Comedy', 'Drama', 'Horror', 'Romance']); // Giả định các thể loại có sẵn

const fetchMoviesByGenre = async (genre: string) => {
const res = await fetch(`/api/moviesByCategory?genre=${genre}`);
const data = await res.json();
setMovies(data);
};

// Gọi API khi người dùng chọn thể loại
useEffect(() => {
if (selectedGenre) {
fetchMoviesByGenre(selectedGenre);
}
}, [selectedGenre]);

return (
<div className="bg-black min-h-screen p-8">
<h1 className="text-white text-3xl mb-6">Chọn thể loại phim</h1>

{/* Dropdown hoặc buttons để chọn thể loại */}
<div className="mb-8">
{genres.map((genre) => (
<button
key={genre}
className={`p-2 m-2 text-white border rounded ${selectedGenre === genre ? 'bg-blue-500' : 'bg-gray-800'}`}
onClick={() => setSelectedGenre(genre)}
>
{genre}
</button>
))}
</div>

{/* Hiển thị danh sách phim */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{movies.length > 0 ? (
movies.map((movie: any) => (
<div key={movie.id} className="bg-gray-900 text-white p-4 border rounded-lg">
<img src={movie.thumbnailUrl} alt={movie.title} className="w-full h-64 object-cover" />
<h3 className="text-xl font-bold mt-2">{movie.title}</h3>
<p>{movie.genre}</p>
<p>{movie.duration}</p>
</div>
))
) : (
<p className="text-white">Không có phim nào trong thể loại này.</p>
)}
</div>
</div>
);
};

export default CategoriesPage;