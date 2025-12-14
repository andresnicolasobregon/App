let vidas = 3;
let correctas = 0;
let preguntaSeleccionada;
const preguntasCorrectas = [];
let currentPage = 0;
const resultsPerPage = 4;
let currentQuestionIndex = 0;
let currentQuestionIndexTrivia = 0;
const cardsPerPage = 4; // Número de tarjetas por página
let selectedTriviaQuestions = [];
let preguntasRestantes = 0;
const totalPreguntas = 0;
let palabrasArray = [];
let currentWordIndex = 0;

const palabras = {
    A: [
    { palabra: "Amor", definicion: "Sentimiento profundo de afecto y conexión emocional hacia otra persona." },
    { palabra: "Abstinencia", definicion: "Decisión voluntaria de abstenerse de participar en actividades sexuales." },
    { palabra: "Ano", definicion: "Orificio de salida del tracto digestivo en el cuerpo humano." },
    { palabra: "Anticonceptivo", definicion: "Sustancia o dispositivo utilizado para prevenir el embarazo durante las relaciones sexuales." },
    { palabra: "Asexualidad", definicion: "Orientación sexual caracterizada por la falta de atracción sexual hacia otros." }
  ],
  B: [
    { palabra: "Beso", definicion: "Un acto de intimidad y afecto que involucra el contacto de los labios entre dos personas como expresión de amor, deseo o respeto." },
    { palabra: "Bisexualidad", definicion: "Orientación sexual en la que una persona se siente atraída tanto por individuos de su propio género como por individuos del otro género." },
    { palabra: "Belleza", definicion: "Atributo subjetivo que se refiere a la apariencia física atractiva de una persona, que puede influir en la atracción sexual y emocional." },
    { palabra: "Bromance", definicion: "Un vínculo íntimo y afectuoso entre dos hombres, caracterizado por una estrecha amistad pero sin connotaciones sexuales." },
    { palabra: "Biología", definicion: "La ciencia que estudia los organismos vivos y sus procesos vitales, incluyendo aquellos relacionados con la sexualidad humana." }
  ],
  C: [
    { palabra: "Coito", definicion: "La penetración sexual del pene en la vagina durante el acto sexual." },
    { palabra: "Condón", definicion: "Un dispositivo de barrera utilizado durante el coito para prevenir el embarazo y proteger contra enfermedades de transmisión sexual." },
    { palabra: "Clítoris", definicion: "Un órgano sexual femenino extremadamente sensible y altamente erógeno, ubicado en la parte superior de la vulva." },
    { palabra: "Cervix", definicion: "El cuello uterino, es la parte inferior del útero que se proyecta dentro de la vagina y juega un papel crucial en el ciclo menstrual y durante el parto." },
    { palabra: "Consentimiento", definicion: "La aprobación voluntaria y explícita de todas las partes involucradas en una actividad sexual, libre de coerción o presión." }
  ],
  D: [
    { palabra: "Desnudez", definicion: "La condición de estar sin ropa, que puede tener connotaciones de intimidad y vulnerabilidad en contextos sexuales." },
    { palabra: "Deseo", definicion: "La atracción o impulso sexual experimentado hacia otra persona, generalmente acompañado de un anhelo de intimidad física o emocional." },
    { palabra: "Diversidad", definicion: "La variedad de identidades, orientaciones sexuales y expresiones de género presentes en una sociedad." },
    { palabra: "DIU", definicion: "Un método anticonceptivo en forma de dispositivo pequeño y flexible que se coloca dentro del útero para prevenir el embarazo." },
    { palabra: "Discriminación", definicion: "El trato injusto o desigual hacia individuos o grupos, basado en características como género, orientación sexual o identidad de género." }
  ],
  E: [
    { palabra: "Eyaculación", definicion: "Expulsión de semen desde el pene durante el orgasmo masculino." },
    { palabra: "Erección", definicion: "Proceso en el cual el pene se vuelve rígido y erecto debido al flujo sanguíneo aumentado." },
    { palabra: "Embarazo", definicion: "Estado fisiológico en el cual un individuo lleva en su útero al desarrollo de uno o más embriones o fetos humanos." },
    { palabra: "Excitación", definicion: "Estado de aumento de la energía sexual y la activación fisiológica en respuesta a estímulos sexuales." },
    { palabra: "Enfermedad", definicion: "Condición anormal o alteración en la salud que afecta negativamente el funcionamiento del cuerpo o la mente." }
  ],
  F: [
    { palabra: "Fertilidad", definicion: "Capacidad de concebir y reproducirse." },
    { palabra: "Fecundación", definicion: "Proceso en el cual un espermatozoide fertiliza un óvulo, dando lugar a la formación de un embrión." },
    { palabra: "Felación", definicion: "Práctica sexual que implica la estimulación del pene con la boca y los labios." },
    { palabra: "Flujo", definicion: "Líquido que se segrega en la vagina como parte del proceso normal de autolimpieza y lubricación." },
    { palabra: "Fetichismo", definicion: "Preferencia sexual en la que una persona se excita sexualmente por objetos, partes del cuerpo o situaciones específicas." }
  ],
  G: [
    { palabra: "Gozar", definicion: "Experimentar placer, disfrutar o sentir satisfacción en relación con algo, ya sea físico, emocional o sensorialmente." },
    { palabra: "Gay", definicion: "Refiere a una orientación sexual en la que un hombre siente atracción romántica o sexual hacia otros hombres." },
    { palabra: "Ginecología", definicion: "Rama de la medicina que se especializa en la salud reproductiva y el cuidado de la mujer." },
    { palabra: "Geles", definicion: "Productos utilizados como lubricantes durante las relaciones sexuales para reducir la fricción y mejorar la comodidad." },
    { palabra: "Genitales", definicion: "Órganos sexuales externos e internos que participan en la reproducción y el placer sexual." }
  ],
  H: [
    { palabra: "Heterosexualidad", definicion: "Orientación sexual en la que una persona siente atracción romántica o sexual hacia personas del sexo opuesto." },
    { palabra: "Homosexualidad", definicion: "Orientación sexual en la que una persona siente atracción romántica o sexual hacia personas del mismo sexo." },
    { palabra: "Hormonas", definicion: "Sustancias químicas producidas por las glándulas endocrinas que regulan diversas funciones en el cuerpo, incluyendo la sexualidad." },
    { palabra: "Himen", definicion: "Membrana delgada que cubre parcialmente la abertura vaginal en algunas mujeres." },
    { palabra: "Hipófisis", definicion: "Glándula endocrina en el cerebro que regula la producción de hormonas sexuales y otras funciones del cuerpo." }
  ],
  I: [
    { palabra: "Intimidad", definicion: "La cercanía emocional y física compartida entre personas, que puede incluir confianza, afecto y conexión profunda." },
    { palabra: "Inseminación", definicion: "El proceso de introducción de esperma en el tracto reproductivo de una hembra con el fin de lograr la fertilización." },
    { palabra: "Infección", definicion: "Una condición causada por la invasión y multiplicación de microorganismos patógenos en el cuerpo, afectando distintas partes." },
    { palabra: "Impulso", definicion: "Un deseo repentino e instintivo de realizar una acción específica, como el impulso sexual." },
    { palabra: "Intersexual", definicion: "Una persona que nace con características biológicas que no se ajustan típicamente a las definiciones binarias de sexo femenino o masculino." }
  ],
  J: [
    { palabra: "Juventud", definicion: "La etapa temprana de la vida caracterizada por la vitalidad y la exploración, especialmente en relación con la sexualidad y el desarrollo personal." },
    { palabra: "Juego", definicion: "Actividad recreativa o de entretenimiento que puede incluir juegos sexuales o experimentación íntima en un contexto consensuado y seguro." },
    { palabra: "Jactitación", definicion: "La acción de alardear o presumir, que puede referirse a la exhibición o exageración de habilidades sexuales." },
    { palabra: "Júbilo", definicion: "Sentimiento intenso de alegría y satisfacción que puede experimentarse en relación con la satisfacción sexual y emocional." },
    { palabra: "Jocoso", definicion: "Caracterizado por ser gracioso, divertido o alegre, especialmente en contextos relacionados con el humor y la sexualidad." }
  ],
  L: [
    { palabra: "Lubricante", definicion: "Sustancia utilizada durante la actividad sexual para reducir la fricción entre las superficies corporales, facilitando la penetración y el confort." },
    { palabra: "Lujuria", definicion: " Deseo intenso y descontrolado por la gratificación sexual, a menudo considerado un impulso básico y primitivo." },
    { palabra: "Lactancia", definicion: "Proceso de amamantar o alimentar a un bebé con leche materna, que está relacionado con la función sexual y reproductiva." },
    { palabra: "Lesbianismo", definicion: "Orientación sexual en la que una mujer siente atracción romántica o sexual hacia otras mujeres." },
    { palabra: "Lencería", definicion: "Ropa interior femenina, a menudo diseñada para ser atractiva y erótica, utilizada tanto por comodidad como para la seducción." }
  ],
  M: [
    { palabra: "Masturbación", definicion: "Estimulación de los propios genitales para obtener placer sexual, a menudo hasta llegar al orgasmo." },
    { palabra: "Menstruación", definicion: "Proceso cíclico en el que se desprende el revestimiento del útero, resultando en sangrado vaginal en las mujeres." },
    { palabra: "Morbo", definicion: "Interés insano o inusual por temas o actividades que son tabú o prohibidos, a menudo con connotaciones sexuales." },
    { palabra: "Monogamia", definicion: "Relación en la que una persona mantiene una relación romántica o sexual exclusiva con otra persona." },
    { palabra: "Miedo", definicion: "Emoción que puede surgir en respuesta a una amenaza o peligro percibido, incluyendo situaciones sexuales que generan ansiedad o inseguridad." }
  ],
  N: [
        { palabra: "Noviazgo", definicion: "Relación amorosa entre dos personas que comparten emociones, expectativas y compromiso mutuo, con el objetivo de consolidar una relación duradera." },
        { palabra: "Nudismo", definicion: "Práctica social y cultural que implica la desnudez como expresión de libertad y aceptación del cuerpo humano en un contexto específico." },
        { palabra: "Negación", definicion: "Actitud de rechazo o resistencia hacia deseos sexuales o emocionales, con el fin de controlar impulsos o preservar la integridad personal." },
        { palabra: "Ninfomanía", definicion: "Náuseas: Sensación de malestar en el estómago que a menudo precede al vómito y puede ser causada por diversas razones, como enfermedades, mareos o embarazo." },
        { palabra: "Necesidad", definicion: "Impulso básico o requerimiento emocional, físico o psicológico relacionado con la satisfacción sexual o emocional." }
    ],
    O: [
        { palabra: "Orgasmo", definicion: "El clímax o punto culminante de la excitación sexual, caracterizado por sensaciones intensas de placer y contracciones musculares rítmicas." },
        { palabra: "Orientación", definicion: "La dirección o tendencia de la atracción emocional, romántica o sexual hacia personas de un determinado género o identidad." },
        { palabra: "Ovulación", definicion: "El proceso en el ciclo menstrual femenino en el cual un óvulo maduro es liberado del ovario hacia las trompas de Falopio, generalmente para ser fecundado." },
        { palabra: "Ovarios", definicion: "Los órganos reproductivos femeninos que producen óvulos, hormonas sexuales y desempeñan un papel crucial en el ciclo menstrual y la fertilidad." },
        { palabra: "Oxitocina", definicion: "Una hormona producida en el cerebro que desempeña un papel en la regulación del parto, la lactancia y la formación de vínculos emocionales." }
    ],
    P: [
        { palabra: "Placer", definicion: "El placer se refiere a la sensación de satisfacción física o emocional intensa experimentada durante una actividad agradable, como las relaciones sexuales." },
        { palabra: "Pene", definicion: "El pene es un órgano sexual masculino responsable de la reproducción y la liberación de semen durante el acto sexual." },
        { palabra: "Próstata", definicion: "La próstata es una glándula del sistema reproductor masculino que se encuentra debajo de la vejiga y produce fluido seminal." },
        { palabra: "Pubertad", definicion: "La pubertad es el período de desarrollo físico y hormonal durante el cual ocurren cambios en el cuerpo que preparan a una persona para la reproducción sexual." },
        { palabra: "Penetración", definicion: "La penetración se refiere al acto de introducir parcial o completamente un objeto o parte del cuerpo en la abertura corporal de otra persona." }
    ],
    R: [
        { palabra: "Romance", definicion: "El estado emocional de amor o atracción intensa entre dos personas que implica ternura, pasión y conexión emocional." },
        { palabra: "Riesgo", definicion: "La posibilidad de enfrentar consecuencias negativas o inesperadas, especialmente en el contexto de la salud sexual y reproductiva." },
        { palabra: "Relaciones", definicion: "Las interacciones y conexiones personales entre individuos que pueden ser de amistad, familiares o amorosas, incluyendo vínculos emocionales y sexuales." },
        { palabra: "Reproducción", definicion: "El proceso biológico mediante el cual los organismos generan descendencia, usualmente a través de la fertilización y desarrollo de nuevos seres vivos." },
        { palabra: "Rol", definicion: "El papel social, emocional o conductual que una persona asume en una situación específica, como los roles de género o sexuales en una relación o sociedad." }
    ],
    S: [
        { palabra: "Semen", definicion: "El líquido reproductivo masculino que contiene espermatozoides y se libera durante la eyaculación." },
        { palabra: "Sífilis", definicion: "Una infección de transmisión sexual causada por la bacteria Treponema pallidum, que puede provocar úlceras genitales." },
        { palabra: "Seducción", definicion: "El proceso de atraer y cautivar a alguien de manera atractiva y persuasiva, generalmente con fines románticos o sexuales." },
        { palabra: "Sexting", definicion: "El intercambio de mensajes, imágenes o videos sexualmente explícitos a través de dispositivos electrónicos, como teléfonos móviles o computadoras." },
        { palabra: "Sexualidad", definicion: "La expresión y manifestación de la identidad sexual de una persona, incluye aspectos biológicos, emocionales, sociales y culturales." }
    ],
    T: [
        { palabra: "Testículos", definicion: "Los testículos son glándulas reproductoras masculinas que producen espermatozoides y hormonas sexuales." },
        { palabra: "Testosterona", definicion: "La testosterona es una hormona sexual masculina que desempeña un papel fundamental en el desarrollo sexual y características secundarias masculinas." },
        { palabra: "Ternura", definicion: "La ternura es un sentimiento de afecto suave y cariñoso, típicamente asociado con relaciones íntimas y emocionales." },
        { palabra: "Tabú", definicion: "Un tabú es una práctica, objeto o idea prohibida o considerada inaceptable dentro de una determinada cultura o sociedad." },
        { palabra: "Transexual", definicion: "Persona aquella cuya identidad de género difiere de su sexo asignado al nacer, y que puede buscar modificar su cuerpo mediante terapia hormonal o cirugía." }
    ],
   U: [
        { palabra: "Uretra", definicion: "Conducto que transporta la orina desde la vejiga fuera del cuerpo, y en los hombres también es por donde se expulsa el semen durante la eyaculación." },
        { palabra: "Urología", definicion: "Especialidad médica que se enfoca en el diagnóstico y tratamiento de trastornos del tracto urinario en hombres y mujeres, así como en enfermedades del sistema reproductor masculino." },
        { palabra: "Útero", definicion: "Órgano femenino en el que se desarrolla y se nutre el feto durante el embarazo, y es también el lugar donde ocurre la menstruación si no hay embarazo." },
        { palabra: "Unión", definicion: "Acto o proceso de unirse o conectarse íntimamente, ya sea física, emocional o espiritualmente, como en relaciones amorosas o matrimoniales." },
        { palabra: "Úlcera", definicion: "Lesión abierta o herida en la piel o membrana mucosa, que puede estar asociada con diversas causas como infecciones." }
    ],
    V: [
        { palabra: "Vagina", definicion: "Canal muscular elástico en el aparato reproductor que conecta el útero con el exterior del cuerpo y sirve como canal para el flujo menstrual, el parto y el coito." },
        { palabra: "Vulva", definicion: "La vulva es la parte externa de los órganos genitales femeninos, que incluye los labios mayores, los labios menores, el clítoris y la abertura vaginal." },
        { palabra: "Vasectomía", definicion: "Procedimiento quirúrgico permanente, en el cual se cortan o bloquean los conductos deferentes para evitar la liberación de espermatozoides." },
        { palabra: "Vello", definicion: "Pelo que crece en diversas partes del cuerpo, incluyendo las áreas genitales, y puede tener una función en la protección y la atracción sexual." },
        { palabra: "Voyerismo", definicion: "Comportamiento sexual caracterizado por la excitación al observar a otras personas mientras se desvisten, están desnudas sin consentimiento." }
    ]
};

