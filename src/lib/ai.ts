import { Groq } from 'groq-sdk'

const groq = new Groq();

export async function generateTermDefinitions(content: string) {
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {
                "role": "system",
                "content": "JSON:Your task is to extract all the term and definition from the provided content and onfly from the provided content. Cover all the key definitions and the corresponding term of the text."
            },
            {
                "role": "user",
                "content": "### Inteligência Artificial: Revolucionando o Presente e Moldando o Futuro\n\nA Inteligência Artificial (IA) é uma das áreas mais fascinantes e promissoras da tecnologia moderna. Seu objetivo é desenvolver sistemas capazes de realizar tarefas que, até recentemente, só podiam ser executadas por seres humanos. Desde a sua concepção, a IA tem evoluído de forma impressionante, impactando diversos setores da sociedade, como saúde, transporte, educação e entretenimento.\n\nNos últimos anos, o desenvolvimento de algoritmos de aprendizado de máquina (machine learning) e redes neurais artificiais tem permitido avanços significativos na capacidade dos sistemas de IA. Estes algoritmos permitem que as máquinas aprendam com dados, identificando padrões e fazendo previsões com uma precisão cada vez maior. Um exemplo claro é o reconhecimento de imagens e voz, onde a IA já supera a performance humana em muitos casos.\n\nA automação de processos industriais é outra área onde a IA tem mostrado grande potencial. Robôs equipados com inteligência artificial podem realizar tarefas repetitivas com alta eficiência e precisão, reduzindo custos e aumentando a produtividade. Além disso, a IA está sendo utilizada para otimizar cadeias de suprimentos, prever falhas em equipamentos e até mesmo na manutenção preditiva.\n\nNo setor da saúde, a IA tem sido uma aliada valiosa no diagnóstico e tratamento de doenças. Algoritmos de aprendizado profundo são capazes de analisar imagens médicas com uma precisão que rivaliza com a dos melhores especialistas. Além disso, sistemas de IA podem processar grandes volumes de dados clínicos para identificar padrões e sugerir tratamentos personalizados para pacientes.\n\nO impacto da IA no transporte também é notável. Veículos autônomos, equipados com sensores avançados e algoritmos de IA, estão sendo testados e implementados em diversas partes do mundo. Estes veículos têm o potencial de reduzir acidentes, melhorar a eficiência do tráfego e oferecer maior conveniência para os usuários.\n\nA educação é outro campo onde a IA está trazendo inovações. Plataformas de aprendizado adaptativo utilizam algoritmos para personalizar a experiência de aprendizado para cada aluno, identificando suas necessidades e ajustando o conteúdo de acordo. Isso torna o ensino mais eficiente e acessível, especialmente em contextos de educação a distância.\n\nNo entretenimento, a IA está sendo utilizada para criar conteúdo de maneira inovadora. Algoritmos de aprendizado de máquina podem compor música, escrever roteiros e até mesmo gerar gráficos realistas para jogos e filmes. Essas aplicações não só expandem as possibilidades criativas, mas também reduzem o tempo e os custos de produção.\n\nApesar dos avanços, a IA também levanta questões éticas importantes. A privacidade dos dados, o viés nos algoritmos e o impacto no emprego são temas que precisam ser abordados à medida que a tecnologia avança. É crucial que o desenvolvimento da IA seja guiado por princípios éticos e regulado de forma a beneficiar a sociedade como um todo.\n\nA colaboração entre humanos e máquinas é vista como o futuro da IA. Em vez de substituir o trabalho humano, a IA pode amplificar as capacidades humanas, permitindo que as pessoas se concentrem em tarefas mais criativas e estratégicas. Essa sinergia tem o potencial de transformar diversos setores e melhorar a qualidade de vida em escala global.\n\nEm resumo, a Inteligência Artificial está transformando o mundo de maneiras inimagináveis. Seu impacto é sentido em praticamente todos os aspectos da vida moderna, desde a saúde até o entretenimento. À medida que continuamos a explorar e desenvolver essa tecnologia, é essencial que façamos isso de forma responsável e ética, garantindo que seus benefícios sejam amplamente distribuídos e que os desafios sejam adequadamente enfrentados."
            },
            {
                "role": "assistant",
                "content": "{\n  \"terms\": [\n    \"Inteligência Artificial\",\n    \"machine learning\",\n    \"redes neurais artificiais\",\n    \"aprendizado de máquina\",\n    \"algoritmos de aprendizado profundo\",\n    \"Veículos autônomos\",\n    \"Plataformas de aprendizado adaptativo\",\n    \"Privacidade dos dados\",\n    \"Viés nos algoritmos\",\n    \"Impacto no emprego\",\n    \"aprendizado de máquina\",\n    \"redes neurais artificiais\"\n  ],\n  \"definitions\": [\n    \"desenvolver sistemas capazes de realizar tarefas que, até recentemente, só podiam ser executadas por seres humanos.\",\n    \"desenvolvimento de algoritmos que permitem que as máquinas aprendam com dados, identificando padrões e fazendo previsões com uma precisão cada vez maior.\",\n    \"Reconhecimento de imagens e voz, onde a IA já supera a performance humana em muitos casos.\",\n    \"Automação de processos industriais com robôs equipados com inteligência artificial.\",\n    \"utilizado para otimizar cadeias de suprimentos, prever falhas em equipamentos e até mesmo na manutenção preditiva.\",\n    \"análise de imagens médicas com uma precisão que rivaliza com a dos melhores especialistas.\",\n    \"processar grandes volumes de dados clínicos para identificar padrões e sugerir tratamentos personalizados para pacientes.\",\n    \"Veículos autônomos equipados com sensores avançados e algoritmos de IA, estão sendo testados e implementados em diversas partes do mundo.\",\n    \"personalizar a experiência de aprendizado para cada aluno, identificando suas necessidades e ajustando o conteúdo de acordo.\",\n    \" Questões éticas importantes como privacidade dos dados, viés nos algoritmos e impacto no emprego.\",\n    \"Colaboração entre humanos e máquinas é vista como o futuro da IA, amplificando as capacidades humanas e permitindo que as pessoas se concentrem em tarefas mais criativas e estratégicas.\"\n  ]\n}"
            },
            {
                "role": "user",
                "content": "O Sol é uma estrela brilhante localizada na Via Láctea a uma distância de 150 milhões de quilômetros da Terra, no centro do Sistema Solar. Embora seja milhares de vezes maior do que o nosso planeta, ela é classificada como uma estrela anã amarela.\n\nA maior parte do Sol é composta pelos gases hélio e hidrogênio, não havendo superfícies sólidas. São, ao todo, seis camadas que formam esse astro, desde o núcleo, no seu interior, até a coroa, camada mais externa. O Sol é uma fonte primária de calor e energia, sendo de fundamental importância para a manutenção da vida no planeta"
            },
            {
                "role": "assistant",
                "content": "{\n  \"terms\": [\n    \"Sol\",\n    \"Via Láctea\",\n    \"Sistema Solar\",\n    \"estrela anã amarela\",\n    \"hélio\",\n    \"hidrogênio\",\n    \"núcleo\",\n    \"coroa\"\n  ],\n  \"definitions\": [\n    \"uma estrela brilhante localizada no centro do Sistema Solar a uma distância de 150 milhões de quilômetros da Terra.\",\n    \"uma galáxia que contém o Sistema Solar.\",\n    \"um sistema de planetas, asteroides e outros objetos que orbitam em torno do Sol.\",\n    \"uma classificação de estrelas com base em sua cor e tamanho.\",\n    \"um gás nobre e leve que é um dos principais componentes do Sol.\",\n    \"um gás combustível que é outro componente principal do Sol.\",\n    \"a camada mais interna do Sol, onde ocorrem reações nucleares.\",\n    \"a camada mais externa do Sol, visível durante eclipses solares.\",\n    \"uma fonte primária de calor e energia para a manutenção da vida no planeta.\"\n  ]\n}"
            },
            {
                "role": "user",
                "content": content
            },
        ],
        "model": "llama3-70b-8192",
        "temperature": 1,
        "max_tokens": 1024,
        "top_p": 1,
        "stream": false,
        response_format: {
            type: "json_object"
        },
        "stop": null
    });

    return chatCompletion.choices[0].message.content;
}