
import cover1 from "../assets/covers/cover1.JPEG";



export default function Publications() {
  return (
    <div className="pt-24 min-h-screen bg-white text-gray-900">

      {/* Page Header */}
      <header className="max-w-5xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Publications</h1>
        <p className="text-lg text-gray-600">
          Selected journal covers featuring the group’s research.
        </p>
      </header>

      {/* Covers Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Dummy images — replace with real ones or local assets */}
        <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
                <img src={cover1} alt="Journal Cover 1" className="w-full h-auto rounded shadow-sm" />
      </section>

      {/* Links */}
      <section className="max-w-4xl mx-auto px-6 mt-16 pb-24 text-lg space-y-4">
        <p className="font-medium">A full list of publications can be found at:</p>

        <a
          href="https://pureportal.strath.ac.uk/en/persons/nico-bruns/publications/"
          target="_blank"
          className="block text-blue-600 underline"
        >
          https://pureportal.strath.ac.uk/en/persons/nico-bruns/publications/
        </a>

        <a
          href="https://orcid.org/0000-0001-6199-9995"
          target="_blank"
          className="block text-blue-600 underline"
        >
          https://orcid.org/0000-0001-6199-9995
        </a>
      </section>
    </div>
  );
}