const categorias = [
    { nombre: '¿Qué es?', imagen: 'quees.png' },
    { nombre: 'Proyecto', imagen: 'proyecto.png' },
    { nombre: 'Derecho', imagen: 'derecho.png' },
    { nombre: 'Diversidad', imagen: 'diversidad.png' },
    { nombre: 'Prevención', imagen: 'prevencion.png' },
    { nombre: 'Salud', imagen: 'salud.png' }
];

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
    { id: 10, url: 'info10.png', description: 'Foto 10' },
    { id: 11, url: 'info11.png', description: 'Foto 11' },
    { id: 12, url: 'info12.png', description: 'Foto 12' },
    { id: 13, url: 'info13.png', description: 'Foto 1' },
    { id: 14, url: 'info14.png', description: 'Foto 2' },
    { id: 15, url: 'info15.png', description: 'Foto 3' },
    { id: 16, url: 'info16.png', description: 'Foto 4' },
    { id: 17, url: 'info17.png', description: 'Foto 5' },
    { id: 18, url: 'info18.png', description: 'Foto 6' },
    { id: 19, url: 'info19.png', description: 'Foto 7' },
    { id: 20, url: 'info20.png', description: 'Foto 8' },
    { id: 21, url: 'info21.png', description: 'Foto 9' },
    { id: 22, url: 'info22.png', description: 'Foto 10' },
    { id: 23, url: 'info23.png', description: 'Foto 11' },
    { id: 24, url: 'info24.png', description: 'Foto 12' },
    { id: 25, url: 'info25.png', description: 'Foto 10' },
    { id: 26, url: 'info26.png', description: 'Foto 11' },
    { id: 27, url: 'info27.png', description: 'Foto 12' }
];

