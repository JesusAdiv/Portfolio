import React, { useState } from "react";
import { Modal, Button, Row, Col, Nav } from "react-bootstrap";
import {
  FaGooglePlay,
  FaDumbbell,
  FaQrcode,
  FaBrain,
  FaSyncAlt,
  FaShieldAlt,
  FaImages,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaExpand,
  FaEye,
  FaEyeSlash,
  FaTimes
} from "react-icons/fa";
import {
  SiAngular,
  SiFlutter,
  SiNodedotjs,
  SiMongodb,
  SiAmazonaws,
  SiOpenai,
  SiWebassembly,
  SiDart,
  SiTypescript
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

// Asset imports
import coverWeb from "../../Assets/MyProyects/AllFitness/Portadaweb.png";
import coverPlaystore from "../../Assets/MyProyects/AllFitness/CoverPlaystore.webp";
import funciones2 from "../../Assets/MyProyects/AllFitness/funciones 2.jpeg";
import funcionesPlaystore from "../../Assets/MyProyects/AllFitness/funciones Playstore.png";
import funcionesPlaystore2 from "../../Assets/MyProyects/AllFitness/funciones Playstore2.png";
import funcionesPlaystore3 from "../../Assets/MyProyects/AllFitness/funciones Playstore3.png";
import image1 from "../../Assets/MyProyects/AllFitness/image1.jpeg";
import image2 from "../../Assets/MyProyects/AllFitness/image2.jpeg";
import image3 from "../../Assets/MyProyects/AllFitness/image3.jpeg";
import image4 from "../../Assets/MyProyects/AllFitness/image4.jpeg";
import image5 from "../../Assets/MyProyects/AllFitness/image5.jpeg";

const galleryItems = [
  {
    src: coverWeb,
    title: "Plataforma Web SaaS — Dashboard Administrativo",
    badge: "Web SaaS • Angular 13",
    description:
      "Panel de control para administradores y entrenadores con métricas de aforo en tiempo real, suscripciones, ingresos y planificador de entrenamientos."
  },
  {
    src: coverPlaystore,
    title: "AllFitness Mobile App — Portada Google Play",
    badge: "Mobile App • Flutter",
    description:
      "Aplicación móvil nativa multiplataforma diseñada para el atleta, con seguimiento dinámico de series, analíticas y funcionamiento offline-first."
  },
  {
    src: funcionesPlaystore,
    title: "Live Workout Tracker & Detección de 1RM",
    badge: "Workout Tracking",
    description:
      "Asistente durante la sesión: registro instantáneo de series, peso y repeticiones, temporizadores inteligentes y detección automática de récords personales."
  },
  {
    src: funcionesPlaystore2,
    title: "Mapa Muscular Anatómico Interactivo (Heatmap)",
    badge: "Innovación UI • Open Source",
    description:
      "Visualización anatómica frontal y dorsal con mapa de calor según la activación muscular de la rutina. Desarrollado mediante fork propio de la librería open source muscle_selector."
  },
  {
    src: funcionesPlaystore3,
    title: "Analíticas Avanzadas, Radar y Métricas Corporales",
    badge: "Body Analytics",
    description:
      "Gráficas interactivas de evolución de fuerza, radar de balance muscular y seguimiento antropométrico (peso, porcentaje graso y medidas corporales)."
  },
  {
    src: funciones2,
    title: "Arquitectura Integral del Ecosistema AllFitness",
    badge: "Ecosistema Integral",
    description:
      "Conexión unificada entre dueños de centros fitness, entrenadores y socios a través de infraestructura cloud y sincronización de datos."
  },
  {
    src: image1,
    title: "Control Antropométrico y Composición Corporal",
    badge: "Antropometría",
    description:
      "Seguimiento visual del progreso físico del atleta con registro fotográfico y medidas de circunferencias musculares."
  },
  {
    src: image2,
    title: "Ejecución Guiada de Entrenamiento",
    badge: "UX / Atleta",
    description:
      "Experiencia fluida y reactiva diseñada para registrar cargas con una sola mano durante el entrenamiento en sala."
  },
  {
    src: image3,
    title: "Videoteca de Técnica en Local",
    badge: "Multimedia Local",
    description:
      "Guías en video integradas para consulta de técnica correcta al instante, sin consumir datos móviles ni sufrir retrasos por buffering."
  },
  {
    src: image4,
    title: "Planificador de Rutinas & Asistente IA",
    badge: "Rutinas & OpenAI",
    description:
      "Creación estructurada de rutinas y generación asistida por inteligencia artificial en segundos adaptada al equipamiento del gimnasio."
  },
  {
    src: image5,
    title: "Personalización Extrema & Modo Oscuro",
    badge: "UI / UX",
    description:
      "Soporte nativo para modo oscuro/claro y múltiples esquemas de color reactivos administrados con Riverpod."
  }
];

function AllFitnessModal({ show, onHide, initialFullscreen = false }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showOverlayInfo, setShowOverlayInfo] = useState(false);

  React.useEffect(() => {
    if (initialFullscreen) {
      setShowFullscreen(true);
    }
  }, [initialFullscreen, show]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const currentItem = galleryItems[activeSlide];

  return (
    <>
      <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      scrollable
      dialogClassName="allfitness-modal-dialog"
      contentClassName="allfitness-modal-content"
    >
      {/* Header */}
      <Modal.Header className="allfitness-modal-header border-0">
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center flex-wrap gap-2 mb-1">
            <span className="allfitness-status-badge">
              <FaDumbbell className="me-1" /> CASO DE ESTUDIO DESTACADO
            </span>
            <span className="allfitness-tag-badge">SaaS Multi-tenant</span>
            <span className="allfitness-tag-badge">Cross-Platform App</span>
            <span className="allfitness-tag-badge">AI Powered</span>
          </div>
          <h2 className="allfitness-modal-title mb-0">
            AllFitness — <span className="purple">Ecosistema Digital Integral</span>
          </h2>
          <p className="allfitness-modal-subtitle text-muted mb-0">
            Plataforma SaaS para gimnasios, entrenadores y atletas (Web + Mobile + Cloud Backend con IA)
          </p>
        </div>
        <button
          type="button"
          className="allfitness-close-btn"
          onClick={onHide}
          aria-label="Cerrar modal"
        >
          <FaTimes />
        </button>
      </Modal.Header>

      {/* Body */}
      <Modal.Body className="allfitness-modal-body p-3 p-md-4">
        {/* Quick Actions & Links */}
        <div className="allfitness-actions-bar mb-4 p-3 rounded d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="text-white-50 small">Explorar enlaces directos:</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant="outline-light"
              className="allfitness-btn-link"
              href="https://www.allfitness.com.mx/#/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CgWebsite className="me-1" /> Visitar Plataforma Web
            </Button>
            <Button
              variant="outline-light"
              className="allfitness-btn-link"
              href="https://play.google.com/store/apps/details?id=com.kyndrasoft.allfitness&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay className="me-1" /> Ver en Google Play
            </Button>
          </div>
        </div>

        {/* Presentation & Gallery Showcase */}
        <div className="allfitness-gallery-section mb-4">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
            <h4 className="text-white m-0 d-flex align-items-center gap-2">
              <FaImages className="purple" /> Galería de Capturas
            </h4>
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <Button
                variant="outline-light"
                size="sm"
                className="allfitness-btn-toggle-info"
                onClick={() => setShowOverlayInfo(!showOverlayInfo)}
                title={showOverlayInfo ? "Ocultar descripción sobre la imagen" : "Mostrar descripción sobre la imagen"}
              >
                {showOverlayInfo ? <FaEyeSlash className="me-1" /> : <FaEye className="me-1" />}
                {showOverlayInfo ? "Ocultar Info" : "Ver con Info"}
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="allfitness-btn-fullscreen"
                onClick={() => setShowFullscreen(true)}
                title="Abrir imagen en pantalla completa sin información"
              >
                <FaExpand className="me-1" /> Ver Completa (Sin Info)
              </Button>
              <span className="allfitness-slide-counter">
                {activeSlide + 1} / {galleryItems.length}
              </span>
            </div>
          </div>

          <div className="allfitness-carousel-container position-relative">
            {/* Main Image Display */}
            <div
              className="allfitness-image-viewport"
              onClick={() => setShowFullscreen(true)}
              style={{ cursor: "zoom-in" }}
              title="Haz clic para ver la imagen en tamaño completo sin información"
            >
              <img
                src={currentItem.src}
                alt={currentItem.title}
                className="allfitness-featured-img img-fluid"
              />
              {showOverlayInfo ? (
                <div className="allfitness-img-overlay">
                  <span className="allfitness-img-badge">{currentItem.badge}</span>
                  <h5 className="text-white mb-1">{currentItem.title}</h5>
                  <p className="text-white-50 small mb-0">{currentItem.description}</p>
                </div>
              ) : (
                <div className="allfitness-clean-hint">
                  <FaExpand className="me-1" /> Clic para ampliar en tamaño completo (sin texto)
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <button
              className="allfitness-nav-btn allfitness-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Slide anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              className="allfitness-nav-btn allfitness-next"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Slide siguiente"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Thumbnails strip */}
          <div className="allfitness-thumbnails-strip mt-3 d-flex gap-2 overflow-auto pb-2">
            {galleryItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className={`allfitness-thumb-btn ${idx === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
                title={item.title}
              >
                <img src={item.src} alt={item.title} className="allfitness-thumb-img" />
              </button>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills Bar */}
        <div className="allfitness-tech-bar mb-4 p-3 rounded">
          <div className="d-flex flex-wrap align-items-center gap-2 justify-content-center">
            <span className="allfitness-tech-pill">
              <SiAngular className="me-1 text-danger" /> Angular 13
            </span>
            <span className="allfitness-tech-pill">
              <SiTypescript className="me-1 text-primary" /> TypeScript
            </span>
            <span className="allfitness-tech-pill">
              <SiFlutter className="me-1 text-info" /> Flutter
            </span>
            <span className="allfitness-tech-pill">
              <SiDart className="me-1 text-primary" /> Dart
            </span>
            <span className="allfitness-tech-pill">
              <SiNodedotjs className="me-1 text-success" /> Node.js & Express
            </span>
            <span className="allfitness-tech-pill">
              <SiMongodb className="me-1 text-success" /> MongoDB
            </span>
            <span className="allfitness-tech-pill">
              <SiOpenai className="me-1 text-light" /> OpenAI GPT API
            </span>
            <span className="allfitness-tech-pill">
              <SiWebassembly className="me-1 text-warning" /> WebAssembly (WASM QR)
            </span>
            <span className="allfitness-tech-pill">
              <SiAmazonaws className="me-1 text-warning" /> AWS S3
            </span>
          </div>
        </div>

        {/* Deep Dive Tabs */}
        <div className="allfitness-tabs-wrapper mb-4">
          <Nav variant="pills" className="allfitness-nav-pills mb-3 justify-content-center flex-wrap gap-2">
            <Nav.Item>
              <Nav.Link
                active={activeTab === "overview"}
                onClick={() => setActiveTab("overview")}
                className="allfitness-tab-link"
              >
                🌟 Visión & Ecosistema
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === "web"}
                onClick={() => setActiveTab("web")}
                className="allfitness-tab-link"
              >
                🌐 Web SaaS (Angular)
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === "mobile"}
                onClick={() => setActiveTab("mobile")}
                className="allfitness-tab-link"
              >
                📱 App Móvil (Flutter)
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === "backend"}
                onClick={() => setActiveTab("backend")}
                className="allfitness-tab-link"
              >
                ⚙️ Backend & Cloud
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                active={activeTab === "challenges"}
                onClick={() => setActiveTab("challenges")}
                className="allfitness-tab-link"
              >
                🧠 Retos de Ingeniería
              </Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tab Content */}
          <div className="allfitness-tab-content p-3 p-md-4 rounded">
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="allfitness-tab-pane">
                <h4 className="text-white mb-3">
                  Revolución Digital para Centros de Fitness y Atletas
                </h4>
                <p className="text-white-50 leading-relaxed">
                  <strong>AllFitness</strong> nació para resolver la desconexión existente entre la
                  administración de centros de fitness y la experiencia real de entrenamiento del
                  socio. Tradicionalmente, los gimnasios sufren por control de acceso rudimentario,
                  planes impresos en papel que se extravían y falta de métricas de retención,
                  mientras que los atletas no pueden medir con rigor su sobrecarga progresiva.
                </p>

                {/* Problem vs Solution Grid */}
                <h5 className="purple mt-4 mb-3">💡 Problema vs. Solución AllFitness</h5>
                <Row className="g-3">
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <div className="text-danger fw-bold mb-2">❌ En Gimnasios Tradicionales</div>
                      <ul className="text-white-50 small mb-0 ps-3">
                        <li className="mb-2">
                          <strong>Rutinas en papel o notas estáticas:</strong> Se pierden con
                          facilidad y no permiten medir la sobrecarga progresiva ni el volumen real.
                        </li>
                        <li className="mb-2">
                          <strong>Pérdida de tiempo para los coaches:</strong> Horas invertidas
                          creando rutinas manuales, repetitivas y genéricas.
                        </li>
                        <li className="mb-2">
                          <strong>Falta de analítica gerencial:</strong> Desconocimiento de aforo en
                          horas pico, retención de socios y vencimientos de suscripción.
                        </li>
                        <li>
                          <strong>Hardware costoso de acceso:</strong> Torniquetes y lectores caros
                          difíciles de mantener e integrar.
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100 highlight-border">
                      <div className="purple fw-bold mb-2">✅ La Solución AllFitness</div>
                      <ul className="text-white-50 small mb-0 ps-3">
                        <li className="mb-2">
                          <strong>App Móvil con Live Tracker:</strong> Registro ágil en tiempo real de
                          series, peso, RPE, descansos y cálculo automático de 1RM.
                        </li>
                        <li className="mb-2">
                          <strong>Generador con IA (OpenAI):</strong> Creación inteligente de
                          splits balanceados y rutinas en segundos según el equipo disponible.
                        </li>
                        <li className="mb-2">
                          <strong>Dashboard SaaS en tiempo real:</strong> Analítica visual de
                          ingresos, volumen de asistencias y control de membresías.
                        </li>
                        <li>
                          <strong>Acceso QR con WebAssembly:</strong> Escaneo veloz en navegador
                          usando cámaras estándar sin necesidad de hardware dedicado.
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>

                {/* Ecosystem Triad */}
                <h5 className="purple mt-4 mb-3">🏛️ Tres Pilares del Ecosistema</h5>
                <Row className="g-3">
                  <Col md={4}>
                    <div className="allfitness-feature-pill p-3 h-100 text-center">
                      <div className="fs-3 mb-2">🌐</div>
                      <h6 className="text-white">Panel Web SaaS</h6>
                      <p className="text-white-50 small mb-0">
                        Angular 13, lector QR WASM, gestión de socios, agenda FullCalendar y
                        dashboard gerencial en tiempo real.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="allfitness-feature-pill p-3 h-100 text-center">
                      <div className="fs-3 mb-2">📱</div>
                      <h6 className="text-white">App Móvil Atleta</h6>
                      <p className="text-white-50 small mb-0">
                        Flutter & Riverpod con arquitectura offline-first, cálculo de 1RM, heatmap
                        muscular interactivo y videos locales.
                      </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="allfitness-feature-pill p-3 h-100 text-center">
                      <div className="fs-3 mb-2">⚙️</div>
                      <h6 className="text-white">Backend Cloud & IA</h6>
                      <p className="text-white-50 small mb-0">
                        Node.js multi-tenant, MongoDB con 22+ esquemas, motor OpenAI GPT para
                        rutinas, AWS S3 y seguridad JWT/RBAC.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            {/* TAB 2: WEB SAAS */}
            {activeTab === "web" && (
              <div className="allfitness-tab-pane">
                <h4 className="text-white mb-2">
                  Panel Administrativo SaaS & Dashboard para Gimnasios
                </h4>
                <p className="text-white-50">
                  Desarrollado en <strong>Angular 13</strong> con TypeScript, RxJS y arquitectura
                  modular basada en Feature Modules y Route Guards para gestión multi-sucursal.
                </p>

                <Row className="g-3 mt-1">
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <FaQrcode className="purple" /> Control de Acceso con QR (WebAssembly)
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Credenciales digitales dinámicas asociadas al socio. Lector QR de alta
                        velocidad ejecutado en el navegador usando <code>ngx-scanner-qrcode</code> y
                        aceleración <strong>WebAssembly (WASM)</strong>, validando membresías al
                        vuelo sin depender de hardware de control de acceso costoso.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <FaBrain className="purple" /> Diseñador & Generador de Rutinas con IA
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Integración con la API de <strong>OpenAI</strong> para estructurar planes
                        deportivos hiperpersonalizados. Los entrenadores pueden generar rutinas
                        automáticas según grupo muscular, objetivos y máquinas disponibles, o
                        diseñarlas manualmente con el modo interactivo <em>"Do Routine"</em>.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <FaShieldAlt className="purple" /> Arquitectura Multi-gimnasio (Multi-tenant)
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Enrutamiento dinámico parametrizado por gimnasio (<code>/login/:id</code>),
                        protegido por Guards reactivos (<code>GymExistGuard</code>) que aseguran
                        el aislamiento estricto de marca, socios y catálogos de cada centro deportivo.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <span className="purple">📊</span> Métricas Gerenciales & Agenda
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Dashboards interactivos construidos con <strong>Chart.js</strong> para
                        monitorear ingresos y aforos pico. Integración de{" "}
                        <strong>FullCalendar v6</strong> para sincronización de citas, clases grupales
                        y disponibilidad de entrenadores.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            {/* TAB 3: MOBILE APP */}
            {activeTab === "mobile" && (
              <div className="allfitness-tab-pane">
                <h4 className="text-white mb-2">
                  Aplicación Móvil Cross-Platform para Atletas
                </h4>
                <p className="text-white-50">
                  Creada con <strong>Flutter & Dart</strong> bajo una arquitectura reactiva gobernada
                  por <strong>Riverpod</strong> y diseñada bajo el principio <em>Offline-First</em> (+370 commits).
                </p>

                <Row className="g-3 mt-1">
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <FaSyncAlt className="purple" /> Arquitectura Offline-First Resiliente
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Los sótanos de gimnasios suelen tener nula señal. El módulo{" "}
                        <code>SincronizadorOffline</code> almacena cada serie y progreso en SQLite /
                        SharedPreferences en local con timestamps, despachando la cola de
                        sincronización automáticamente en segundo plano cuando la red se recupera.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <FaDumbbell className="purple" /> Detección de Max Lift & Récords (1RM)
                      </h6>
                      <p className="text-white-50 small mb-0">
                        El algoritmo <code>MaxLiftHelper</code> audita cada serie completada contra el
                        histórico del atleta para notificar nuevos récords personales (1RM / PR) en
                        vivo, motivando al usuario y registrando curvas de sobrecarga progresiva.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <span className="purple">🗺️</span> Heatmap Anatómico (Contribución Open Source)
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Extensión y fork propio del paquete <code>muscle_selector</code> en GitHub
                        para renderizar mapas de calor muscular interactivos (frontal y dorsal) que
                        reflejan el volumen de activación muscular del split seleccionado.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="allfitness-card-box p-3 h-100">
                      <h6 className="text-white d-flex align-items-center gap-2">
                        <span className="purple">🎥</span> Videoteca en Local & Background Tasks
                      </h6>
                      <p className="text-white-50 small mb-0">
                        Videos demostrativos de técnica de ejercicios precargados en local para
                        reproducción sin buffering. Uso de <code>WorkManager</code> para tareas pesadas
                        en isolates de Dart y recordatorios locales con persistencia de zona horaria.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}

            {/* TAB 4: BACKEND */}
            {activeTab === "backend" && (
              <div className="allfitness-tab-pane">
                <h4 className="text-white mb-2">
                  Backend Cloud, Microservicios & Motor de IA
                </h4>
                <p className="text-white-50">
                  Construido sobre <strong>Node.js y Express</strong> con base de datos NoSQL{" "}
                  <strong>MongoDB (Mongoose)</strong>, almacenamiento cloud en{" "}
                  <strong>AWS S3</strong> y autenticación JWT con aislamiento multi-inquilino.
                </p>

                <div className="allfitness-card-box p-3 mb-3">
                  <h6 className="purple mb-2">🛡️ Aislamiento Multi-inquilino (Multi-tenancy)</h6>
                  <p className="text-white-50 small mb-0">
                    Garantiza privacidad total entre gimnasios competidores al inyectar el contexto{" "}
                    <code>gymId</code> en el token JWT. Middlewares especializados validan y filtran
                    todas las consultas a nivel de documento para evitar cualquier fuga de datos.
                  </p>
                </div>

                <div className="allfitness-card-box p-3 mb-3">
                  <h6 className="purple mb-2">🤖 Generación Determinista de Rutinas con OpenAI</h6>
                  <p className="text-white-50 small mb-0">
                    Prompt engineering avanzado que inyecta catálogos cerrados de equipamiento y
                    esquemas JSON rígidos, asegurando que las respuestas de la IA se conviertan
                    directamente en entidades válidas de MongoDB sin alucinaciones de ejercicios.
                  </p>
                </div>

                <div className="allfitness-card-box p-3">
                  <h6 className="purple mb-2">☁️ Infraestructura Cloud & Media en AWS S3</h6>
                  <p className="text-white-50 small mb-0">
                    Almacenamiento de avatares, fotos de progreso físico y videos explicativos en
                    buckets optimizados de Amazon Web Services S3. Procesamiento en producción con PM2,
                    registro correlacionado con <code>requestId</code> y hashing seguro con Bcrypt.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: CHALLENGES */}
            {activeTab === "challenges" && (
              <div className="allfitness-tab-pane">
                <h4 className="text-white mb-3">
                  Retos Técnicos Resueltos y Soluciones de Ingeniería
                </h4>

                <div className="allfitness-challenge-item mb-3 p-3 rounded">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="allfitness-challenge-badge">Reto 1</span>
                    <h6 className="text-white m-0">
                      Pérdida de conectividad dentro de las salas de gimnasio
                    </h6>
                  </div>
                  <p className="text-white-50 small mb-1">
                    <strong>Problema:</strong> En sótanos y áreas cerradas de gimnasios suele perderse
                    la señal móvil, arriesgando la pérdida de datos y frustrando al atleta durante su
                    sesión.
                  </p>
                  <p className="text-light small mb-0">
                    <FaCheckCircle className="text-success me-1" />
                    <strong>Solución:</strong> Se diseñó el motor <code>SincronizadorOffline</code> con
                    cola local persistente en SQLite. Cada serie se registra con timestamp y al
                    detectar red se realiza una sincronización idempotente con tolerancia a
                    reintentos.
                  </p>
                </div>

                <div className="allfitness-challenge-item mb-3 p-3 rounded">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="allfitness-challenge-badge">Reto 2</span>
                    <h6 className="text-white m-0">
                      Visualización anatómica del calor muscular en Flutter
                    </h6>
                  </div>
                  <p className="text-white-50 small mb-1">
                    <strong>Problema:</strong> Los paquetes existentes solo permitían selecciones de
                    color estáticas monocromáticas sin reflejar la intensidad o fatiga muscular.
                  </p>
                  <p className="text-light small mb-0">
                    <FaCheckCircle className="text-success me-1" />
                    <strong>Solución:</strong> Forkeé el paquete open source <code>muscle_selector</code>{" "}
                    en GitHub (<code>JesusAdiv/muscle_selector</code>), añadiendo compatibilidad para
                    paletas cromáticas dinámicas según el volumen de series por grupo muscular.
                  </p>
                </div>

                <div className="allfitness-challenge-item p-3 rounded">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <span className="allfitness-challenge-badge">Reto 3</span>
                    <h6 className="text-white m-0">
                      Escaneo de códigos QR en navegador a 60 FPS sin hardware dedicado
                    </h6>
                  </div>
                  <p className="text-white-50 small mb-1">
                    <strong>Problema:</strong> El procesamiento de cuadros de video en JavaScript
                    tradicional saturaba la CPU de la computadora de recepción del gimnasio.
                  </p>
                  <p className="text-light small mb-0">
                    <FaCheckCircle className="text-success me-1" />
                    <strong>Solución:</strong> Implementación de decodificación acelerada por{" "}
                    <strong>WebAssembly (WASM)</strong>, permitiendo escanear credenciales QR al instante
                    a través de cualquier webcam estándar con cero retraso en la interfaz.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal.Body>

      {/* Footer */}
      <Modal.Footer className="allfitness-modal-footer border-0 d-flex flex-wrap justify-content-between align-items-center p-3">
        <div className="d-flex align-items-center gap-2 text-white-50 small">
          <span>Diseñado y construido con arquitectura escalable de producción</span>
        </div>
        <div className="d-flex gap-2">
          <Button
            variant="primary"
            className="allfitness-btn-primary"
            href="https://www.allfitness.com.mx/#/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CgWebsite className="me-1" /> Ir al Sitio Web
          </Button>
          <Button
            variant="secondary"
            className="allfitness-btn-close"
            onClick={onHide}
          >
            Cerrar
          </Button>
        </div>
      </Modal.Footer>
    </Modal>

    {/* Lightbox Modal de Pantalla Completa (100% Limpio, Cero Info) */}
    <Modal
      show={showFullscreen}
      onHide={() => setShowFullscreen(false)}
      centered
      dialogClassName="allfitness-lightbox-dialog"
      contentClassName="allfitness-lightbox-content"
    >
      <div className="allfitness-lightbox-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <span className="allfitness-slide-counter">
            {activeSlide + 1} / {galleryItems.length}
          </span>
          <span className="text-white-50 small">Vista Completa (Sin Información)</span>
        </div>
        <button
          type="button"
          className="allfitness-close-btn position-static"
          onClick={() => setShowFullscreen(false)}
          aria-label="Cerrar vista completa"
        >
          <FaTimes />
        </button>
      </div>

      <div className="allfitness-lightbox-body position-relative d-flex align-items-center justify-content-center">
        <img
          src={currentItem.src}
          alt={currentItem.title}
          className="allfitness-lightbox-img"
        />

        {/* Navigation Controls */}
        <button
          className="allfitness-nav-btn allfitness-prev"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Slide anterior"
        >
          <FaChevronLeft />
        </button>
        <button
          className="allfitness-nav-btn allfitness-next"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Slide siguiente"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Thumbnail Selector at Bottom */}
      <div className="allfitness-lightbox-footer p-2 d-flex justify-content-center">
        <div className="allfitness-thumbnails-strip d-flex gap-2 overflow-auto">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className={`allfitness-thumb-btn ${idx === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(idx)}
              title={item.title}
            >
              <img src={item.src} alt={item.title} className="allfitness-thumb-img" />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  </>
  );
}

export default AllFitnessModal;
