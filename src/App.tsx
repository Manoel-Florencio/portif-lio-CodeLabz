import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Palette,
  Settings,
  Smartphone,
  Rocket,
  Shield,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Globe,
  Zap,
  Target,
  Clock,
} from "lucide-react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-codelabz.png"
                alt="Logo CodeLabz"
                className="h-13 w-12"
              />
              <span className="text-xl font-bold">CodeLabz</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-cyan-400 transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-cyan-400 transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="hover:text-cyan-400 transition-colors"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-cyan-400 transition-colors"
              >
                Contato
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-cyan-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-cyan-400"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 hover:text-cyan-400"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block w-full text-left py-2 hover:text-cyan-400"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-cyan-400"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Transformamos ideias em{" "}
            <span className="text-cyan-400">presenças digitais</span> incríveis
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Na CodeLabz, elevamos o empreendedorismo de autônomos e pequenos
            negócios para o mundo digital.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            🚀 Quero impulsionar meu negócio!
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre a <span className="text-cyan-400">CodeLabz</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                A CodeLabz nasceu com um propósito: ajudar empreendedores a
                saírem do anonimato digital. Nossa missão é tornar a internet um
                espaço mais acessível, profissional e estratégico para todos que
                sonham grande — mesmo começando pequeno.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trabalhamos lado a lado com autônomos, lojistas, coaches,
                pequenos empresários, artesãos e freelancers que querem
                transformar o Instagram em um site, o boca a boca em vendas
                online e o sonho em realidade digital.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-full transition-all duration-300"
              >
                Fale com um especialista agora mesmo
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Compromisso",
                desc: "Entregamos resultados reais",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Clareza",
                desc: "Comunicação transparente",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Velocidade",
                desc: "Projetos ágeis e eficientes",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Criatividade",
                desc: "Soluções inovadoras",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-cyan-400">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas para levar seu negócio ao próximo
              nível digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Criação de Sites Profissionais",
                desc: "Sites modernos e profissionais que convertem visitantes em clientes",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Web Design Personalizado",
                desc: "Design único que reflete a identidade da sua marca",
              },
              {
                icon: <Settings className="h-8 w-8" />,
                title: "Automações com N8N e APIs",
                desc: "Automatize processos e integre sistemas para maior eficiência",
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: "Sites Responsivos",
                desc: "Perfeito funcionamento em qualquer dispositivo ou tela",
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                title: "Páginas de Vendas",
                desc: "Landing pages otimizadas para conversão e vendas",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Segurança e SEO",
                desc: "Sites seguros, rápidos e otimizados para motores de busca",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 group border border-gray-800 hover:border-cyan-400/50"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full p-3 w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Quero um site para minha empresa!
            </button>
          </div>
        </div>
      </section>

      {/* 4. Results Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Resultados e <span className="text-cyan-400">Impacto</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          {/* Numbers */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "50+", label: "Negócios no Digital" },
              { number: "300+", label: "Páginas Entregues" },
              { number: "98%", label: "Clientes Satisfeitos" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Maria Silva",
                business: "Loja de Artesanato",
                text: "Minha loja virtual aumentou as vendas em 300% após o trabalho da CodeLabz. Profissionais incríveis!",
                rating: 5,
              },
              {
                name: "João Santos",
                business: "Consultoria Empresarial",
                text: "Site profissional que trouxe credibilidade ao meu negócio. Recomendo a todos!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">
                    {testimonial.business}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Quero fazer parte dessa transformação
            </button>
          </div>
        </div>
      </section>

      {/* 5. Process Section */}
      <section id="process" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Como Funciona Nosso{" "}
              <span className="text-cyan-400">Processo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Diagnóstico Gratuito",
                desc: "Analisamos seu negócio e necessidades",
              },
              {
                number: "2",
                title: "Identidade Visual",
                desc: "Criamos wireframe e identidade visual",
              },
              {
                number: "3",
                title: "Desenvolvimento",
                desc: "Desenvolvimento rápido e personalizado",
              },
              {
                number: "4",
                title: "Aprovação",
                desc: "Revisão, aprovação e ajustes finais",
              },
              {
                number: "5",
                title: "Lançamento",
                desc: "Lançamento oficial com suporte",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                {index < 4 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-cyan-400" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Solicitar diagnóstico gratuito
            </button>
          </div>
        </div>
      </section>

      {/* 6. Educational Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Conteúdo <span className="text-cyan-400">Educativo</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "5 erros que estão te impedindo de vender online",
                desc: "Descubra os principais obstáculos que podem estar limitando o sucesso do seu negócio digital",
                image:
                  "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg",
              },
              {
                title: "Por que seu negócio precisa de um site em 2025?",
                desc: "Entenda a importância de ter presença digital profissional no mercado atual",
                image:
                  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{article.desc}</p>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                    Ler mais →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-cyan-400">Frequentes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto custa um site?",
                answer:
                  "O investimento varia de acordo com a complexidade do projeto. Oferecemos pacotes a partir de R$ 997 para sites básicos, com opções mais completas para e-commerce e sistemas personalizados.",
              },
              {
                question: "Em quanto tempo meu site fica pronto?",
                answer:
                  "Geralmente entregamos em 7 a 15 dias úteis, dependendo da complexidade. Sites mais simples podem ficar prontos em até 5 dias úteis.",
              },
              {
                question: "Não tenho logo, posso fazer mesmo assim?",
                answer:
                  "Claro! Criamos a identidade visual completa do seu negócio, incluindo logo, paleta de cores e elementos visuais únicos.",
              },
              {
                question: "O site vai aparecer no Google?",
                answer:
                  "Sim! Todos os nossos sites são otimizados para SEO, garantindo melhor visibilidade nos motores de busca desde o primeiro dia.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 text-cyan-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Form */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 to-black"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vamos Começar Seu <span className="text-cyan-400">Projeto</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Preencha o formulário e receba um orçamento personalizado
            </p>
          </div>

          <form className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Nome *</label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">E-mail *</label>
                <input
                  type="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">WhatsApp *</label>
                <input
                  type="tel"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">
                  Seu negócio *
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Área de atuação"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">
                O que você precisa? *
              </label>
              <textarea
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Descreva seu projeto ou necessidade..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Quero um site agora! 🚀
            </button>
          </form>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo-codelabz.png"
                  alt="Logo CodeLabz"
                  className="h-12 w-12"
                />
                <span className="text-xl font-bold">CodeLabz</span>
              </div>
              <p className="text-gray-400">
                Transformando ideias em presenças digitais incríveis.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">
                Links Rápidos
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Processo
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contato
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Serviços</h3>
              <div className="space-y-2 text-gray-400">
                <div>Sites Profissionais</div>
                <div>Web Design</div>
                <div>Automações</div>
                <div>SEO</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div>contato@codelabz.com.br</div>
                <div>(11) 99999-9999</div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://instagram.com/seuPerfil"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://github.com/seuPerfil"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 text-2xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/seuPerfil"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CodeLabz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