const questions = [
    "Cuando no están juntos, ¿tu pareja te controla preguntándote con quién estás, dónde y qué estás haciendo mensajeándote por celular?",
    "¿Revisa los mensajes de tu celular o te pidió la contraseña de tu correo electrónico, Facebook o Instagram como “prueba de confianza”?",
    "¿Te acusa de infidelidad o de que actúas en forma sospechosa?",
    "¿Sentís que están permanentemente en tensión y que, hagas lo que hagas, se irrita o te culpabiliza de sus cambios de humor?",
    "¿Le molesta que hagas actividades de manera independiente, como estudiar, trabajar, visitar amigos/as, ir al gimnasio o elegir quedarte solo/a en tu casa?",
    "¿Has perdido contacto con amigos, familiares, compañeras/os de tu escuela o trabajo para evitar que tu pareja se moleste?",
    "¿Te dice cómo tenés que vestirte o cómo debe ser tu apariencia?",
    "¿Tu pareja se maneja con violencia con otras personas o se pelea a los golpes?",
    "¿Menosprecia en público o en privado tus opiniones?",
    "¿Te dice que todo lo que hacés está mal o que no servís para nada?",
    "¿Te amenaza con lastimarse/te si no obedecés o si querés terminar la relación?",
    "Después de un episodio en donde hubo violencia, ¿tu pareja se muestra cariñosa o atenta y promete que nunca más lo hará y todo cambiará?",
    "¿Indaga o cuestiona tus noviazgos anteriores?",
    "¿Sentís presión de tu pareja a realizar determinadas prácticas sexuales por temor a que te deje?",
    "¿Sentís que tu pareja constantemente te está controlando “por amor”?",
    "¿Te critica y humilla en público o en privado, opina negativamente sobre tu apariencia, tu forma de ser o el modo en que te vestís?",
    "¿Tu pareja tiene cambios bruscos de humor o se comporta distinto contigo en público, como si fuera otra persona?",
    "¿Te ha golpeado con sus manos, te ha tironeado o te ha lanzado cosas cuando se enoja o cuando discuten?",
    "¿Te ha amenazado alguna vez con un objeto o armas, o con matarse, a vos o a algún miembro de la familia si no le obedeces?",
    "¿Te ha forzado a tener relaciones, amenazándote que si no tiene relaciones contigo, entonces lo hará con otra persona?",
    "¿Has buscado o has recibido ayuda por lesiones que tu pareja te ha causado? (primeros auxilios, atención médica o legal)"
];

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
    { name: "Proyecto", percentage: "0%" },
    // Agrega más objetos según sea necesario
];

document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "¡Te damos la bienvenida!",
        "¡Hola! Nos alegra verte de nuevo.",
        "¿A qué jugamos hoy?",
        "¡Esperamos que disfrutes tu visita!",
        "¡Gracias por estar aquí! ¡Vamos a jugar",
        "¡Tu presencia nos alegra! !Juguemos!",
        "¡Que tengas un gran día aprendiendo más!",
        "¡Estamos felices de verte!",
        "¡A jugar! Disfruta tu tiempo aquí.",
        "¡Nos encanta tenerte aquí! ¡A jugar!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('welcome-message').innerText = randomMessage;
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('categoria-info').style.display = 'flex';
    const imagen = document.getElementById('playButton2');
    imagen.classList.add('imagen-rebote');
    let dato = window.AppInventor.getWebViewString();
    if (dato != ""){
        const partes = dato.split('/');
        const primeraParte = partes[0];
        const segundaParte = partes[1];
        document.getElementById('correctas').innerText = segundaParte;
        correctas = segundaParte;
    }
});

