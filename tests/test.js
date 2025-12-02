// Apenas os objetos de teste - copie e cole no console do navegador
const usuariosTeste = [
  {
    nome: "João Silva",
    email: "joao.silva@email.com",
    senha: "senha123",
    rendaMedia: 3500.5,
    dataNascimento: "1990-05-15",
  },
  {
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    senha: "maria456",
    rendaMedia: 4200.0,
    dataNascimento: "1985-08-22",
  },
  {
    nome: "Carlos Santos",
    email: "carlos.santos@email.com",
    senha: "carlos789",
    rendaMedia: 2800.75,
    dataNascimento: "1995-02-10",
  },
  {
    nome: "Ana Pereira",
    email: "ana.pereira@email.com",
    senha: "ana101112",
    rendaMedia: 5100.0,
    dataNascimento: "1988-11-30",
  },
  {
    nome: "Pedro Costa",
    email: "pedro.costa@email.com",
    senha: "pedro131415",
    rendaMedia: 3900.25,
    dataNascimento: "1992-07-18",
  },
  {
    nome: "Juliana Almeida",
    email: "juliana.almeida@email.com",
    senha: "juliana161718",
    rendaMedia: 4700.8,
    dataNascimento: "1993-03-25",
  },
  {
    nome: "Rafael Rodrigues",
    email: "rafael.rodrigues@email.com",
    senha: "rafael192021",
    rendaMedia: 3200.0,
    dataNascimento: "1991-09-05",
  },
  {
    nome: "Fernanda Lima",
    email: "fernanda.lima@email.com",
    senha: "fernanda222324",
    rendaMedia: 5500.0,
    dataNascimento: "1987-12-12",
  },
  {
    nome: "Lucas Martins",
    email: "lucas.martins@email.com",
    senha: "lucas252627",
    rendaMedia: 4100.5,
    dataNascimento: "1994-06-08",
  },
  {
    nome: "Patrícia Souza",
    email: "patricia.souza@email.com",
    senha: "patricia282930",
    rendaMedia: 4800.0,
    dataNascimento: "1989-04-17",
  },
];

usuariosTeste.forEach((usuario) => {
  localStorage.setItem(usuario.email, JSON.stringify(usuario));
});
console.log("10 usuários de teste cadastrados!");
