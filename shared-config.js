// ===== VARIABLES GLOBALES =====
let vidas = 3;
let correctas = 0;
let preguntaSeleccionada;
const preguntasCorrectas = [];

// ===== CATEGORÍAS =====
const categorias = [
    { nombre: '¿Qué es?', imagen: 'quees.png' },
    { nombre: 'Proyecto', imagen: 'proyecto.png' },
    { nombre: 'Derecho', imagen: 'derecho.png' },
    { nombre: 'Diversidad', imagen: 'diversidad.png' },
    { nombre: 'Prevención', imagen: 'prevencion.png' },
    { nombre: 'Salud', imagen: 'salud.png' }
];

// ===== DATOS DE TRIVIA =====
const triviaData = [
    { name: "Preservativo", percentage: "0%" },
    { name: "Sexualidad", percentage: "0%" },
    { name: "ITS", percentage: "0%" },
    { name: "Consentimiento", percentage: "0%" },
    { name: "Menstruación", percentage: "0%" },
    { name: "Anticonceptivos", percentage: "0%" },
    { name: "Pubertad", percentage: "0%" },
    { name: "Derechos Sexuales", percentage: "0%" },
    { name: "Grooming", percentage: "0%" },
    { name: "Proyecto", percentage: "0%" }
];

// ===== PALABRAS PARA PASAPALABRA =====
const palabras = {
    A: [
        { palabra: "Amor", definicion: "Sentimiento profundo de afecto y conexión emocional hacia otra persona." },
        { palabra: "Abstinencia", definicion: "Decisión voluntaria de abstenerse de participar en actividades sexuales." },
        { palabra: "Ano", definicion: "Orificio de salida del tracto digestivo en el cuerpo humano." },
        { palabra: "Anticonceptivo", definicion: "Sustancia o dispositivo utilizado para prevenir el embarazo durante las relaciones sexuales." },
        { palabra: "Asexualidad", definicion: "Orientación sexual caracterizada por la falta de atracción sexual hacia otros." }
    ],
    B: [
        { palabra: "Beso", definicion: "Un acto de intimidad y afecto que involucra el contacto de los labios entre dos personas." },
        { palabra: "Bisexualidad", definicion: "Orientación sexual en la que una persona se siente atraída por individuos de su género y del otro." },
        { palabra: "Belleza", definicion: "Atributo subjetivo que se refiere a la apariencia física atractiva de una persona." },
        { palabra: "Bromance", definicion: "Un vínculo íntimo y afectuoso entre dos hombres, caracterizado por una estrecha amistad." },
        { palabra: "Biología", definicion: "La ciencia que estudia los organismos vivos y sus procesos vitales." }
    ],
    C: [
        { palabra: "Coito", definicion: "La penetración sexual del pene en la vagina durante el acto sexual." },
        { palabra: "Condón", definicion: "Un dispositivo de barrera utilizado durante el coito para prevenir el embarazo." },
        { palabra: "Clítoris", definicion: "Un órgano sexual femenino extremadamente sensible y altamente erógeno." },
        { palabra: "Cervix", definicion: "El cuello uterino, parte inferior del útero que se proyecta dentro de la vagina." },
        { palabra: "Consentimiento", definicion: "La aprobación voluntaria y explícita de todas las partes involucradas en una actividad sexual." }
    ],
    D: [
        { palabra: "Deseo", definicion: "La atracción o impulso sexual experimentado hacia otra persona." },
        { palabra: "Diversidad", definicion: "La variedad de identidades, orientaciones sexuales y expresiones de género presentes en una sociedad." },
        { palabra: "DIU", definicion: "Un método anticonceptivo en forma de dispositivo pequeño que se coloca dentro del útero." },
        { palabra: "Discriminación", definicion: "El trato injusto o desigual hacia individuos o grupos basado en características como género u orientación sexual." },
        { palabra: "Desnudez", definicion: "La condición de estar sin ropa, que puede tener connotaciones de intimidad." }
    ],
    E: [
        { palabra: "Eyaculación", definicion: "Expulsión de semen desde el pene durante el orgasmo masculino." },
        { palabra: "Erección", definicion: "Proceso en el cual el pene se vuelve rígido y erecto debido al flujo sanguíneo aumentado." },
        { palabra: "Embarazo", definicion: "Estado fisiológico en el cual un individuo lleva en su útero al desarrollo de uno o más embriones o fetos." },
        { palabra: "Excitación", definicion: "Estado de aumento de la energía sexual y la activación fisiológica en respuesta a estímulos sexuales." },
        { palabra: "Enfermedad", definicion: "Condición anormal o alteración en la salud que afecta negativamente el funcionamiento del cuerpo o la mente." }
    ]
};

// ===== FOTOS PARA INFOGRAFÍA =====
const photos = [
    { id: 1, url: 'info1.png', description: 'Foto 1' },
    { id: 2, url: 'info2.png', description: 'Foto 2' },
    { id: 3, url: 'info3.png', description: 'Foto 3' },
    { id: 4, url: 'info4.png', description: 'Foto 4' },
    { id: 5, url: 'info5.png', description: 'Foto 5' },
    { id: 6, url: 'info6.png', description: 'Foto 6' },
    { id: 7, url: 'info7.png', description: 'Foto 7' },
    { id: 8, url: 'info8.png', description: 'Foto 8' },
    { id: 9, url: 'info9.png', description: 'Foto 9' },
    { id: 10, url: 'info10.png', description: 'Foto 10' }
];

// ===== PREGUNTAS PARA AMOR SIN VIOLENCIA =====
const questions = [
    "Cuando no están juntos, ¿tu pareja te controla preguntándote con quién estás?",
    "¿Revisa los mensajes de tu celular o pidió la contraseña de tu correo?",
    "¿Te acusa de infidelidad o de que actúas en forma sospechosa?",
    "¿Sentís que están permanentemente en tensión?",
    "¿Le molesta que hagas actividades de manera independiente?",
    "¿Has perdido contacto con amigos por evitar que tu pareja se moleste?",
    "¿Te dice cómo tenés que vestirte?",
    "¿Tu pareja se maneja con violencia con otras personas?",
    "¿Menosprecia en público tus opiniones?",
    "¿Te dice que todo lo que hacés está mal?",
    "¿Te amenaza si no obedecés?",
    "Después de violencia, ¿tu pareja promete que nunca más lo hará?",
    "¿Indaga o cuestiona tus noviazgos anteriores?",
    "¿Sentís presión de tu pareja a realizar prácticas sexuales?",
    "¿Te critica y humilla en público?",
    "¿Tu pareja tiene cambios bruscos de humor?",
    "¿Te ha golpeado o tirado cosas?",
    "¿Te ha amenazado con un objeto o armas?",
    "¿Te ha forzado a tener relaciones?",
    "¿Has buscado ayuda por lesiones que tu pareja te ha causado?"
];

// ===== UTILIDADES =====
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ===== CARGAR DATOS PERSISTENTES =====
function loadGameData() {
    if (typeof(Storage) !== "undefined") {
        const savedVidas = localStorage.getItem('vidas');
        const savedCorrectas = localStorage.getItem('correctas');
        
        if (savedVidas) vidas = parseInt(savedVidas);
        if (savedCorrectas) correctas = parseInt(savedCorrectas);
    }
}

function saveGameData() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('vidas', vidas);
        localStorage.setItem('correctas', correctas);
    }
}

// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
});