// Algoritmo pasapalabra:
let currentLetter ="";
function startGame() {
    const letras = Object.keys(palabras);
    currentLetter = letras[0];
    // Función para seleccionar un elemento al azar de un array
function seleccionarAlAzar(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

// Iterar sobre cada letra del abecedario
for (let letra in palabras) {
    const opciones = palabras[letra];
    if (opciones.length > 0) {
        // Seleccionar una palabra al azar
        const palabraYDefinicion = seleccionarAlAzar(opciones);
        
        // Agregar al array palabrasArray
        palabrasArray.push({
            letra: letra,
            palabra: palabraYDefinicion.palabra,
            definicion: palabraYDefinicion.definicion
        });
    }
}
createAlphabetCircle(letras);
showDefinition();
}

function createAlphabetCircle(letras) {
const circleContainer = document.getElementById("circle-container");
circleContainer.innerHTML = "";

const radius = 120;
const angleIncrement = (2 * Math.PI) / letras.length;

letras.forEach((letter, index) => {
    const angle = index * angleIncrement;
    const x = radius * Math.cos(angle) + radius;
    const y = radius * Math.sin(angle) + radius;

    const letterDiv = document.createElement("div");
    letterDiv.className = "letter";
    letterDiv.style.left = `${x}px`;
    letterDiv.style.top = `${y}px`;
    letterDiv.id = `letter-${letter.toUpperCase()}`;
    letterDiv.innerText = letter.toUpperCase();

    circleContainer.appendChild(letterDiv);
});

highlightCurrentLetter();
}

function highlightCurrentLetter() {
document.getElementById(`letter-${currentLetter.toUpperCase()}`).classList.add("active-letter");
}

function getCurrentWordDefinition() {
const currentWord = palabrasArray[currentWordIndex];
return currentWord.definicion;
}

function showDefinition() {
if (currentWordIndex < palabrasArray.length) {
    const definitionText = getCurrentWordDefinition();
    document.getElementById("definition").innerText = definitionText;
    document.getElementById("wordInput").value = "";
    document.getElementById("wordInput").placeholder = `Palabra de ${palabrasArray[currentWordIndex].palabra.length} letras`;
    document.getElementById("result").innerText = "";
}
}

function checkAnswer() {
const userAnswer = document.getElementById("wordInput").value.trim().toLowerCase();
const currentWord = palabrasArray[currentWordIndex];
const currentLetterDiv = document.getElementById(`letter-${currentWord.letra}`);

if (userAnswer === currentWord.palabra.toLowerCase()) {
    document.getElementById("result").innerText = "¡Correcto!";
    currentLetterDiv.classList.remove("active-letter");
    currentLetterDiv.classList.add("correct-letter");
    correctas++;
    document.getElementById("correctas").innerText = correctas;
    currentWordIndex++;

    if (currentWordIndex >= palabrasArray.length) {
        const nextLetterIndex = letras.indexOf(currentLetter) + 1;
        if (nextLetterIndex < letras.length) {
            currentLetter = letras[nextLetterIndex];
            palabrasArray = palabras[currentLetter].map(item => ({
                letra: currentLetter,
                palabra: item.palabra,
                definicion: item.definicion
            }));
            currentWordIndex = 0;
            highlightCurrentLetter();
            showDefinition();
        } else {
            document.getElementById("result").innerText = "¡Has completado todas las palabras!";
            document.getElementById("definition").innerText = "";
            document.getElementById("input-container").style.display = "none";
            document.querySelectorAll("button").forEach(button => button.style.display = "none");
        }
    } else {
        showDefinition();
    }
} else {
    document.getElementById("result").innerText = "Incorrecto, intenta de nuevo.";
    currentLetterDiv.classList.add("incorrect-letter");
}
}

function passWord() {
const currentWord = palabrasArray[currentWordIndex];
const currentLetterDiv = document.getElementById(`letter-${currentWord.letra}`);

currentLetterDiv.classList.remove("active-letter");
currentLetterDiv.classList.add("passed-letter");
currentWordIndex++;

if (currentWordIndex >= palabrasArray.length) {
    const nextLetterIndex = letras.indexOf(currentLetter) + 1;
    if (nextLetterIndex < letras.length) {
        currentLetter = letras[nextLetterIndex];
        palabrasArray = palabras[currentLetter].map(item => ({
            letra: currentLetter,
            palabra: item.palabra,
            definicion: item.definicion
        }));
        currentWordIndex = 0;
        highlightCurrentLetter();
        showDefinition();
    } else {
        document.getElementById("result").innerText = "¡Has completado todas las palabras!";
        document.getElementById("definition").innerText = "";
        document.getElementById("input-container").style.display = "none";
        document.querySelectorAll("button").forEach(button => button.style.display = "none");
    }
} else {
    showDefinition();
}
}

// Algoritmo de trivia:
const triviaContainer = document.getElementById('trivia-card-container');
const paginationContainer = document.getElementById('trivia-pagination');

function displayCards(page) {
    triviaContainer.innerHTML = '';
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const cardsToShow = triviaData.slice(startIndex, endIndex);
    cardsToShow.forEach(trivia => {
        const card = document.createElement('div');
        card.className = 'trivia-card';
        card.innerHTML = `
            <h3>${trivia.name}</h3>
            <p>${trivia.percentage}</p>
            <button>Jugar</button>
        `;
        triviaContainer.appendChild(card);
    });

    updatePagination(page);
}

function updatePagination(currentPage) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(triviaData.length / cardsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const span = document.createElement('span');
        span.textContent = i;
        if (i === currentPage) {
            span.classList.add('active');
        }
        span.addEventListener('click', () => displayCards(i));
        paginationContainer.appendChild(span);
    }
}
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Jugar') {
        const triviaName = event.target.previousElementSibling.previousElementSibling.textContent;
        document.getElementById('categoria-nombre').textContent  = triviaName;
        selectedTriviaQuestions = preguntas.filter(pregunta => pregunta.trivia === triviaName);
        currentQuestionIndexTrivia = 0;
        mostrarPreguntaTrivia();
        const totalPreguntas = selectedTriviaQuestions.length;
        preguntasRestantes = totalPreguntas;
        console.log(totalPreguntas )
        console.log(preguntasRestantes )

    }
});           
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}
function mostrarPreguntaTrivia() {
    document.getElementById('pregunta-containerTrivia').style.display = 'flex';
    document.getElementById('trivia-content').style.display = 'none';
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('playButton2').style.display = 'none';
    document.body.style.backgroundColor = '#ffffff';
    if (currentQuestionIndexTrivia < selectedTriviaQuestions.length) {
        const currentQuestion = selectedTriviaQuestions[currentQuestionIndexTrivia];
        document.getElementById('preguntaTrivia').textContent = currentQuestion.pregunta;
        document.getElementById('preguntaCorrectaTrivia').textContent  = currentQuestion.pregunta;
        document.getElementById('resCorrectaTrivia').textContent  = currentQuestion.respuestacorrecta;
        const respuestasContainer = document.getElementById('respuestasTrivia');
        respuestasContainer.innerHTML = '';
        const respuestas = [
                currentQuestion.respuestacorrecta,
                currentQuestion.respuesta1,
                currentQuestion.respuesta2,
                currentQuestion.respuesta3
            ];
            shuffleArray(respuestas); // Mezclar respuestas
        respuestas.forEach((respuesta, index) => {
            const button = document.createElement('button');
            button.className = 'respuesta';
            button.textContent = respuesta;
            button.addEventListener('click', () => verificarRespuestaTrivia(respuesta));
            respuestasContainer.appendChild(button);
        });
    } else {
        // Felicitaciones cuando se terminan las preguntas.
        mostrarFelicitaciones();
    }
}
function mostrarFelicitaciones() {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    let trivianombre = document.getElementById('categoria-nombre').textContent 
    contenedor.innerHTML = `<div id="felicitaciones">
                            <img src= "felicitaciones.png" alt="felicitaciones" id="imgfelicitaciones">
                            <h3 id="titulofelicitaciones">¡Felicitaciones, completaste la trivia ${trivianombre}!</h3>
                            <p id="titulofelicitaciones">Lograste ${correctas} preguntas correctas </p>
                            <p id="titulofelicitaciones">  ¿Deseas seguir aprendiento?</p>
                            <button id="botonVolver">Seguir Jugando</button>
                            </div>`;
    //Agregamos el contenedor creado al body
    document.getElementById('menu').style.display = 'flex';
    document.getElementById('categoria-info').style.display = 'flex';
    document.getElementById('pregunta-containerTrivia').style.display = 'none';
    document.getElementById('respuesta-containerTrivia').style.display = 'none';
    document.body.appendChild(contenedor);
    const imagen = document.getElementById('imgfelicitaciones');
    imagen.style.opacity = 1; // Mostrar la imagen
    imagen.classList.add('imagen-rebote');
    botonVolver.addEventListener('click', () => {
        window.location.href = 'trivias.html'; // Cambia esto si la ruta es diferente
    });
}
function verificarRespuestaTrivia(respuestaSeleccionada) {
    preguntasRestantes--;              
    const currentQuestion = selectedTriviaQuestions[currentQuestionIndexTrivia];
    const respuestaContainer = document.getElementById('respuesta-containerTrivia');
    if (respuestaSeleccionada === currentQuestion.respuestacorrecta) {
        document.getElementById('correctoincorrectoTrivia').src = 'CorrectoNew.png';
        correctas++;
        document.getElementById('correctas').textContent = correctas;
        document.getElementById('correctas').classList.add('imagen-rebote');
        const imagen = document.getElementById('correctoincorrectoTrivia');
        imagen.style.opacity = 1; // Mostrar la imagen
        imagen.classList.add('imagen-rebote');
        
    } else {
        document.getElementById('correctoincorrectoTrivia').src = 'IncorrectoNew.png';
        document.getElementById('resCorrectaTrivia').textContent = ` ${currentQuestion.respuestacorrecta}`;
        vidas--;
        document.getElementById('vidas').textContent = vidas;
        const imagen = document.getElementById('correctoincorrectoTrivia');
        imagen.style.opacity = 1; // Mostrar la imagen
        imagen.classList.add('imagen-rebote');
        document.getElementById('vidas').classList.add('imagen-rebote');
        if (vidas <= 0) {
            alert('¡Has perdido todas tus vidas!');
            location.reload(); 
            // Puedes agregar lógica adicional para reiniciar el juego o terminarlo
        }
    } 
    respuestaContainer.style.display = 'flex';
    document.getElementById('respuesta-containerTrivia').style.display = 'flex';
    document.body.style.backgroundColor = '#a267f5ab'; 
    document.getElementById('pregunta-containerTrivia').style.display = 'none';
    const mainfo = document.getElementById('mainfoTrivia');
    const textoCompleto = currentQuestion.masInfo;
    const textoCorto = textoCompleto.length > 100 ? textoCompleto.substring(0, 100) + '...' : textoCompleto;
    mainfo.textContent = textoCorto; 
    const verMasButton = document.createElement('button');
    verMasButton.textContent = 'Ver más';
    verMasButton.id = 'verMasButton';
    verMasButton.addEventListener('click', () => {
            if (verMasButton.textContent == 'Ver más') {
                mainfo.textContent = currentQuestion.masInfo;
                verMasButton.textContent = 'Ver menos';
                mainfo.appendChild(verMasButton);
            } else {
                mainfo.textContent = textoCorto;
                verMasButton.textContent = 'Ver más';
                mainfo.appendChild(verMasButton);
            }
        });
    mainfo.appendChild(verMasButton);  
}
document.getElementById('continuartrivia').addEventListener('click', function() {
        currentQuestionIndexTrivia++;
        console.log(currentQuestionIndexTrivia)
        document.getElementById('respuesta-containerTrivia').style.display = 'none';
        mostrarPreguntaTrivia();
    });

