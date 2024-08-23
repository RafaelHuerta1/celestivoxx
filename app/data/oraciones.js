



export   function getOracionEnfermos(index, nombre){
    console.log(index, nombre)

    const oracionesEnfermos = [
        {
            "id": 1,
            "categoria": "Oración por los Enfermos",
            "oracion": `Amado Padre Celestial,\n\nTe rogamos que envíes tu poder sanador sobre ${nombre}. Que ${nombre} sienta tu amor y tu paz en estos momentos difíciles. Fortalece su espíritu y dale la serenidad necesaria para enfrentar esta enfermedad.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`
        },
        {
            "id": 2,
            "categoria": "Oración por los Enfermos",
            "oracion": `Querido Señor,\n\nTe pedimos con humildad que derrames tu gracia sobre ${nombre}. Que tu amor y tu paz llenen su corazón mientras enfrenta esta enfermedad. Dale la fuerza y el coraje para superar estos momentos difíciles.\n\nJesucristo, en tu infinita misericordia, escucha nuestras súplicas y concede a ${nombre} la sanación que necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su espíritu.\n`
        },
        {
            "id": 3,
            "categoria": "Oración por los Enfermos",
            "oracion": `Padre Amado,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`
        },
        {
            "id": 4,
            "categoria": "Oración por los Enfermos",
            "oracion": `Dios amado, te agradecemos por todas las bendiciones que has derramado sobre nuestras vidas. En este momento de reflexión, queremos expresar nuestra más profunda gratitud por tu amor inagotable. Te agradecemos por todo lo que nos has dado y por las lecciones que nos has enseñado. 
        
            Hoy, especialmente, queremos pedir por la salud de ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío. Que nuestra gratitud sea constante y que vivamos nuestras vidas de acuerdo con tu voluntad. Amén.`
        },
        {
            "id": 5,
            "categoria": "Oración por los Enfermos",
            "oracion": `Señor, en medio de la agitación y el caos que nos rodea, te pedimos que traigas tu paz que sobrepasa todo entendimiento. Que tu presencia tranquilizadora llene los corazones de ${nombre} y nos dé la fortaleza para enfrentar los desafíos de la vida. Te pedimos que traigas paz a los hogares, comunidades y al mundo entero. Que tu paz reine sobre nosotros. Amén.`
        },
        {
            "id": 6,
            "categoria": "Oración por los Enfermos",
            "oracion": `Señor Todopoderoso,\n\nTe pedimos que envíes tu luz sanadora sobre ${nombre}. Que ${nombre} sienta tu amor y tu presencia en cada momento de su enfermedad. Fortalece su cuerpo y espíritu, y dale la paz necesaria para superar este desafío.\n\nJesucristo, en tu infinita misericordia, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su fe.\n`
        },
        {
            "id": 7,
            "categoria": "Oración por los Enfermos",
            "oracion": `Querido Padre Celestial,\n\nTe pedimos que derrames tu gracia sanadora sobre ${nombre}. Que ${nombre} sienta tu paz y tu amor en estos momentos difíciles. Fortalece su espíritu y dale la serenidad necesaria para enfrentar esta enfermedad.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras súplicas y concede a ${nombre} la sanación que necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`
        },
        {
            "id": 8,
            "categoria": "Oración por los Enfermos",
            "oracion": `Padre Celestial,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`
        },
        {
            "id": 9,
            "categoria": "Oración por los Enfermos",
            "oracion": `Dios de misericordia,\n\nTe pedimos que derrames tu amor sanador sobre ${nombre}. Que ${nombre} sienta tu paz y tu presencia en estos momentos difíciles. Fortalece su espíritu y dale la serenidad necesaria para enfrentar esta enfermedad.\n\nJesucristo, en tu infinita bondad, escucha nuestras súplicas y concede a ${nombre} la sanación que necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su fe.\n`
        },
        {
            "id": 10,
            "categoria": "Oración por los Enfermos",
            "oracion": `Señor de la vida,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`
        }
    ];

    return oracionesEnfermos[index]
}

//export function getOracionesDifuntos()

export function getOracionDifuntos(index, nombre) {
    console.log(index, nombre);

    const oracionesDifuntos = [
        {
            "id": 1,
            "categoria": "Oración por los Difuntos",
            "oracion": `Dios misericordioso,\n\nEn este momento de dolor y pérdida, nos dirigimos a ti con corazones llenos de tristeza. Te pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito.\n\nSeñor, consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles. Que tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 2,
            "categoria": "Oración por los Difuntos",
            "oracion": `Señor Todopoderoso,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 3,
            "categoria": "Oración por los Difuntos",
            "oracion": `Padre Celestial,\n\nEn este momento de tristeza, te pedimos que recibas en tu reino a ${nombre}. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 4,
            "categoria": "Oración por los Difuntos",
            "oracion": `Dios de amor y misericordia,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 5,
            "categoria": "Oración por los Difuntos",
            "oracion": `Señor de la vida y la muerte,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 6,
            "categoria": "Oración por los Difuntos",
            "oracion": `Padre Eterno,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 7,
            "categoria": "Oración por los Difuntos",
            "oracion": `Dios de compasión,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 8,
            "categoria": "Oración por los Difuntos",
            "oracion": `Señor de la misericordia,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 9,
            "categoria": "Oración por los Difuntos",
            "oracion": `Dios de bondad,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        },
        {
            "id": 10,
            "categoria": "Oración por los Difuntos",
            "oracion": `Padre de misericordia,\n\nTe pedimos que recibas en tu reino a ${nombre}, quien ha dejado este mundo. Que ${nombre} encuentre la paz eterna en tu presencia y que su alma descanse en tu amor infinito. Consuela a los que lloran su partida y dales la fortaleza para enfrentar estos momentos difíciles.\n\nQue tu luz brille sobre ellos y les dé esperanza y consuelo. Ayúdanos a recordar con cariño y gratitud los momentos compartidos con ${nombre}, y a vivir nuestras vidas con la certeza de que un día nos reuniremos en tu gloria. Amén.\n`
        }
    ];

    return oracionesDifuntos[index];
}
