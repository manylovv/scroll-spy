// components/LandingPage.js

import useScrollSpy from './hooks/useScrollSpy'; // Adjust the import path accordingly

const LandingPage = () => {
  // Define the sections with their IDs and display names
  const ids = ['exterior', 'interior', 'packages', 'options'];

  // 56 is offset of the nav bar
  const activeId = useScrollSpy(ids, 56);

  return (
    <div className="relative scroll-smooth">
      {/* Header */}
      <header className="h-20 bg-zinc-800"></header>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 left-0 right-0 bg-white shadow z-50">
        <ul className="flex justify-around p-4">
          {ids.map((id) => (
            <li key={id} className="cursor-pointer">
              <a
                href={`#${id}`}
                className={`${
                  activeId === id ? 'font-bold' : 'font-normal'
                } transition duration-300`}
                aria-current={activeId === id ? 'page' : undefined}
              >
                <p className="first-letter:uppercase">{id}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to prevent content from being hidden behind the fixed nav */}
      <div>
        {ids.map((id) => (
          <section
            key={id}
            id={id}
            className="h-screen flex items-center justify-center bg-gray-100 border-b"
          >
            {id}
          </section>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
