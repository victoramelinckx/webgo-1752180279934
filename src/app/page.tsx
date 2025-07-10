
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Transformamos tu negocio con un sitio web rápido y soporte 24/7, para que vendas sin complicaciones." cta1="Digitaliza Tu Venta" />
<How step1Title="Comienza ya" step1Desc="Envíanos tu idea en minutos." step2Title="Web express" step2Desc="Creamos tu tienda online en 24 horas." step3Title="Ventas 24/7" step3Desc="Soporte continuo para impulsar tus ventas." />
<Aboutus headline="WebGo: Tu Negocio, Ahora Online" subheadline="Transformamos ventas tradicionales en digitales, sin tiempo extra ni complicaciones técnicas." beneficiotitulo1="Fácil Implementación" beneficio1="Sin experiencia previa necesaria." beneficiotitulo2="Soporte Continuo" beneficio2="Asistencia técnica siempre disponible." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Con [producto] y WebGo, llevamos tu negocio a la era digital." services={[{"name":"Desarrollo Express","icon":"bolt","description":"Web de ventas en menos de 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Atrae clientes desde búsquedas online."},{"name":"Gestión Continua","icon":"clock","description":"Mantenimiento y soporte 24/7."},{"name":"Diseño Personalizado","icon":"paint-brush","description":"Webs visualmente atractivas y efectivas."},{"name":"Integración de Pago","icon":"credit-card","description":"Facilita la compra con métodos de pago online."},{"name":"Análisis de Datos","icon":"chart-line","description":"Toma decisiones informadas con analíticas detalladas."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales de alto impacto visual." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendación?","respuesta":"WebGo te ayuda a digitalizar tu negocio creando un sitio web optimizado que atrae nuevos clientes más allá de las recomendaciones. Así tendrás una presencia online que trabaja para ti las 24 horas, generando ventas mientras te centras en lo que mejor haces."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo me puede ayudar WebGo?","respuesta":"WebGo gestiona todo tu sitio web por ti. Desde la creación hasta el mantenimiento, nos encargamos de cada detalle para que tú puedas enfocarte en tu negocio sin preocupaciones."},{"pregunta":"¿Qué beneficios ofrece WebGo para generar ventas online?","respuesta":"WebGo diseña sitios web que convierten visitantes en compradores. Con estrategias SEO y un diseño atractivo, aumentamos tu visibilidad online y te ayudamos a captar nuevos clientes, incrementando tus ventas."},{"pregunta":"¿Cómo sé que un sitio web realmente puede aumentar mis ventas?","respuesta":"Con un sitio web creado por WebGo, te aseguras de tener una plataforma optimizada para atraer y convertir a los visitantes en clientes. Te damos las herramientas y estrategias que ya han funcionado para otros pequeños negocios como el tuyo."},{"pregunta":"¿Qué diferencia a WebGo de otros servicios de creación de sitios web?","respuesta":"WebGo se especializa en pequeños negocios como el tuyo. Entendemos tus desafíos y necesidades únicas, y ofrecemos un servicio personalizado que no solo crea un sitio web, sino que también lo optimiza para generar ventas y ahorrar tiempo."}]} />
<BookAppointment 
                      heading="Emprendedor, Es Hora de Llevar tu Negocio al Mundo Digital" 
                      description="Transforma tus recomendaciones en ventas online sin complicaciones. Deja que WebGo maneje tu presencia digital para que puedas centrarte en lo que mejor haces: liderar tu negocio."
                      formPostUrl="api/contact-us"
                      projectId="vHP4PisDjjQ9QCXQDsvDHvINO1u1"
                    />
<Footer />
    </main>
  );
}
