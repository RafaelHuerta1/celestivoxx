



export   function getOracionEnfermos(index, nombre){
    console.log(index, nombre)

    const   oracionesEnfermos = [
        {
            "id": 1,
            "categoria": "Oración para los Enfermos",
            "oracion": `Amado Padre Celestial,\n\nTe rogamos que envíes tu poder sanador sobre ${nombre}. Que ${nombre} sienta tu amor y tu paz en estos momentos difíciles. Fortalece su espíritu y dale la serenidad necesaria para enfrentar esta enfermedad.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`,
            "versiculo_biblico": `Versículo Bíblico:\n ¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15`
        },
        {
            "id": 2,
            "categoria": "Oración para los Enfermos",
            "oracion": `Querido Señor,\n\nTe pedimos con humildad que derrames tu gracia sobre ${nombre}. Que tu amor y tu paz llenen su corazón mientras enfrenta esta enfermedad. Dale la fuerza y el coraje para superar estos momentos difíciles.\n\nJesucristo, en tu infinita misericordia, escucha nuestras súplicas y concede a ${nombre} la sanación que necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su espíritu.\n`,
            "versiculo_biblico": `Versículo Bíblico:\n ¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15`,
        },
        {
            "id": 3,
            "categoria": "Oración para los Enfermos",
            "oracion": `Padre Amado,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`,
            "versiculo_biblico": `Versículo Bíblico:\n ¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15`,
        },
        {
            "id": 4,
            "categoria": "Oración de Gratitud",
            "oracion": `Dios amado, te agradecemos por todas las bendiciones que has derramado sobre nuestras vidas. En este momento de reflexión, queremos expresar nuestra más profunda gratitud por tu amor inagotable. Te agradecemos por todo lo que nos has dado y por las lecciones que nos has enseñado. Que nuestra gratitud sea constante y que vivamos nuestras vidas de acuerdo con tu voluntad. Amén.`,
            "versiculo_biblico": " Versículo Bíblico:\n Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús. 1 Tesalonicenses 5:18",
        },
        {
            "id": 5,
            "categoria": "Oración por la Paz", /** aqui falta modificar la oracion para que aparesca el nombre */
            "oracion": `Señor, en medio de la agitación y el caos que nos rodea, te pedimos que traigas tu paz que sobrepasa todo entendimiento. Que tu presencia tranquilizadora llene nuestros corazones y nos de la fortaleza para enfrentar los desafíos de la vida. Te pedimos que traigas paz a nuestros hogares, comunidades y al mundo entero. Que tu paz reine sobre nosotros. Amén.`,
            "versiculo_biblico": " Versículo Bíblico:\n  La paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús. Filipenses 4:7"
        },
        {
            "id": 6,
            "categoria": "Oración para los Enfermos",
            "oracion": `Querido Dios,\n\nTe pedimos que derrames tu amor sanador sobre ${nombre}. Que ${nombre} sienta tu presencia y tu paz en estos momentos de enfermedad. Fortalece su espíritu y dale la serenidad necesaria para enfrentar este desafío.\n\nJesucristo, en tu infinita misericordia, escucha nuestras súplicas y concede a ${nombre} la sanación que tanto necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su espíritu.\n`,
            "versiculo_biblico": `\nVersículo Bíblico:\n“¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15`
      
        },
        {
            "id": 7,
            "categoria": "Oración para los Enfermos",
            "oracion": `Padre Celestial,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`,
            "versiculo_biblico": "\nVersículo Bíblico:\n¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados. \nSantiago 5:14-15",
        },
        {
            "id": 8,
            "categoria": "Oración para los Enfermos",
            "oracion": `Querido Padre,\n\nTe pedimos que derrames tu gracia sanadora sobre ${nombre}. Que ${nombre} sienta tu amor y tu paz en estos momentos difíciles. Fortalece su espíritu y dale la serenidad necesaria para enfrentar esta enfermedad.\n\nSeñor Jesús, en tu infinita bondad, escucha nuestras oraciones y concede a ${nombre} la sanación que tanto necesita. Que tu presencia sea un consuelo constante en su vida, renovando su esperanza y su fe.\n`,
            "versiculo_biblico":"\nVersículo Bíblico:\n“¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15"
        },
        {
            "id": 9,
            "categoria": "Oración para los Enfermos",
            "oracion": `Amado Señor,\n\nTe pedimos que envíes tu sanación sobre ${nombre}. Que ${nombre} sienta tu presencia y tu amor en cada momento de su enfermedad. Fortalece su espíritu y dale la paz que necesita para enfrentar este desafío.\n\nJesucristo, en tu infinita misericordia, escucha nuestras súplicas y concede a ${nombre} la sanación que tanto necesita. Que tu amor y tu poder se manifiesten en su vida, brindándole esperanza y renovando su espíritu.\n`,
            "versiculos_biblicos": "\nVersículo Bíblico:\n“¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15"
            
        },
        {
            "id": 10,
            "categoria": "Oración para los Enfermos",
            "oracion": `Querido Padre Celestial,\n\nTe pedimos humildemente que derrames tu gracia sanadora sobre ${nombre}. Concede a ${nombre} la fortaleza y la paz necesarias para enfrentar este momento de enfermedad. Que tu presencia consoladora y sanadora esté siempre con ${nombre}, brindándole descanso y alivio en medio de esta prueba.\n\nSeñor Jesucristo, en tu infinita misericordia, escucha nuestras súplicas y concede a ${nombre} la sanación que tanto necesita. Que tu amor y tu poder se manifiesten en su vida, dándole esperanza y renovando su espíritu.\n`,
            "versiculos_biblicos":"\nVersículo Bíblico:\n“¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.”\nSantiago 5:14-15",

        }
        
    ]

    return oracionesEnfermos[index]
}


