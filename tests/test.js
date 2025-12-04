const dadosTesteCadastro = [
  {
    nome: "Ana Silva Santos",
    email: "ana.silva@email.com",
    senha: "Ana@123456",
    rendaMedia: "3500.00",
    plano: "básico",
    dataNascimento: "1990-05-15",
  },
  {
    nome: "Carlos Oliveira Mendes",
    email: "carlos.mendes@empresa.com",
    senha: "Carlos@2024",
    rendaMedia: "8500.50",
    plano: "premium",
    dataNascimento: "1985-08-22",
  },
  {
    nome: "Mariana Costa Lima",
    email: "mariana.lima@outlook.com",
    senha: "Mari#2024",
    rendaMedia: "4200.00",
    plano: "intermediário",
    status: "inativo",
    dataNascimento: "1995-11-30",
  },
  {
    nome: "Pedro Henrique Alves",
    email: "pedro.alves@universidade.edu",
    senha: "Pedro@Estudante",
    rendaMedia: "1500.00",
    plano: "básico",
    dataNascimento: "2000-03-10",
  },
  {
    nome: "Juliana Fernandes Rocha",
    email: "juliana.rocha@consultoria.com",
    senha: "Juli@Consult123",
    rendaMedia: "12000.75",
    plano: "premium",
    dataNascimento: "1988-12-05",
  },
  {
    nome: "Roberto Nascimento Souza",
    email: "roberto.souza@email.com",
    senha: "Roberto@60",
    rendaMedia: "2800.00",
    plano: "básico",
    dataNascimento: "1960-07-18",
  },
  {
    nome: "Fernanda Duarte Castro",
    email: "fernanda.castro@corporativo.com",
    senha: "Fer@Corp789",
    rendaMedia: "25000.00",
    plano: "vip",
    dataNascimento: "1978-04-25",
  },
  {
    nome: "Lucas Martins Pereira",
    email: "lucas.pereira@freela.dev",
    senha: "Lucas@Dev99",
    rendaMedia: "6800.00",
    plano: "intermediário",
    dataNascimento: "1992-09-14",
  },
  {
    nome: "Patrícia Gomes Silva",
    email: "patricia.silva@mei.com.br",
    senha: "Paty@MEI2024",
    rendaMedia: "5200.00",
    plano: "básico",
    status: "ativo",
    dataNascimento: "1983-01-20",
  },
  {
    nome: "David Johnson Smith",
    email: "david.smith@global.com",
    senha: "David@Global1",
    rendaMedia: "18000.00",
    plano: "premium",
    dataNascimento: "1975-06-08",
  },
];

const gerarIdComPrefixo = function () {
  const prefixo = "membro";
  const timestamp = Date.now(); // Timestamp atual
  const random = Math.floor(Math.random() * 10000); // Número aleatório
  return `${prefixo}_${timestamp}_${random}`;
};

dadosTesteCadastro.forEach((usuario) => {
  localStorage.setItem(gerarIdComPrefixo(), JSON.stringify(usuario));
});
