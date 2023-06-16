$(document).ready(function () {
  $('form').on('submit', function (e) {
    e.preventDefault();
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem = $('<li style="display:none"></li>');
    $(`<a class="item-lista" href="#">
    ${novaTarefa}
    </a>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereco-imagem-nova').val('');
  });
  $(document).on('click', 'a.item-lista', function (e) {
    if ($(this).attr('class') == 'item-lista') {
      $(this).addClass('item-riscado');
    } else {
      $(this).removeClass('item-riscado');
    }
  });
});
