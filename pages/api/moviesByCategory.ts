// /pages/api/moviesByCategory.ts
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
try {
// Kiểm tra method là GET
if (req.method !== 'GET') {
return res.status(405).json({ error: 'Method Not Allowed' });
}

const { genre } = req.query;

// Kiểm tra genre có phải là chuỗi không và có giá trị hợp lệ không
if (typeof genre !== 'string' || !genre.trim()) {
return res.status(400).json({ error: 'Invalid or missing genre' });
}

// Truy vấn phim từ cơ sở dữ liệu dựa trên thể loại
const movies = await prismadb.movie.findMany({
where: {
genre: {
contains: genre, // So sánh thể loại dựa trên chuỗi chứa
},
},
});

// Trả về danh sách phim
return res.status(200).json(movies);
} catch (error) {
// Ghi lỗi chi tiết vào log để dễ dàng debug
console.error('Error in API handler:', error);

return res.status(500).json({ error: 'Internal Server Error' });
}
}