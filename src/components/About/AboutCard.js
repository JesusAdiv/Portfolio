import React from "react";
import Card from "react-bootstrap/Card";
import { FaCheckCircle, FaBookReader, FaGlobeAmericas, FaDumbbell } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view h-100 p-2">
      <Card.Body className="text-start d-flex flex-column justify-content-between">
        <div>
          <span className="pitch-badge mb-3 d-inline-block">SOBRE MÍ • PERFIL INTEGRAL</span>
          <h3 className="text-white fw-bold mb-3">
            Ingeniero en Ciencias de la Computación enfocado en crear software Web, Móvil, soluciones con IA y sistemas de datos de alto impacto.
          </h3>

          <p className="text-white-50 mb-3" style={{ lineHeight: "1.7", fontSize: "0.96rem" }}>
            ¡Hola! Soy <strong className="text-white">Jesús Adiv Barroso Manilla</strong>. Cuento con doble formación académica en el área tecnológica: soy egresado de{" "}
            <strong className="text-info">Ingeniería en Ciencias de la Computación por la Benemérita Universidad Autónoma de Puebla (BUAP)</strong> y poseo el{" "}
            <strong className="text-success">Título Técnico en Programación por el CBTIS 260</strong>.
          </p>

          <p className="text-white-50 mb-3" style={{ lineHeight: "1.7", fontSize: "0.96rem" }}>
            Me he desempeñado profesionalmente como <strong className="text-white">Desarrollador Web, Móvil e Integración de IA en Kyndrasoft (2024–2026)</strong>, como <strong className="text-white">Desarrollador Full-Stack independiente (2023–2024)</strong> y en el <strong className="text-white">Portal de Gestión Académica y Análisis de Actividades de la BUAP (2023)</strong>. Participo en todas las etapas del ciclo de vida del software (SDLC) bajo metodologías ágiles (<strong className="text-white">Scrum</strong>).
          </p>

          <div className="about-highlights-box p-3 rounded-3 mb-4">
            <div className="text-white fw-semibold small mb-2">
              Lo que aporto a equipos de ingeniería, desarrollo, IA y ciencia de datos:
            </div>
            <div className="d-flex align-items-start gap-2 mb-2 small text-white-50">
              <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
              <span>
                <strong>Desarrollo Full-Stack, Móvil y PWA:</strong> Construcción de plataformas web en <strong>React y Angular</strong>, <strong>Progressive Web Apps (PWA)</strong> instalables, APIs REST en <strong>Node.js</strong> y aplicaciones móviles publicadas en <strong>Google Play con Flutter y Dart</strong>.
              </span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-2 small text-white-50">
              <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
              <span>
                <strong>Inteligencia Artificial & Flujos Asistidos por IA:</strong> Integración de LLMs en producción (<strong>OpenAI API, Google Gemini, Anthropic Claude</strong>) con salidas estructuradas JSON, y desarrollo acelerado con herramientas de IA como <strong>Claude, OpenAI Codex y GitHub Copilot</strong>.
              </span>
            </div>
            <div className="d-flex align-items-start gap-2 mb-2 small text-white-50">
              <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
              <span>
                <strong>Ciencia de Datos, SQL y Visualización:</strong> Formación certificada en <strong>Data Science con SQL (Oracle ONE)</strong>, modelado relacional y NoSQL (PostgreSQL, MySQL, MongoDB, SQLite), <strong>Python</strong> y tableros estadísticos dinámicos con <strong>Chart.js</strong>.
              </span>
            </div>
            <div className="d-flex align-items-start gap-2 small text-white-50">
              <FaCheckCircle className="text-success mt-1 flex-shrink-0" />
              <span>
                <strong>Gestión Ágil, Cloud AWS y Mantenimiento:</strong> Organización de sprints con <strong>Jira y Trello</strong>, control de versiones con <strong>Git y GitHub</strong>, despliegue en <strong>AWS (S3, CloudFront)</strong> y <strong>mantenimiento correctivo y evolutivo</strong> de sistemas en producción.
              </span>
            </div>
          </div>

          <div className="text-white fw-semibold small mb-2">Intereses personales que impulsan mi disciplina:</div>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="hobby-pill"><FaDumbbell className="text-info me-1" /> Entrenamiento de fuerza y fitness</span>
            <span className="hobby-pill"><FaGlobeAmericas className="text-success me-1" /> Idiomas (Español, Inglés y Francés)</span>
            <span className="hobby-pill"><FaBookReader className="text-warning me-1" /> Aprendizaje continuo en IA y Arquitectura</span>
          </div>
        </div>

        <div className="about-quote-footer pt-3 mt-2 border-top border-secondary">
          <p className="mb-1 fst-italic text-info" style={{ fontSize: "0.92rem" }}>
            "Construyo software escalable, mantenible y respaldado por ingeniería sólida que resuelve problemas reales de negocio."
          </p>
          <span className="small text-white-50">— Jesús Adiv Barroso Manilla</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
