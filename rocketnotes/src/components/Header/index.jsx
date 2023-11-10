import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img 
          src="https://github.com/fernandoalvesrufino.png" 
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Fernando Rufino</strong>
        </div>
      </Profile>
    </Container>
  );
};