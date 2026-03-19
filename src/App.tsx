import { Dog, Heart } from 'lucide-react';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1b4332', fontWeight: 'bold' }}>
          <Dog size={30} /> <span>ONG SJPA</span>
        </div>
        <button style={{ backgroundColor: '#ff9f1c', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '50px', fontWeight: 'bold' }}>DOAR</button>
      </nav>
      <header style={{ height: '60vh', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <h1>ONG SJPA - Proteção Animal</h1>
        <p>Acolhendo com amor em Juiz de Fora</p>
      </header>
    </div>
  );
}
export default App;