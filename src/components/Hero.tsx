export const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Привет, я <span className="text-blue-400">Иван</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Фронтенд-разработчик с опытом создания современных веб-приложений
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["React", "TypeScript", "Node.js", "Next.js", "Tailwind"].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <a 
            href="#contacts" 
            className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition transform hover:scale-105"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </section>
  );
};