// Algoritmo de Amor sin violencia:
let index = 0; 
function createQuestionElements() {
    const form = document.getElementById('evaluationForm');
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        if (index === 0) questionDiv.classList.add('active');

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `${index + 1}. ${question}`;
        questionDiv.appendChild(questionTitle);

        ['Si', 'A veces', 'Rara vez', 'No'].forEach(option => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = option;
            button.onclick = () => selectOption(button, index);
            questionDiv.appendChild(button);
        });

        form.appendChild(questionDiv);
    });

    updateProgressBar();
}

function selectOption(button, index) {
    const questionDiv = document.querySelectorAll('.question')[index];
    const buttons = questionDiv.querySelectorAll('button');

    buttons.forEach(btn => {
        btn.classList.remove('selected');
    });
    button.classList.add('selected');
}

function nextQuestion() {
    const currentQuestionDiv = document.querySelector('.question.active');
    const selectedButton = currentQuestionDiv.querySelector('button.selected');

    if (!selectedButton) {
        alert("Por favor, responde a la pregunta antes de continuar.");
        return;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionDiv.classList.remove('active');
        currentQuestionIndex++;
        document.querySelectorAll('.question')[currentQuestionIndex].classList.add('active');
        updateProgressBar();
    } else {
        evaluate();
        document.getElementById('nextButton').style.display = 'none';
    }
}

function updateProgressBar() {
    const progressBarInner = document.getElementById('progressBarInner');    
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBarInner.style.width = `${progress}%`;
}

function evaluate() {
    const form = document.getElementById('evaluationForm');
    let score = 0;
    document.querySelectorAll('.question').forEach((questionDiv, index) => {
        const selectedButton = questionDiv.querySelector('button.selected');
        const value = selectedButton.textContent;
        if (value === 'Si') {
            score += 3;
        } else if (value === 'A veces') {
            score += 2;
        } else if (value === 'Rara vez') {
            score += 1;
        }
    });

    const resultDiv = document.getElementById('result');
    let message = '';

    if (score >= 45) {
        message = 'Tu relación presenta muchos signos de violencia. Es importante buscar ayuda profesional.';
    } else if (score >= 30) {
        message = 'Tu relación tiene varios signos de violencia. Es recomendable que busques apoyo.';
    } else if (score >= 15) {
        message = 'Tu relación presenta algunos signos de violencia. Mantente alerta y considera hablar con alguien de confianza.';
    } else {
        message = 'Tu relación parece ser saludable. Mantén una comunicación abierta y respetuosa.';
    }

    resultDiv.textContent = message;
    resultDiv.style.display = 'block';
}

// Algoritmo de infografía:
const photosPerPage = 9;
let currentPageInfo = 0;

function renderGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    const start = currentPageInfo * photosPerPage;
    const end = start + photosPerPage;
    const paginatedPhotos = photos.slice(start, end);
    paginatedPhotos.forEach(photo => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `<img src="${photo.url}" alt="${photo.description}" data-id="${photo.id}" loading="lazy" >`;
        gridContainer.appendChild(gridItem);
    });
}

function renderPaginationControlsInfo() {
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';
    const totalPages = Math.ceil(photos.length / photosPerPage);
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Anterior';
    prevButton.disabled = currentPageInfo === 0;
    prevButton.onclick = function() {
        if (currentPageInfo > 0) {
            currentPageInfo--;
            renderGrid();
            renderPaginationControlsInfo();
        }
    };
    paginationControls.appendChild(prevButton);
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Siguiente';
    nextButton.disabled = currentPageInfo === totalPages - 1;
    nextButton.onclick = function() {
        if (currentPageInfo< totalPages - 1) {
            currentPageInfo++;
            renderGrid();
            renderPaginationControlsInfo();
        }
    };
    paginationControls.appendChild(nextButton);
}

// Algoritmo contacto:
document.getElementById('message-container').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío automático del formulario
    const form = event.target;
        // Enviar el formulario manualmente
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Restablece los campos del formulario
                form.reset();
                alert("Mensaje enviado con éxito!");
            } else {
                alert("Hubo un problema al enviar el mensaje.");
            }
        }).catch(error => {
            alert("Hubo un problema al enviar el mensaje.");
        });
});


// Algoritmo del buscador:

function buscarPreguntas(term) {
    correctas = parseInt(document.getElementById('correctas').textContent);
    correctas = correctas + 10;
    document.getElementById('correctas').textContent = correctas;
    document.getElementById('search-suggestions').style.display = 'none';
    const searchTerm = term.toLowerCase();
    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = ''; // Limpiar resultados anteriores
    document.getElementById('search-results').style.display = 'none';

    if (searchTerm.trim()) {
        const results = preguntas.filter(p => 
            (p.pregunta && p.pregunta.toLowerCase().includes(searchTerm)) ||
            (p.respuesta && p.respuesta.toLowerCase().includes(searchTerm)) ||
            (p.masInfo && p.masInfo.toLowerCase().includes(searchTerm))
        );

        if (results.length > 0) {
            renderResults(results);
            document.getElementById('search-results').style.display = 'block';
        } else {
            const row = document.createElement('tr');
            row.innerHTML = `<td colspan="1">No se encontraron resultados.</td>`;
            resultsBody.appendChild(row);
            document.getElementById('search-results').style.display = 'block';
        }
    }
}

function renderResults(results) {
    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = '';

    const start = currentPage * resultsPerPage;
    const end = start + resultsPerPage;
    const paginatedResults = results.slice(start, end);

    paginatedResults.forEach(result => {
        const row = document.createElement('tr');
        row.className = 'result-row';
        row.dataset.respuesta = result.respuesta || 'No disponible';
        row.dataset.masInfo = result.masInfo || 'No disponible';
        row.innerHTML = `<td>${result.pregunta || 'Pregunta no disponible'}</td>`;
        row.onclick = function() {
            toggleMasInfo(this);
        };
        resultsBody.appendChild(row);

        const infoRow = document.createElement('tr');
        const infoCell = document.createElement('td');
        infoCell.colSpan = 1;
        infoCell.className = 'additional-info';
        infoCell.innerHTML = `
            <strong>Más Información:</strong> ${result.masInfo || 'No disponible'}
        `;
        infoCell.style.display = 'none'
        infoRow.appendChild(infoCell);
        resultsBody.appendChild(infoRow);
    });

    renderPaginationControls(results.length);
}

function renderPaginationControls(totalResults) {
    const paginationContainer = document.getElementById('pagination-controls') || document.createElement('div');
    paginationContainer.id = 'pagination-controls';
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    if (totalPages > 1) {
        if (currentPage > 0) {
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Anterior';
            prevButton.id = 'prev-button';
            prevButton.onclick = function() {
                currentPage--;
                renderResults(preguntas.filter(p => 
                    (p.pregunta && p.pregunta.toLowerCase().includes(document.getElementById('search-bar').value.toLowerCase()))
                ));
            };
            paginationContainer.appendChild(prevButton);
        }

        if (currentPage < totalPages - 1) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Siguiente';
            nextButton.id = 'next-button';
            nextButton.onclick = function() {
                currentPage++;
                renderResults(preguntas.filter(p => 
                    (p.pregunta && p.pregunta.toLowerCase().includes(document.getElementById('search-bar').value.toLowerCase()))
                ));
            };
            paginationContainer.appendChild(nextButton);
        }
    }

    document.getElementById('search-results').appendChild(paginationContainer);
}

