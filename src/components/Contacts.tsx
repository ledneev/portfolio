export const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/ledneev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span className="font-semibold">GitHub</span>
            </a>

            <a 
              href="https://t.me/ledneeev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <svg className="w-12 h-12 mb-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.53.52-.5-.01-1.47-.28-2.19-.51-.88-.28-1.58-.43-1.52-.95.03-.26.38-.53 1.03-.81 4.02-1.75 6.7-2.9 8.04-3.46 3.82-1.6 4.62-1.88 5.14-1.89.11 0 .37.03.54.16.14.12.18.28.2.4-.02.12-.03.38-.04.58z"/>
              </svg>
              <span className="font-semibold">Telegram</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-green-50 rounded-xl hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <svg className="w-12 h-12 mb-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zM8.25 8.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM6 8.5a.75.75 0 00-1.5 0v5a.75.75 0 001.5 0v-5z"/>
              </svg>
              <span className="font-semibold">Резюме</span>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Или напишите мне на email:</p>
            <a 
              href="mailto:ledneeev@gmail.com" 
              className="text-xl text-blue-500 hover:text-blue-600"
            >
              ledneeev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};