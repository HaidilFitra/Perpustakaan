import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import book from "../assets/images/book.webp";
import AboutImage from "../assets/images/about.png";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/show/book')
      .then((res) => {
        if (res.data && res.data.books && Array.isArray(res.data.books)) {
          setBooks(res.data.books);
        } else {
          // console.error("API response structure is unexpected:", res.data);
          setError("Unexpected data structure. Please try again later.");
          setBooks([]); 
        }
      })
      .catch((error) => {
        // console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pb-10 homepage">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-20 pt-32 md:grid-cols-2 hero">
            <div className="box">
              <h1 className="text-3xl font-medium lg:text-5xl/tight mb-7">
                Perpustakaan Digital Masa Depan{" "}
                <span className="font-bold underline text-sky-400">LiteraLink</span>
              </h1>
              <p className="text-base/8 mb-7">
                Jelajahi ribuan buku digital dalam genggaman Anda. LiteraLink menghadirkan perpustakaan masa depan, 
                menggabungkan teknologi canggih dengan kekayaan literatur. Perluas wawasan, tingkatkan produktivitas, 
                dan temukan inspirasi baru setiap hari. Bergabunglah sekarang dan mulailah petualangan membaca tanpa 
                batas Anda.
              </p>
              <a
                href=""
                className="px-4 py-2 text-white transition-all rounded-full shadow bg-sky-400 hover:bg-sky-500"
              >
                Lihat Daftar Buku <i className="ri-book-2-line ms-1"></i>
              </a>
            </div>
            <div className="box">
              <img
                src={book}
                alt="book image"
                className="md:w-full w-[300px] md:m-0 mx-auto"
              />
            </div>
          </div>

          {/* About */}
          <div
            className="grid items-center grid-cols-1 md:gap-20 gap-10 pt-32 md:pt-20 md:grid-cols-2 about"
            id="about"
          >
            <div className="order-2 md:order-1 box">
              <img
                src={AboutImage}
                alt="about image"
                className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
              />
            </div>
            <div className="order-1 box md:order-2">
              <h1 className="text-3xl font-medium lg:text-5xl/tight mb-7">
                Perpustakaan Digital Masa Depan{" "}
                <span className="font-bold underline text-sky-400">LiteraLink</span>
              </h1>
              <p className="text-base/loose">
                Jelajahi dunia pengetahuan tanpa batas. LiteraLink menghubungkan bisnis Anda dengan perpustakaan 
                digital terdepan, memadukan teknologi Laravel dan React.js untuk pengalaman membaca yang revolusioner. 
                Buka pintu menuju perpustakaan modern hari ini!
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="pt-32 services" id="services">
            <h1 className="mb-2 text-3xl font-medium text-center lg:text-5xl/tight">
              Layanan Unggulan LiteraLink
            </h1>
            <p className="text-center">
              Nikmati pengalaman membaca digital terbaik dengan fitur-fitur inovatif kami. LiteraLink hadir untuk 
              memenuhi kebutuhan literasi Anda.
            </p>
            <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-1 text-3xl text-white"></i>
                <h3 className="text-white font-bold text-xl mt-6 mb-2">
                  Akses Digital Tanpa Batas.
                </h3>
                <p className="text-white text-base/loose">
                  Jelajahi ribuan judul buku dari berbagai genre, kapan saja dan di mana saja. Nikmati kemudahan 
                  membaca tanpa perlu mengunjungi perpustakaan fisik.
                </p>
              </div>
              <div className="box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-2 text-3xl text-white"></i>
                <h3 className="text-white font-bold text-xl mt-6 mb-2">
                  Rekomendasi Pintar
                </h3>
                <p className="text-white text-base/loose">
                  Temukan buku-buku yang sesuai minat Anda melalui sistem rekomendasi cerdas kami. Perluas wawasan 
                  dan temukan penulis baru favorit dengan mudah.
                </p>
              </div>
              <div className="box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-3 text-3xl text-white"></i>
                <h3 className="text-white font-bold text-xl mt-6 mb-2">
                  Komunitas Literasi
                </h3>
                <p className="text-white text-base/loose">
                  Bergabunglah dalam komunitas pembaca aktif. Bagikan ulasan, diskusikan buku favorit, dan terhubung 
                  dengan sesama pencinta literatur.
                </p>
              </div>
            </div>
          </div>

          {/* Books */}
          <div className="books pt-32" id="books">
        <h1 className="mb-2 text-3xl font-medium text-center lg:text-5xl/tight">
          Koleksi Unggulan LiteraLink
        </h1>
        <p className="text-center">
          Temukan beragam buku digital pilihan untuk memperluas wawasan dan imajinasi Anda.
        </p>
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="books-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {books.length > 0 ? (
              books.map((book) => (
                <div className="box p-2 bg-white shadow" key={book.id}>
                  <img src={"http://127.0.0.1:8000/storage/images/" + book.image} alt={`Cover of ${book.title}`} className="w-full h-[220px] object-cover" />
                  <h3 className="font-bold text-xl mt-6 mb-2">{book.title}</h3>
                  <p className="text-base/loose">{book.author}</p>
                </div>
              ))
            ) : (
              <p className="text-center">Tidak ada buku yang tersedia saat ini.</p>
            )}
          </div>
        )}
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
