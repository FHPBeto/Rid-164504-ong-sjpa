import { Dog, Heart, Image as ImageIcon, Info, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* HEADER / NAVEGAÇÃO */}
      <nav style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '20px 50px', 
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2d6a4f', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <Dog size={32} />
          <span>ONG SJPA</span>
        </div>
        
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#sobre" style={{ textDecoration: 'none', color: '#2d6a4f' }}>Sobre</a>
          <a href="#processos" style={{ textDecoration: 'none', color: '#2d6a4f' }}>Processos</a>
          <a href="#galeria" style={{ textDecoration: 'none', color: '#2d6a4f' }}>Galeria</a>
          <button style={{
            backgroundColor: '#ff9f1c',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '50px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Heart size={18} fill="white" /> DOAR
          </button>
        </div>
      </nav>

      {/* HERO SECTION (BOAS-VINDAS) */}
      <header style={{
        height: '80vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Proteção aos Animais e Meio Ambiente</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
          Damos voz a quem não pode falar. Junte-se à Sociedade Juizforense de Proteção aos Animais.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button style={{ padding: '15px 30px', fontSize: '1.1rem', borderRadius: '8px', border: 'none', backgroundColor: '#2d6a4f', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            Conheça nossa história
          </button>
          <button style={{ padding: '15px 30px', fontSize: '1.1rem', borderRadius: '8px', border: '2px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
            Quero adotar
          </button>
        </div>
      </header>

      {/* {/* SEÇÃO: SOBRE A ONG */}
      <section id="sobre" style={{ padding: '80px 50px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000" 
              alt="Pets felizes" 
              style={{ width: '100%', borderRadius: '20px', boxShadow: '20px 20px 0px #d8f3dc' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: '#2d6a4f', fontSize: '2.5rem', marginBottom: '20px' }}>Sobre a SJPA</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#444' }}>
              A Sociedade Juizforense de Proteção aos Animais e ao Meio Ambiente (SJPA) nasceu da união de voluntários 
              dedicados a transformar a realidade de animais abandonados em Juiz de Fora. 
              <br /><br />
              Nossa missão é resgatar, reabilitar e encontrar lares amorosos para cães e gatos, além de promover a 
              conscientização sobre a posse responsável e a preservação do meio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO: PROCESSOS DE RECEBIMENTO */}
      <section id="processos" style={{ padding: '80px 50px', backgroundColor: '#f0fdf4' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#2d6a4f', fontSize: '2.5rem', marginBottom: '50px' }}>Como funciona nosso acolhimento</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: '#d8f3dc', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', color: '#2d6a4f' }}>
                <Info size={30} />
              </div>
              <h3 style={{ marginBottom: '15px' }}>1. Triagem</h3>
              <p style={{ color: '#666' }}>Avaliamos a urgência do resgate e a disponibilidade de espaço em nosso abrigo ou lares temporários.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: '#d8f3dc', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', color: '#2d6a4f' }}>
                <Heart size={30} />
              </div>
              <h3 style={{ marginBottom: '15px' }}>2. Cuidados</h3>
              <p style={{ color: '#666' }}>O pet passa por consulta veterinária, vacinação, vermifugação e castração obrigatória.</p>
            </div>

            <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ backgroundColor: '#d8f3dc', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', color: '#2d6a4f' }}>
                <ImageIcon size={30} />
              </div>
              <h3 style={{ marginBottom: '15px' }}>3. Divulgação</h3>
              <p style={{ color: '#666' }}>Fotografamos o pet e publicamos em nossa galeria para que possíveis adotantes possam conhecê-lo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* SEÇÃO: GALERIA DE FOTOS */}
      <section id="galeria" style={{ padding: '80px 50px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#2d6a4f', fontSize: '2.5rem', marginBottom: '50px' }}>Nossos Pets</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '20px' 
          }}>
            {/* Foto 1 */}
            <div style={{ overflow: 'hidden', borderRadius: '15px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Foto 2 */}
            <div style={{ overflow: 'hidden', borderRadius: '15px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            {/* Foto 3 */}
            <div style={{ overflow: 'hidden', borderRadius: '15px', height: '300px' }}>
              <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer style={{ backgroundColor: '#1b4332', color: 'white', padding: '50px', textAlign: 'center' }}>
        <Dog size={40} style={{ marginBottom: '20px' }} />
        <p>© 2024 ONG SJPA - Sociedade Juizforense de Proteção aos Animais</p>
        <p style={{ opacity: 0.7 }}>Desenvolvido por Humberto - Focando no bem-estar animal</p>
      </footer>
    </div>
  );
}

export default App;