function toggleMasInfo(row) {
    const nextRow = row.nextElementSibling;
    if (nextRow && nextRow.querySelector('.additional-info')) {
        const infoCell = nextRow.querySelector('.additional-info');
        infoCell.style.display = infoCell.style.display === 'none' ? 'block' : 'none';
    }
}

document.getElementById('search-button').onclick = function() {
    currentPage = 0; // Reset page on new search
    const searchTerm = document.getElementById('search-bar').value;
    buscarPreguntas(searchTerm);
};

const suggestions = document.getElementsByClassName('search-suggestion');
for (let i = 0; i < suggestions.length; i++) {
    suggestions[i].onclick = function() {
        currentPage = 0; // Reset page on new search
        const searchTerm = this.textContent;
        document.getElementById('search-bar').value = searchTerm;
        buscarPreguntas(searchTerm);
    };
}

// Algoritmo del modal, para las imagenes:

function showModal(imageUrl) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = imageUrl;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

document.getElementById('imagenquees').onclick = function(event) {
    if (event.target.tagName === 'IMG') {
        showModal(event.target.src);
    }
};

document.getElementById('grid-container').onclick = function(event) {
    if (event.target.tagName === 'IMG') {
        showModal(event.target.src);
    }
};

document.getElementById('close-modal').onclick = closeModal;

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = getRandomInt(i + 1);
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
}

function spinRuleta() {
    const ruleta = document.getElementById('ruleta');
    const categoriaImagen = document.getElementById('categoria-imagen');
    const categoriaNombre = document.getElementById('categoria-nombre');
    const numCategorias = categorias.length;
    const segmentAngle = 360 / numCategorias;
    const duration = getRandomInt(5000) + 5000; // Duración aleatoria entre 5000ms y 10000ms
    const randomCategoryIndex = getRandomInt(numCategorias);
    const finalAngle = randomCategoryIndex * segmentAngle + segmentAngle / 2;
    const totalRotation = 360 * 5 + finalAngle; // 5 giros completos + ángulo final
    ruleta.style.transition = `transform ${duration / 1000}s ease-out`;
    ruleta.style.transform = `rotate(${totalRotation}deg)`;
    ruleta.style.transition = 'none';
    ruleta.style.transform = `rotate(0deg)`;
        setTimeout(() => {
            ruleta.style.transition = `transform ${duration / 1000}s ease-out`;
            ruleta.style.transform = `rotate(${totalRotation}deg)`;
        }, 50);
        setTimeout(() => {
            ruleta.style.transition = 'none';
            ruleta.style.transform = `rotate(${finalAngle}deg)`;
            // Actualizar la categoría seleccionada
            const categoriaSeleccionada = categorias[randomCategoryIndex];
            categoriaImagen.src = categoriaSeleccionada.imagen;
            categoriaNombre.textContent = categoriaSeleccionada.nombre;
            // Mostrar la pregunta correspondiente
            mostrarPregunta(categoriaSeleccionada.nombre);
            }, duration + 50);
        }

function mostrarPregunta(categoria) {                
    document.getElementById('ruleta').style.display = 'none';
    document.getElementById('senalar').style.display = 'none';
    const preguntaContainer = document.getElementById('pregunta-container');
    const preguntaElement = document.getElementById('pregunta');
    const respuestasContainer = document.getElementById('respuestas');
    const imagenElement = document.getElementById('imagenquees'); // Obtener el elemento de la imagen
    // Filtrar preguntas que no han sido respondidas
    const preguntasDisponibles = preguntas.filter(p => p.categoria === categoria && !preguntasCorrectas.includes(p));
    // Verificar si hay preguntas disponibles en la categoría
    if (preguntasDisponibles.length > 0) {
              // Seleccionar una pregunta aleatoria
              preguntaSeleccionada = preguntasDisponibles[getRandomInt(preguntasDisponibles.length)];   
              preguntaElement.textContent = preguntaSeleccionada.pregunta;
              respuestasContainer.innerHTML = '';
              const respuestas = [
                  preguntaSeleccionada.respuestacorrecta,
                  preguntaSeleccionada.respuesta1,
                  preguntaSeleccionada.respuesta2,
                  preguntaSeleccionada.respuesta3
              ];     
              shuffleArray(respuestas); // Mezclar respuestas
              respuestas.forEach((respuesta) => {
                  const boton = document.createElement('div');
                  boton.className = 'respuesta';
                  boton.textContent = respuesta;
                  boton.onclick = () => verificarRespuesta(respuesta, preguntaSeleccionada.respuestacorrecta);
                  respuestasContainer.appendChild(boton);
              });
      
        // Mostrar la imagen si la categoría es "¿Qué es?"
        if (categoria === "¿Qué es?") {
            imagenElement.src = preguntaSeleccionada.imagenUrl;
            imagenElement.alt = preguntaSeleccionada.pregunta;
            imagenElement.style.display = 'block'; // Asegurarse de que la imagen se muestre
        } else {
            imagenElement.style.display = 'none'; // Ocultar la imagen si no corresponde a la categoría "¿Qué es?"
        }
      
        preguntaContainer.style.display = 'flex';
    } else {
        // Mostrar mensaje si no hay preguntas disponibles
        preguntaElement.textContent = 'No hay más preguntas disponibles en esta categoría.';
        respuestasContainer.innerHTML = '';
        imagenElement.style.display = 'none'; // Ocultar la imagen si no hay preguntas disponibles
        preguntaContainer.style.display = 'flex';
    }
}
function verificarRespuesta(respuestaSeleccionada, respuestaCorrecta) {
    if (respuestaSeleccionada === respuestaCorrecta) {
        correctas++;
        preguntasCorrectas.push(preguntaSeleccionada); // Guardar la pregunta como correcta
        document.getElementById('correctas').textContent = correctas;
        window.AppInventor.setWebViewString("puntos/" + correctas);
        document.getElementById('correctoincorrecto').src = 'CorrectoNew.png';
        document.getElementById('correctas').classList.add('imagen-rebote');
        const imagen = document.getElementById('correctoincorrecto');
        imagen.style.opacity = 1; // Mostrar la imagen
        imagen.classList.add('imagen-rebote');
                
    } else {
        vidas--;
        document.getElementById('vidas').textContent = vidas;
        document.getElementById('correctoincorrecto').src = 'IncorrectoNew.png';
        const imagen = document.getElementById('correctoincorrecto');
        imagen.style.opacity = 1; // Mostrar la imagen
        imagen.classList.add('imagen-rebote');
        document.getElementById('vidas').classList.add('imagen-rebote');
        if (vidas <= 0) {
            if (correctas>=10) {
                document.getElementById("closeAlertVidasSi").style.display = "flex"; 
                document.getElementById("customAlertVidas").style.display = "flex";
                document.getElementById("alermensajecambiar").textContent ="¿Querés cambiar 10 puntos por 1 vida nueva?";
            }else{
                document.getElementById("closeAlertVidasSi").style.display = "none"; 
                document.getElementById("customAlertVidas").style.display = "flex";
                document.getElementById("alermensajecambiar").textContent ="Si usas el buscador o aprendes una lección podes ganar puntos.";
            }
        }
    }
        
    // Ocultar la pregunta y mostrar la ruleta nuevamente
    document.getElementById('pregunta-container').style.display = 'none';
    document.getElementById('respuesta-container').style.display = 'flex';
    document.body.style.backgroundColor = '#a267f5ab';
    document.getElementById('preguntaCorrecta').textContent = preguntaSeleccionada.pregunta;
    document.getElementById('resCorrecta').textContent = preguntaSeleccionada.respuestacorrecta; 
    const mainfo = document.getElementById('mainfo');
    const textoCompleto = preguntaSeleccionada.masInfo;
    const textoCorto = textoCompleto.length > 100 ? textoCompleto.substring(0, 100) + '...' : textoCompleto;
    mainfo.textContent = textoCorto; 
    const verMasButton = document.createElement('button');
    verMasButton.textContent = 'Ver más';
    verMasButton.id = 'verMasButton';
    verMasButton.addEventListener('click', () => {
        if (verMasButton.textContent == 'Ver más') {
            mainfo.textContent = preguntaSeleccionada.masInfo;
            verMasButton.textContent = 'Ver menos';
            mainfo.appendChild(verMasButton);
            } else {
                mainfo.textContent = textoCorto;
                verMasButton.textContent = 'Ver más';
                mainfo.appendChild(verMasButton);
            }
        });
        mainfo.appendChild(verMasButton); 
    }
    document.getElementById("closeAlertVidasSi").addEventListener("click", function() {
        vidas = 1;
        correctas = correctas - 10;
        document.getElementById('correctas').textContent = correctas;
        document.getElementById('vidas').textContent = vidas;
        document.getElementById('vidas').classList.add('imagen-rebote');
        document.getElementById('correctas').classList.add('imagen-rebote');
        document.getElementById("customAlertVidas").style.display = "none";
    });
    document.getElementById("closeAlertVidasNo").addEventListener("click", function() {
        document.getElementById("customAlertVidas").style.display = "none";
        document.getElementById('pantallaruleta').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
        document.getElementById('playButton2').style.display = 'flex';
        document.getElementById('pantallatrivia').style.display = 'none';
        document.getElementById('game-container').style.display = 'none'; 
        document.getElementById('pregunta-container').style.display = 'none'; 
        document.getElementById('respuesta-container').style.display = 'none'; respuesta-container
        document.body.style.backgroundColor = '#ffffff';

    });
    

