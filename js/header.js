// Cabeçalho único do PK13: editar aqui para atualizar todas as páginas.
(function () {
  const current = location.pathname.split('/').pop() || 'index.html';
  const links = [
    ['Sobre', './index.html#sobre', 'index.html'],
    ['Portfólio', './portfolio.html', 'portfolio.html'],
    ['Serviços', './vitrine.html', 'vitrine.html']
  ];
  const navItems = links.map(([label, href, page]) => {
    const active = current === page && label !== 'Sobre';
    return `<li class="nav-item"><a class="nav-link${active ? ' active' : ''}" ${active ? 'aria-current="page" ' : ''}href="${href}">${label}</a></li>`;
  }).join('');
  const budgetActive = current === 'orcamento.html';
  const header = document.getElementById('cabecalho-pk13');
  if (!header) return;
  header.className = 'cabecalho-editorial';
  header.innerHTML = `<nav class="navbar navbar-expand-lg container py-3" aria-label="Navegação principal">
    <a class="marca-pk13" href="./index.html" aria-label="PK13 Fotografia, página inicial">PK<span>13</span><small>FOTOGRAFIA</small></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Abrir menu"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="menuPrincipal"><ul class="navbar-nav ms-auto align-items-lg-center gap-lg-4">${navItems}
      <li class="nav-item"><a class="btn btn-orcamento-nav" href="./orcamento.html" ${budgetActive ? 'aria-current="page"' : ''}>Solicitar orçamento ↗</a></li>
    </ul></div>
  </nav>`;
})();
