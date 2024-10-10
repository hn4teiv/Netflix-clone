// /pages/recommend.tsx
import { useState } from 'react';

const RecommendPage = () => {
const [genre, setGenre] = useState('');
const [mood, setMood] = useState('');
const [favoriteMovies, setFavoriteMovies] = useState('');
const [recommendations, setRecommendations] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();

const res = await fetch('/api/recommendations', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
genre,
mood,
favoriteMovies,
}),
});

const data = await res.json();
setRecommendations(data.recommendations);
};

return (
<div className="bg-black min-h-screen p-8">
<h1 className="text-white text-3xl mb-6">Đề xuất phim từ AI</h1>

<form onSubmit={handleSubmit} className="space-y-4 p-4">
<div className="flex space-x-4">
<input
type="text"
placeholder="Thể loại phim (ví dụ: Hành động)"
value={genre}
onChange={(e) => setGenre(e.target.value)}
className="p-2 border rounded"
/>
<input
type="text"
placeholder="Tâm trạng của bạn (ví dụ: vui vẻ, buồn bã)"
value={mood}
onChange={(e) => setMood(e.target.value)}
className="p-2 border rounded"
/>
</div>
<div className="flex space-x-4">
<input
type="text"
placeholder="Các phim bạn yêu thích (tách nhau bằng dấu phẩy)"
value={favoriteMovies}
onChange={(e) => setFavoriteMovies(e.target.value)}
className="p-2 border rounded"
/>
</div>
<button type="submit" className="bg-blue-500 text-white p-2 rounded">
Đề xuất phim
</button>
</form>

{recommendations && (
<div className="mt-6 text-white">
<h2 className="text-2xl">Đề xuất của AI:</h2>
<p>{recommendations}</p>
</div>
)}
</div>
);
};

export default RecommendPage;