document.getElementById('continuar').onclick = function() {
    document.getElementById('respuesta-container').style.display = 'none';
    document.body.style.backgroundColor = 'white';
    document.getElementById('ruleta').style.display = 'block';
    document.getElementById('senalar').style.display = 'block';
    spinRuleta();
};

// Algoritmo Lecciones
const lessons = [
    { 
        text: "¡¡Hola!! ¿Cómo están? Hoy vamos a hablar sobre la Pubertad. Empecemos preguntándonos: ¿Cómo te diste cuenta que estabas entrando en la pubertad? ¿Cómo te diste cuenta que estás más grande? Quizás porque la ropa que usabas hace unos años ya no te queda. O porque tenés opiniones diferentes o formas nuevas de ver el mundo. Eso se debe a que estás creciendo. Durante toda nuestra vida pasamos por distintas etapas. Seguramente ahora estás pasando por la pubertad, que es paso de la niñez hacia la adolescencia. La pubertad marca el fin de la niñez, y nos damos cuenta porque experimentamos grandes cambios tanto físicos, como emocionales y psicológicos. Y para qué se dan tantos cambios, para alcanzar la capacidad de reproducirnos.", 
        questions: [
            { question: "¿Durante la pubertad solo se experimentan cambios físicos?", correctAnswer: false  },
            { question: "¿La pubertad es la etapa de transición de la niñez hacia la adolescencia?", correctAnswer: true }
        ], 
        imagen: ""
    },
    { 
        text: "En las mujeres, los cambios más importantes son: Crecimiento de los senos, aparición del vello corporal, aumento del sudor, los ovarios comienzan a ovular y con eso aparecerá la menstruación. En los varones, los cambios que se dan son: Crecimiento de los testículos y el pene, aparición del vello corporal, aumento del sudor, cambios en la voz, los testículos empezarán a producir espermatozoides y con eso aparecerá la eyaculación. Esta etapa trae cambios hormonales que pueden afectar tus emociones, como cambios de humor, irritabilidad y atracción hacia otras personas.  Puede ser que también comiences a cuestionar a tus padres y a desear más libertad. Estos cambios ocurren a su propio ritmo, por lo que es importante no compararse con los demás.", 
        questions: [
            {  question: "¿Los cambios físicos y emocionales durante esta etapa ocurren al mismo ritmo para todas las personas?", correctAnswer: false },
            { question: "¿En los varones, los testículos comienzan a producir espermatozoides y esto lleva a la aparición de la eyaculación.?", correctAnswer: true }
        ], 
        imagen: ""
    },
    { 
        text: "Si bien los cambios que se dan en la pubertad no permiten alcanzar la capacidad de reproducirnos, eso no quiere decir que ya tenemos que salir a reproducirnos… Todavía hay mucho que aprender. Entre los cambios físicos que nombramos aparecieron dos palabras que quizás no conocías. Una es la eyaculación y otra la menstruación. ¿Escuchaste hablar de cada una de ellas? Para hablar de eyaculación conviene que empecemos viendo cómo está formado el aparato sexual masculino. Está formado por órganos internos y externos. Los principales órganos externos son los testículos, el epidídimo y el pene. Los testículos se alojan en el escroto. Las estructuras internas son los conductos deferentes y glándulas como la próstata. ", 
        questions: [
            { question: "¿El escroto es el lugar donde se alojan los testículos?", correctAnswer: true },
            { question: "¿Entre los principales órganos internos están los testículos y el pene?", correctAnswer: false }
        ], 
        imagen: ""
    },
    { 
        text: "Al llegar la adolescencia los testículos comienzan a producir a los espermatozoides, para lo cual necesitan estar a una temperatura menor a la corporal, por eso están alojados en el escroto. Cuando se produce una estimulación sexual los espermatozoides viajan por los conductos deferentes. A su vez las vesículas seminales y la próstata se contraen, expulsando el semen que se combina con los espermatozoides y viajan por la uretra. Al llegar al orgasmo, o al punto de mayor tensión sexual, el semen es expulsado a través del pene hacia afuera, produciendo la eyaculación. La primera eyaculación se llama espermarquia. A partir de este momento, si los espermatozoides logran llegar a la vagina, podrían fecundar un óvulo y producir un embarazo.", 
        questions: [
            { question: "¿Los testículos necesitan estar a una temperatura mayor a la corporal para producir espermatozoides?", correctAnswer: false },
            { question: "¿El semen y los espermatozoides se combinan antes de viajar por la uretra?", correctAnswer: true }
        ], 
        imagen: ""
    },   
    { 
        text: "Ahora hablemos de menstruación. Recibe muchos nombres como el periodo o la regla. En el aparato sexual femenino podemos diferenciar dos partes, una externa que es la más visible, y otra interna que no se puede ver a simple vista. En la parte externa podemos diferenciar la vulva, formada por los labios internos y externos, y el clítoris cuya función es brindar placer. Además hay varios orificios: el de la uretra por donde sale la orina, y el orificio de la vagina por donde sale la menstruación. Por el orificio de la vagina se llega al útero, luego a las trompas uterinas y de ahí a los ovarios. Estas son unas glándulas en las que se forman los óvulos y se producen las hormonas estrógeno y progesterona. ", 
        questions: [
            { question: "¿El clítoris es parte del aparato sexual femenino y está relacionado con el placer?", correctAnswer: true },
            { question: "¿El orificio de la uretra es por donde sale la menstruación?", correctAnswer: false }
        ], 
        imagen: ""
    },   
    { 
        text: "A partir de la adolescencia el útero se empieza a preparar para recibir un posible embarazo. Las paredes del útero se van engrosando con el pasar de los días. Luego sucede la ovulación, es decir la salida del óvulo del ovario. Si en ese momento, se tiene una relación sexual sin protección y un espermatozoides entra por el útero llegando a las trompas uterinas, se da la fecundación. El óvulo fecundado viaja hasta el útero y se implanta en sus paredes. Pero, si después de la salida del óvulo no sucede la fecundación, este se desintegra y entre los 14 días aproximadamente el revestimiento que se había formado en el útero se termina cayendo como coágulos de sangre a través de la vagina.", 
        questions: [
            { question: "¿Si no ocurre la fecundación, el óvulo fecundado se implanta en las paredes del útero?", correctAnswer: false },
            { question: "¿La ovulación es la salida del óvulo del ovario?", correctAnswer: true }
        ], 
        imagen: ""
    },   
    { 
        text: "Este proceso entre una menstruación y otra puede durar entre 25 a 31 días aproximadamente. Y el sangrado o menstruación dura entre 5 a 7 días, también aproximadamente. La primera menstruación se llama menarquía, y antes que se de la primera menstruación se da la primera ovulación, por lo que a partir de este momento si un espermatozoides logra llegar a la vagina durante una penetración en una relación sexual, podrían fecundar un óvulo y producir un embarazo.", 
        questions: [
            { question: "¿El sangrado menstrual puede durar entre 5 a 7 días aproximadamente.?", correctAnswer: true },
            { question: "¿El ciclo menstrual entre una menstruación y otra dura siempre exactamente 28 días?", correctAnswer: false }
        ], 
        imagen: ""
    }
];


