export default function AdsForSuggestionSection() {
  return (
    <section className="container mx-auto mt-12 bg-white p-6 rounded-lg shadow-md py-10 mb-10">
      <h2 className="text-2xl font-bold text-gray-800">Apartments, Villas and more in Central Delhi</h2>
      
      <div className="mt-6 space-y-6">
        {/* User Card 1 */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <div className="rounded-full bg-gray-300 w-12 h-12 flex items-center justify-center text-lg text-white">
            R
          </div>
          <div>
            <p className="font-bold">Ramshad</p>
            <p className="text-gray-500">Dealer</p>
          </div>
        </div>
        
        {/* User Card 2 */}
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
          <div className="rounded-full bg-gray-300 w-12 h-12 flex items-center justify-center text-lg text-white">
            A
          </div>
          <div>
            <p className="font-bold">Anfas</p>
            <p className="text-gray-500">Dealer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
