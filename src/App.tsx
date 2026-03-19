import React from 'react';
import { Dog, Heart, Calendar, Shield, MapPin, Instagram, Facebook, Mail, Camera, Users, Award } from 'lucide-react';

function App() {
  return (
    <div style={{ fontFamily: '"Inter", sans-serif', color: '#333', margin: 0, padding: 0 }}>
      
      {/* 1. NAVEGAÇÃO */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%', backgroundColor: 'white', position: 'fixed', width: '100%', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1b4332', fontWeight: 'bold', fontSize: '1.4rem' }}>
          <Dog size={32} /> <span>ONG SJPA</span>
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#sobre" style={{ textDecoration: 'none', color: '#444', fontWeight: '500' }}>Sobre</a>
          <a href="#processos" style={{ textDecoration: 'none', color: '#444', fontWeight: '500' }}>Processos</a>
          <a href="#galeria" style={{ textDecoration: 'none', color: '#444', fontWeight: '500' }}>Pets</a>
          <button style={{ backgroundColor: '#ff9f1c', color: 'white', border: 'none', padding: '12px 28px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
            DOAR AGORA
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header style={{ height: '85vh', marginTop: '60px', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '15px', fontWeight: '800' }}>Proteção aos Animais</h1>
        <p style={{ fontSize: '1.4rem', maxWidth: '700px', lineHeight: '1.6' }}>Sociedade Juizforense de Proteção aos Animais: Transformando abandono em finais felizes desde 1990.</p>
        <a href="#sobre" style={{ marginTop: '30px', backgroundColor: 'white', color: '#1b4332', padding: '15px 40px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>CONHECER NOSSA HISTÓRIA</a>
      </header>

      {/* 3. SOBRE A ONG */}
      <section id="sobre" style={{ padding: '100px 10%', backgroundColor: '#f9f9f9' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Heart color="#e63946" size={50} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontSize: '2.5rem', color: '#1b4332', marginBottom: '20px' }}>Quem Somos</h2>
          <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#666' }}>
            A SJPA é uma entidade sem fins lucrativos localizada em Juiz de Fora - MG. Nossa missão é acolher animais vítimas de maus-tratos e abandono, oferecendo tratamento veterinário, carinho e a chance de encontrar um lar responsável. Atualmente abrigamos mais de 200 animais que aguardam por você.
          </p>
        </div>
      </section>

      {/* 4. PROCESSOS (CARDS) */}
      <section id="processos" style={{ padding: '100px 5%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1b4332', marginBottom: '50px' }}>Como Funcionamos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[
            { icon: <Shield size={40} />, title: "Resgate Seguro", text: "Equipe preparada para resgates em situações de risco e abandono." },
            { icon: <Calendar size={40} />, title: "Reabilitação", text: "Cuidados veterinários diários e socialização para preparar o pet." },
            { icon: <Users size={40} />, title: "Adoção", text: "Entrevistas rigorosas para garantir que o pet vá para um lar seguro." },
            { icon: <Award size={40} />, title: "Pós-Adoção", text: "Acompanhamento constante para auxiliar a nova família." }
          ].map((item, index) => (
            <div key={index} style={{ padding: '40px', backgroundColor: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center', borderBottom: '5px solid #2d6a4f' }}>
              <div style={{ color: '#2d6a4f', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ marginBottom: '15px' }}>{item.title}</h3>
              <p style={{ color: '#777', lineHeight: '1.6' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALERIA DE PETS */}
      <section id="galeria" style={{ padding: '80px 5%', backgroundColor: '#1b4332', color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Camera size={40} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontSize: '2.5rem' }}>Eles Esperam por Você</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800",
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800",
            "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=800"
          ].map((img, index) => (
            <div key={index} style={{ borderRadius: '15px', overflow: 'hidden', height: '300px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
              <img src={img} alt="Pet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer style={{ padding: '80px 5%', backgroundColor: '#f4f4f4', borderTop: '1px solid #ddd' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1b4332', fontWeight: 'bold', marginBottom: '20px' }}>
              <Dog size={24} /> <span>ONG SJPA</span>
            </div>
            <p style={{ color: '#777' }}>Dando voz aos que não podem falar desde 1990 em Juiz de Fora.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Contato</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#555' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={18} /> Juiz de Fora, MG</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={18} /> contato@ongsjpa.org</span>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '20px' }}>Siga-nos</h4>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Instagram style={{ cursor: 'pointer', color: '#1b4332' }} />
              <Facebook style={{ cursor: 'pointer', color: '#1b4332' }} />
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', color: '#999', fontSize: '0.9rem' }}>
          &copy; 2026 Humberto - Projeto Institucional ONG SJPA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;