let currentLesson = 0;
let currentQuestion = 0;
let words = [];
let currentWord = 0;
let isPlaying = false;


const textElement = document.getElementById("text");
const progressElement = document.getElementById("progress");
const questionElement = document.getElementById("leccionpregunta");
const questionTextElement = document.getElementById("question-text");
const nextLessonElement = document.getElementById("next-lesson");
const correctasElement = document.getElementById("correctas"); // Elemento para mostrar puntos
const felicitacionesElement = document.getElementById("felicitaciones2"); // Elemento para mostrar felicitaciones

function displayNextWord() {
    if (currentWord < words.length) {
        textElement.innerHTML += words[currentWord] + " ";
        updateProgress();
        currentWord++;
        if (isPlaying) {
            setTimeout(displayNextWord, 400); // Aparece una palabra cada 400ms
        }
    } else {
        showQuestion();
    }
}

function updateProgress() {
    const progress = (currentWord / words.length) * 100;
    progressElement.style.width = progress + "%";
}

function playLesson() {
    if (!isPlaying) {
        isPlaying = true;
        displayNextWord();
        speakText();
    }
}

function pauseLesson() {
    isPlaying = false;
    window.speechSynthesis.cancel();
}

function restartLesson() {
    isPlaying = false;
    currentWord = 0;
    textElement.innerHTML = "";
    progressElement.style.width = "0%";
    window.speechSynthesis.cancel();
    playLesson();
}

function speakText() {
    const utterance = new SpeechSynthesisUtterance(lessons[currentLesson].text);
    speechSynthesis.speak(utterance);
}

function showQuestion() {
    const question = lessons[currentLesson].questions[currentQuestion]; // Obtener la pregunta actual
    questionTextElement.textContent = question.question;
    questionElement.style.display = "block";
}

function handleAnswer(isTrue) {
    const question = lessons[currentLesson].questions[currentQuestion];
    const isCorrect = (isTrue === question.correctAnswer);
    if (isCorrect) {
        correctas = correctas + 1; // Incrementar el puntaje
        correctasElement.textContent = correctas; // Mostrar el puntaje actualizado
        document.getElementById("customAlert").style.display = "flex"; 
        document.getElementById("alertImagen").src= "CorrectoNew.png"
    }else{
        document.getElementById("customAlert").style.display = "flex"; 
        document.getElementById("alertImagen").src= "IncorrectoNew.png"
    }

    questionElement.style.display = "none";
    currentQuestion++;
    if (currentQuestion < lessons[currentLesson].questions.length) {
        // Si hay más preguntas, mostrar la siguiente
        showQuestion();
    } else {
        // Si no hay más preguntas, mostrar el botón de siguiente lección
        currentQuestion = 0; // Reiniciar el contador de preguntas para la siguiente lección
        nextLessonElement.style.display = "block";
    }
}

document.getElementById("closeAlert").addEventListener("click", function() {
    document.getElementById("customAlert").style.display = "none";
});


function nextLesson() {
    currentLesson++;
    if (currentLesson < lessons.length) {
        currentWord = 0;
        textElement.innerHTML = "";
        progressElement.style.width = "0%";
        nextLessonElement.style.display = "none";
        words = lessons[currentLesson].text.split(" ");
        isPlaying = false; // Reset isPlaying to ensure it starts correctly
        playLesson(); // Llamar a playLesson nuevamente para iniciar la nueva lección
    } else {
        showCongratulations(); // Mostrar felicitaciones al terminar todas las lecciones
    }
}

function showCongratulations() {
    textElement.style.display = "none";
    progressElement.style.display = "none";
    nextLessonElement.style.display = "none";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    felicitacionesElement.style.display = "flex"; // Mostrar mensaje de felicitaciones
}

document.getElementById("play").addEventListener("click", playLesson);
document.getElementById("pause").addEventListener("click", pauseLesson);
document.getElementById("restart").addEventListener("click", restartLesson);
document.getElementById("true-btn").addEventListener("click", () => handleAnswer(true));
document.getElementById("false-btn").addEventListener("click", () => handleAnswer(false));
document.getElementById("next-btn").addEventListener("click", nextLesson);

document.getElementById("restart-btn").addEventListener("click", function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('felicitaciones2').style.display = 'none';
    document.body.style.backgroundColor = '#ffffff';
});

// Carga de pantalla y botones principales

document.getElementById('contact-icon').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('message-container').style.display = 'flex';
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';    
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
});

document.getElementById('repor1').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('message-container').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    document.getElementById('subject').value = preguntaSeleccionada.pregunta;
        document.getElementById('message').value = "¡Hola! Encontré un error en esta pregunta :" + preguntaSeleccionada.pregunta +" El error que detecté es ...";
});
document.getElementById('repor').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('message-container').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    document.getElementById('subject').value = preguntaSeleccionada.pregunta;
    document.getElementById('message').value = "¡Hola! Encontré un error en esta pregunta :" + preguntaSeleccionada.pregunta +" El error que detecté es...";  
});

      
document.getElementById('home-icon').addEventListener('click', function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    document.body.style.backgroundColor = '#ffffff';
});
      
document.getElementById('search-icon').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('search-container').style.display = 'flex';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    if (vidas==0) {
        vidas = 1;
        document.getElementById('vidas').textContent = vidas;
        document.getElementById('vidas').classList.add('imagen-rebote');
    }else{
        correctas = correctas + 10;
        document.getElementById('correctas').textContent = correctas;
        document.getElementById('correctas').classList.add('imagen-rebote');
    }
});

document.getElementById('corazon-icon').addEventListener('click', function() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'flex';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById('evaluationForm').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    createQuestionElements()
});

document.getElementById('playButton2').addEventListener('click', function() {
    if (vidas>0) {
        document.getElementById('pantallaruleta').style.display = 'flex';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('playButton2').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    spinRuleta();
    }else{
        document.getElementById("closeAlertVidasSi").style.display = "none"; 
        document.getElementById("customAlertVidas").style.display = "flex";
        document.getElementById("alermensajecambiar").textContent ="Si usas el buscador o aprendes una lección podes ganar puntos.";
    }
    
});

document.getElementById('trivia-icon').addEventListener('click', function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('playButton2').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'flex';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    displayCards(1);
});

document.getElementById('infografia-icon').addEventListener('click', function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'flex';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    renderGrid();
    renderPaginationControlsInfo();
});

document.getElementById('circulo2').addEventListener('click', function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    document.getElementById('playButton2').style.display = 'flex';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "none";
    document.getElementById("controls").style.display = "none";
    document.getElementById("leccionpregunta").style.display = "none";
    startGame()
});

document.getElementById('Leccion1').addEventListener('click', function() {
    document.getElementById('pantallaruleta').style.display = 'none';
    document.getElementById('pantallainfografia').style.display = 'none';
    document.getElementById('search-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('amorcontainer').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    document.getElementById('pantallatrivia').style.display = 'none';
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('playButton2').style.display = 'none';
    document.getElementById('boxlecciones').style.display = 'flex';
    document.getElementById('text').style.display = 'flex';
    document.getElementById('text').textContent = "";
    document.getElementById("progress-bar2").style.display = "flex";
    document.getElementById("controls").style.display = "flex";
    document.getElementById("leccionpregunta").style.display = "none";
    if (vidas==0) {
        vidas = 1;
        document.getElementById('vidas').textContent = vidas;
        document.getElementById('vidas').classList.add('imagen-rebote');
    }else{
        correctas = correctas + 10;
        document.getElementById('correctas').textContent = correctas;
        document.getElementById('correctas').classList.add('imagen-rebote');
    }
    currentLesson = 0;
    currentQuestion = 0;
    words = [];
    currentWord = 0;
    isPlaying = false;
    words = lessons[currentLesson].text.split(" ");
});