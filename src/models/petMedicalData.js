import { model, Schema } from "mongoose";

const PetMedicalDataSchema = new Schema({
  idPet: {
    type: String,
    required: [true, 'El ID de mascota es obligatorio.']
  },

  anamnesis: {
    type: String
  },

  inicio: {
    type: String
  },

  course: {
    agudo: {
      type: Boolean
    },
    cronico: {
      type: Boolean
    },
    incrementado: {
      type: Boolean
    },
    reducido: {
      type: Boolean
    },
    estatico: {
      type: Boolean
    },
    recurrencia: {
      type: Boolean
    },
    enfermedadGeneral: {
      type: String
    }
  },

  vision: {
    dia: {
      type: String
    },
    noche: {
      type: String
    },
    desorientacion: {
      type: String
    }
  },

  tratEvo: {
    type: String
  },

  // A PARTIR DE ACÁ LOS DATOS TIPO ARRAYs SE REFIEREN A ARREGLOS DE 2 DATOS BOOLEANOS QUE CORRESPONDEN A CADA OJO: índice 0 para el DERECHO, índice 1 para el IZQUIERDO
  sistGloboOcular: {
    normal: {
      type: Array
    },
    desviado: {
      type: Array
    },
    atrofia: {
      type: Array
    },
    exoft: {
      type: Array
    },
    enoft: {
      type: Array
    },
    microft: {
      type: Array
    },
    buft: {
      type: Array
    },
    rPDirecto: {
      dosSeg: {
        type: Array
      },
      lento: {
        type: Array
      },
      nulo: {
        type: Array
      }
    },
    rPCons: {
      dosSeg: {
        type: Array
      },
      lento: {
        type: Array
      },
      nulo: {
        type: Array
      }
    },
    deslumbram: {
      plus: {
        type: Array
      },
      minus: {
        type: Array
      }
    },
    amenaza: {
      plus: {
        type: Array
      },
      minus: {
        type: Array
      }
    },
    deambulacion: {
      plus: {
        type: Array
      },
      minus: {
        type: Array
      }
    },
    pio: {
      comment: {
        type: Array
      },
      down: {
        type: Array
      },
      up: {
        type: Array
      }
    },
    presRetrobul: {
      down: {
        type: Array
      },
      up: {
        type: Array
      }
    }
  },

  areaOrbital: {
    ganglioMandibular: {
      type: Array
    }
  },

  sistLagrimal: {
    normal: {
      type: Array
    },
    epifora: {
      type: Array
    },
    schimer: {
      type: Array
    },
    dispFluoresc: {
      type: Array
    },
    pasajeFluor: {
      type: Array
    },
    puntos: {
      type: Array
    },
    normales: {
      type: Array
    },
    comentario: {
      type: Array
    },
    cateterismo: {
      plus: {
        type: Array
      },
      minus: {
        type: Array
      }
    }
  },

  parpados: {
    normales: {
      type: Array
    },
    triquiasis: {
      type: Array
    },
    distiquiasis: {
      type: Array
    },
    entropion: {
      type: Array
    },
    electropion: {
      type: Array
    },
    bleferospasmo: {
      type: Array
    }
  },

  tercerParpado: {
    protrGlan: {
      type: Array
    },
    hipertrGlan: {
      type: Array
    }
  },

  conjuntivas: {
    normales: {
      type: Array
    },
    vasosSup: {
      type: Array
    },
    vasosProf: {
      type: Array
    },
    quemosis: {
      type: Array
    },
    foliculos: {
      type: Array
    },
    secreciones: {
      acuosa: {
        type: Array
      },
      mucoide: {
        type: Array
      },
      purulenta: {
        type: Array
      }
    }
  },

  corneaEscle: {
    normal: {
      type: Array
    },
    edema: {
      type: Array
    },
    endotelitis: {
      type: Array
    },
    vasc: {
      type: Array
    },
    pigm: {
      type: Array
    },
    ulcera: {
      type: Array
    },
    fluoresceina: {
      type: Array
    },
    rosaDeBengala: {
      type: Array
    }
  },

  iris: {
    color: {
      normal: {
        type: Array
      },
      otro: {
        descripcion: {
          type: Array
        },
        check: {
          type: Array
        }
      }
    },
    pupila: {
      normal: {
        type: Array
      },
      irregular: {
        type: Array
      },
      midriasis: {
        type: Array
      },
      miosis: {
        type: Array
      }
    },
    atrofia: {
      type: Array
    },
    iridonesis: {
      type: Array
    },
    sinequias: {
      type: Array
    },
    mPupilar: {
      type: Array
    }
  },

  camAntYPost: {
    normal: {
      type: Array
    },
    desviado: {
      type: Array
    },
    atrofia: {
      type: Array
    },
    exoft: {
      type: Array
    }
  },

  cristalino: {
    normal: {
      type: Array
    },
    subluxacion: {
      type: Array
    },
    esclerosisSenil: {
      type: Array
    },
    luxacion: {
      anterior: {
        type: Array
      },
      posterior: {
        type: Array
      }
    },
    catarata: {
      check: {
        type: Array
      },
      comentario: {
        type: Array
      }
    }
  },

  esquema: {
    // FALTA CREAR.
  },

  estudiosARealizar: {
    analisis: {
      hemograma: {
        type: Boolean
      },
      uremia: {
        type: Boolean
      },
      creatinina: {
        type: Boolean
      },
      glucemia: {
        type: Boolean
      },
      got: {
        type: Boolean
      },
      gpt: {
        type: Boolean
      },
      fas: {
        type: Boolean
      },
      pifVifVilef: {
        type: Boolean
      },
      toxoplasmosis: {
        type: Boolean
      },
      leptospirosis: {
        type: Boolean
      },
      criptococosis: {
        type: Boolean
      },
      neosporidiosis: {
        type: Boolean
      },
      brucelosis: {
        type: Boolean
      },
      lehismaniasis: {
        type: Boolean
      }
    },
    ecografia: {
      check: {
        type: Boolean
      },
      comment: {
        type: String
      }
    },
    electroRiesgos: {
      check: {
        type: Boolean
      },
      comment: {
        type: String
      }
    }
  },

  diagnostico: {
    type: String
  },

  pronostico: {
    type: String
  },

  tratamiento: {
    type: String
  }
})

export default model('medicalData', PetMedicalDataSchema)