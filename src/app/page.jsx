import Image from 'next/image'
import styles from './globals.css'

export default function Home() {
  return (
    <main>
      <div>
        <div>
        <h1 className=""> Sobre nós </h1>
          <p>O nosso projeto tem como objetivo principal a implementação de um sistema automatizado de vistoria de bicicletas, utilizando APIs de reconhecimento de objetos. Nossa proposta visa tornar o processo de vistoria mais eficiente, ágil e seguro, eliminando a necessidade do cliente fazer o upload de imagens da bicicleta.</p>
          <p>Para alcançar esse objetivo, iremos integrar APIs de reconhecimento de objetos em diferentes etapas do processo de vistoria. Inicialmente, o cliente será direcionado para uma tela de validação, onde será solicitado que ele confirme sua presença e inicie o processo de vistoria.</p>
          <p>A partir desse momento, a IA (Inteligência Artificial) entrará em ação, analisando as imagens em tempo real, capturadas pela câmera do dispositivo do cliente. Através do uso de algoritmos avançados de reconhecimento de objetos, a IA será capaz de identificar a bicicleta e suas características específicas, como marca, modelo, cor, tamanho, entre outras informações relevantes.</p>
          <p>Além disso, a IA também será treinada para verificar se há algum dano visível na bicicleta que possa inviabilizar a contratação do seguro. Caso a IA detecte algum problema, será gerado um alerta para o cliente, informando a necessidade de reparo antes de prosseguir com o processo de seguro.</p>
        </div>
      </div>
    </main>
  )
}
