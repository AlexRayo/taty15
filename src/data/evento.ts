// Toda la información de la invitación está aquí.
// Si algo cambia (horas, textos, número), edítalo en este archivo.

export const evento = {
  quinceanera: 'Tatiana Elizabeth',
  monograma: 'T',
  ciudad: 'Estelí, Nicaragua',

  padres: {
    papa: 'Christian Fuertes Pérez',
    mama: 'Karla Somarriba Rayo',
  },

  // Fecha y hora de inicio (hora de Nicaragua, UTC-6)
  fechaISO: '2026-12-05T17:00:00-06:00',
  fecha: {
    diaSemana: 'Sábado',
    dia: 5,
    mes: 'Diciembre',
    anio: 2026,
  },

  mensajeInicio: [
    'Con la bendición de Dios y el amor de mis padres, me siento muy feliz de llegar a este momento de mi vida.',
    'Ahora empieza un camino que conduce a un mundo de sueños e ilusiones, que con fe, humildad y esperanza deseo cumplir.',
  ],

  mensajeCierre: [
    'He aprendido que estar con quienes quiero y aprecio es suficiente para ser feliz.',
    'Ten por seguro que el tiempo y estas letras se borrarán, pero el recuerdo de tu presencia esta noche nunca lo olvidaré.',
  ],

  lugares: [
    {
      titulo: 'Misa de acción de gracias',
      lugar: 'Iglesia del Colegio Regnum Dei School',
      hora: '5:00 PM',
      icono: 'iglesia',
    },
    {
      titulo: 'Recepción',
      lugar: 'Quinta Ebenezer',
      hora: '6:20 PM',
      icono: 'copas',
    },
  ],

  itinerario: [
    { hora: '5:00 PM', actividad: 'Iglesia', icono: 'iglesia' },
    { hora: '6:20 PM', actividad: 'Llegada', icono: 'corona' },
    { hora: '6:30 PM', actividad: 'Vals y dedicatorias', icono: 'vals' },
    { hora: '7:00 PM', actividad: 'Sesión fotográfica', icono: 'camara' },
    { hora: '8:00 PM', actividad: 'Cena', icono: 'cena' },
    { hora: '9:00 PM', actividad: 'Fiesta', icono: 'fiesta' },
  ],

  vestimenta: {
    tipo: 'Formal',
    nota: 'Con mucho cariño les pedimos evitar los tonos rosa y dorado, ya que están reservados exclusivamente para la quinceañera.',
  },

  regalo: {
    titulo: 'Lluvia de sobres',
    texto: 'Tu presencia es el regalo más importante para mí. Sin embargo, si deseas tener un detalle conmigo, la lluvia de sobres es mi sugerencia.',
  },

  whatsapp: {
    numero: '50588546107',
    visible: '+505 8854 6107',
    mensaje: '¡Hola! Confirmo mi asistencia a los XV años de Tatiana Elizabeth el sábado 5 de diciembre. Mi nombre es: ',
  },
} as const;

export type Icono =
  | 'iglesia'
  | 'copas'
  | 'corona'
  | 'vals'
  | 'camara'
  | 'cena'
  | 'fiesta';
